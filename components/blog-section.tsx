"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

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

const defaultBlogPosts = [
  {
    title: "AWS EKS 클러스터 구축 완벽 가이드",
    excerpt: "Terraform을 활용한 AWS EKS 클러스터 구축부터 운영까지의 실무 경험을 공유합니다.",
    date: "2024년 1월 15일",
    readTime: "12분",
    category: "AWS",
    image: "/aws-eks-cluster-guide.png",
    slug: "aws-eks-cluster-guide",
  },
  {
    title: "Terraform으로 IaC 구현하기",
    excerpt: "Infrastructure as Code의 모범 사례와 실제 프로젝트 적용 경험을 다룹니다.",
    date: "2024년 1월 10일",
    readTime: "8분",
    category: "Terraform",
    image: "/terraform-iac-best-practices.png",
    slug: "terraform-iac-best-practices",
  },
  {
    title: "멀티 클라우드 아키텍처 설계",
    excerpt: "AWS, Azure, GCP를 활용한 멀티 클라우드 환경 구축과 운영 전략을 소개합니다.",
    date: "2024년 1월 5일",
    readTime: "15분",
    category: "Cloud Architecture",
    image: "/multi-cloud-architecture.png",
    slug: "multi-cloud-architecture",
  },
  {
    title: "Docker와 Kubernetes 프로덕션 운영",
    excerpt: "컨테이너 오케스트레이션의 실무 적용과 모니터링, 트러블슈팅 경험을 공유합니다.",
    date: "2023년 12월 28일",
    readTime: "10분",
    category: "Container",
    image: "/docker-kubernetes-production.png",
    slug: "docker-kubernetes-production",
  },
]

export function BlogSection() {
  const [blogPosts, setBlogPosts] = useState(defaultBlogPosts)

  useEffect(() => {
    try {
      const publishedBlogs = localStorage.getItem("published-blogs")
      if (publishedBlogs) {
        const parsedBlogs = JSON.parse(publishedBlogs)
        if (parsedBlogs.length > 0) {
          // 최신 4개 포스트만 표시
          const recentPosts = parsedBlogs.slice(0, 4).map((post: BlogPost) => ({
            title: post.title,
            excerpt: post.excerpt,
            date: new Date(post.createdAt).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            readTime: `${post.readTime}분`,
            category: post.category,
            image: post.image || "/placeholder.svg?height=200&width=400",
            slug: post.id,
          }))
          setBlogPosts([...recentPosts, ...defaultBlogPosts.slice(recentPosts.length)])
        }
      }
    } catch (error) {
      console.error("블로그 포스트 로드 실패:", error)
    }
  }, [])

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">기술 블로그</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            클라우드 엔지니어링과 DevOps 경험을 공유합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={post.image || "/placeholder.svg?height=200&width=400"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">{post.title}</CardTitle>
                <CardDescription className="text-base">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" className="p-0 h-auto font-medium text-emerald-600 hover:text-emerald-700">
                    더 읽기
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button variant="outline" size="lg">
              모든 포스트 보기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
