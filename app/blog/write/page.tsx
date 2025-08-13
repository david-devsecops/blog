"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save, Eye, Upload } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const categories = [
  "AWS",
  "DevOps",
  "Cloud Architecture",
  "Container",
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "Monitoring",
  "Security",
]

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  image: string
  readTime: string
  createdAt: string
  published: boolean
}

export default function WriteBlogPage() {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    image: "",
    readTime: "",
  })
  const [isPreview, setIsPreview] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // 임시저장된 데이터 불러오기
    const savedDraft = localStorage.getItem("blog-draft")
    if (savedDraft) {
      try {
        const parsedDraft = JSON.parse(savedDraft)
        setFormData(parsedDraft)
      } catch (error) {
        console.error("임시저장 데이터 로드 실패:", error)
      }
    }
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const autoSave = setTimeout(() => {
      if (formData.title || formData.content) {
        localStorage.setItem("blog-draft", JSON.stringify(formData))
      }
    }, 2000) // 2초마다 자동 저장

    return () => clearTimeout(autoSave)
  }, [formData, isMounted])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = async () => {
    if (!isMounted) return

    setIsSaving(true)
    try {
      // localStorage에 임시저장
      localStorage.setItem("blog-draft", JSON.stringify(formData))

      // 실제 프로덕션에서는 API 호출
      // await fetch('/api/blog/save', { method: 'POST', body: JSON.stringify(formData) })

      alert("블로그 포스트가 임시저장되었습니다!")
    } catch (error) {
      console.error("저장 실패:", error)
      alert("저장 중 오류가 발생했습니다.")
    } finally {
      setIsSaving(false)
    }
  }

  const handlePublish = async () => {
    if (!isMounted) return

    setIsSaving(true)
    try {
      const blogPost: BlogPost = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString(),
        published: true,
      }

      // localStorage에 발행된 포스트 저장
      const existingPosts = JSON.parse(localStorage.getItem("published-blogs") || "[]")
      existingPosts.unshift(blogPost)
      localStorage.setItem("published-blogs", JSON.stringify(existingPosts))

      // 임시저장 데이터 삭제
      localStorage.removeItem("blog-draft")

      // 실제 프로덕션에서는 API 호출
      // await fetch('/api/blog/publish', { method: 'POST', body: JSON.stringify(blogPost) })

      alert("블로그 포스트가 발행되었습니다!")
      router.push("/blog")
    } catch (error) {
      console.error("발행 실패:", error)
      alert("발행 중 오류가 발생했습니다.")
    } finally {
      setIsSaving(false)
    }
  }

  const parseMarkdown = (content: string) => {
    return content
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
      .replace(/\*(.*)\*/gim, "<em>$1</em>")
      .replace(/`([^`]*)`/gim, "<code>$1</code>")
      .replace(/\n/gim, "<br>")
  }

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p>에디터를 불러오는 중...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/blog">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                블로그로 돌아가기
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">새 글 작성</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={() => setIsPreview(!isPreview)}>
              <Eye className="h-4 w-4 mr-2" />
              {isPreview ? "편집" : "미리보기"}
            </Button>
            <Button variant="outline" onClick={handleSave} disabled={isSaving}>
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? "저장 중..." : "임시저장"}
            </Button>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={handlePublish}
              disabled={!formData.title || !formData.content || isSaving}
            >
              {isSaving ? "발행 중..." : "발행하기"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {!isPreview ? (
              <Card>
                <CardHeader>
                  <CardTitle>글 작성</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="title">제목</Label>
                    <Input
                      id="title"
                      placeholder="블로그 포스트 제목을 입력하세요"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="excerpt">요약</Label>
                    <Textarea
                      id="excerpt"
                      placeholder="포스트의 간단한 요약을 작성하세요"
                      value={formData.excerpt}
                      onChange={(e) => handleInputChange("excerpt", e.target.value)}
                      className="mt-2"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">내용</Label>
                    <Textarea
                      id="content"
                      placeholder="마크다운 형식으로 내용을 작성하세요..."
                      value={formData.content}
                      onChange={(e) => handleInputChange("content", e.target.value)}
                      className="mt-2 min-h-[400px] font-mono"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      마크다운 문법을 사용할 수 있습니다. 자동 임시저장됩니다.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{formData.category || "카테고리 없음"}</Badge>
                    <div className="text-sm text-muted-foreground">
                      {formData.readTime && `${formData.readTime}분 읽기`}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{formData.title || "제목을 입력하세요"}</CardTitle>
                  <p className="text-muted-foreground">{formData.excerpt || "요약을 입력하세요"}</p>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-slate max-w-none">
                    {formData.content ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: parseMarkdown(formData.content),
                        }}
                      />
                    ) : (
                      <p className="text-muted-foreground">내용을 입력하세요...</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>발행 설정</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="category">카테고리</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="카테고리 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="readTime">예상 읽기 시간 (분)</Label>
                  <Input
                    id="readTime"
                    type="number"
                    placeholder="5"
                    value={formData.readTime}
                    onChange={(e) => handleInputChange("readTime", e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="image">대표 이미지 URL</Label>
                  <Input
                    id="image"
                    placeholder="https://example.com/image.jpg"
                    value={formData.image}
                    onChange={(e) => handleInputChange("image", e.target.value)}
                    className="mt-2"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 w-full bg-transparent"
                    onClick={() => alert("이미지 업로드 기능은 추후 구현 예정입니다.")}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    이미지 업로드
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>마크다운 가이드</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div>
                  <code># 제목</code> - 큰 제목
                </div>
                <div>
                  <code>## 소제목</code> - 중간 제목
                </div>
                <div>
                  <code>**굵게**</code> - 굵은 글씨
                </div>
                <div>
                  <code>*기울임*</code> - 기울임 글씨
                </div>
                <div>
                  <code>`코드`</code> - 인라인 코드
                </div>
                <div>
                  <code>```언어</code> - 코드 블록
                </div>
                <div>
                  <code>[링크](URL)</code> - 링크
                </div>
                <div>
                  <code>![이미지](URL)</code> - 이미지
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
