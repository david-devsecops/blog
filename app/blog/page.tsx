import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Plus } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "AWS EKS 클러스터 구축 및 운영 가이드",
    excerpt: "Kubernetes 클러스터를 AWS EKS로 구축하고 운영하는 실무 경험을 공유합니다.",
    date: "2024년 12월 15일",
    readTime: "10분",
    category: "AWS",
    image: "/aws-eks-cluster-guide.png",
    slug: "aws-eks-cluster-guide",
  },
  {
    id: 2,
    title: "Terraform을 활용한 Infrastructure as Code",
    excerpt: "Terraform으로 AWS 인프라를 코드로 관리하는 베스트 프랙티스를 소개합니다.",
    date: "2024년 12월 10일",
    readTime: "8분",
    category: "DevOps",
    image: "/terraform-iac-best-practices.png",
    slug: "terraform-iac-best-practices",
  },
  {
    id: 3,
    title: "멀티 클라우드 아키텍처 설계 경험",
    excerpt: "AWS, Azure, GCP를 활용한 멀티 클라우드 환경 구축 사례를 공유합니다.",
    date: "2024년 12월 5일",
    readTime: "12분",
    category: "Cloud Architecture",
    image: "/multi-cloud-architecture.png",
    slug: "multi-cloud-architecture",
  },
  {
    id: 4,
    title: "Docker와 Kubernetes 실무 활용법",
    excerpt: "컨테이너 기술을 실제 프로덕션 환경에서 활용하는 방법을 다룹니다.",
    date: "2024년 11월 28일",
    readTime: "15분",
    category: "Container",
    image: "/docker-kubernetes-production.png",
    slug: "docker-kubernetes-production",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">기술 블로그</h1>
            <p className="text-lg text-muted-foreground">클라우드 엔지니어링과 DevOps 경험을 공유합니다.</p>
          </div>
          <Link href="/blog/write">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-2" />새 글 작성
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
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
      </div>
    </div>
  )
}
