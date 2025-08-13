import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// 실제로는 데이터베이스나 CMS에서 가져올 데이터
const blogPosts = {
  "aws-eks-cluster-guide": {
    id: 1,
    title: "AWS EKS 클러스터 구축 및 운영 가이드",
    excerpt: "Kubernetes 클러스터를 AWS EKS로 구축하고 운영하는 실무 경험을 공유합니다.",
    content: `# AWS EKS 클러스터 구축 및 운영 가이드

## 개요

AWS EKS(Elastic Kubernetes Service)는 AWS에서 제공하는 관리형 Kubernetes 서비스입니다. 이 글에서는 실제 프로덕션 환경에서 EKS 클러스터를 구축하고 운영한 경험을 공유하겠습니다.

## EKS 클러스터 구축

### 1. 사전 준비사항

EKS 클러스터를 구축하기 전에 다음 사항들을 준비해야 합니다:

- AWS CLI 설치 및 구성
- kubectl 설치
- eksctl 설치 (선택사항)
- 적절한 IAM 권한 설정

### 2. VPC 및 네트워크 구성

\`\`\`yaml
# vpc-config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: vpc-config
data:
  vpc-cidr: "10.0.0.0/16"
  public-subnet-1: "10.0.1.0/24"
  public-subnet-2: "10.0.2.0/24"
  private-subnet-1: "10.0.10.0/24"
  private-subnet-2: "10.0.20.0/24"
\`\`\`

### 3. EKS 클러스터 생성

Terraform을 사용한 EKS 클러스터 생성 예제:

\`\`\`hcl
resource "aws_eks_cluster" "main" {
  name     = var.cluster_name
  role_arn = aws_iam_role.eks_cluster.arn
  version  = "1.28"

  vpc_config {
    subnet_ids              = var.subnet_ids
    endpoint_private_access = true
    endpoint_public_access  = true
    public_access_cidrs     = ["0.0.0.0/0"]
  }

  depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_policy,
  ]
}
\`\`\`

## 운영 경험과 베스트 프랙티스

### 모니터링 및 로깅

프로덕션 환경에서는 다음과 같은 모니터링 도구들을 활용했습니다:

- **CloudWatch Container Insights**: 클러스터 및 노드 메트릭 모니터링
- **Prometheus + Grafana**: 커스텀 메트릭 및 대시보드
- **Fluentd**: 로그 수집 및 중앙화

### 보안 고려사항

1. **네트워크 정책**: Calico를 사용한 네트워크 분리
2. **RBAC**: 최소 권한 원칙 적용
3. **Pod Security Standards**: 보안 정책 강화
4. **이미지 스캐닝**: ECR 이미지 취약점 검사

## 결론

AWS EKS는 Kubernetes 클러스터 관리의 복잡성을 크게 줄여주는 훌륭한 서비스입니다. 하지만 여전히 네트워킹, 보안, 모니터링 등 많은 부분에서 신중한 설계와 운영이 필요합니다.

다음 포스트에서는 EKS에서의 CI/CD 파이프라인 구축에 대해 다루겠습니다.`,
    date: "2024년 12월 15일",
    readTime: "10분",
    category: "AWS",
    image: "/aws-eks-cluster-guide.png",
    author: "박상준",
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link href="/blog">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-2" />
                블로그로 돌아가기
              </Button>
            </Link>
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              공유하기
            </Button>
          </div>

          <Card>
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img
                src={post.image || "/placeholder.svg?height=400&width=800"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
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
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{post.title}</h1>
              <p className="text-lg text-muted-foreground">{post.excerpt}</p>
              <div className="flex items-center mt-4 pt-4 border-t">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm text-muted-foreground">AWS Cloud Engineer</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-slate max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-pre:text-foreground">
                <pre className="whitespace-pre-wrap font-sans leading-relaxed">{post.content}</pre>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                다른 글 보기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
