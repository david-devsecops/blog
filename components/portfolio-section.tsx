import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "한국은행 CBDC 활용성 테스트 인프라",
    description: "중앙은행 디지털화폐(CBDC) 테스트를 위한 클라우드 인프라 구축 및 운영",
    image: "/cbdc-blockchain-dashboard.png",
    tags: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
    period: "2024.08 ~ 2025.07",
    company: "한국은행",
  },
  {
    title: "아모레퍼시픽 AWS Migration",
    description: "On-Premise 환경에서 AWS 클라우드로의 대규모 시스템 이관 프로젝트",
    image: "/aws-cloud-migration-architecture.png",
    tags: ["AWS", "Migration", "EC2", "RDS", "CloudWatch"],
    period: "2023.01 ~ 2023.10",
    company: "아모레퍼시픽",
  },
  {
    title: "SKT Tdeal AWS 인프라 구축",
    description: "Terraform을 활용한 SKT Tdeal 서비스 인프라 구축 및 비용 최적화",
    image: "/terraform-aws-iac.png",
    tags: ["AWS", "Terraform", "EMR", "Glue", "Athena", "CloudWatch"],
    period: "2022.01 ~ 2023.01",
    company: "SKT",
  },
  {
    title: "SK C&C WDP Google Cloud 구축",
    description: "Google Cloud Platform을 활용한 데이터 플랫폼 인프라 구축",
    image: "/google-cloud-data-infra.png",
    tags: ["GCP", "BigQuery", "Kubernetes", "Cloud Storage"],
    period: "2022.01 ~ 2023.01",
    company: "SK C&C",
  },
  {
    title: "SK 이노베이션 BaaS Platform",
    description: "Azure 기반 Blockchain as a Service 플랫폼 및 파이프라인 구축",
    image: "/azure-blockchain-architecture.png",
    tags: ["Azure", "Blockchain", "DevOps", "Pipeline"],
    period: "2018.12 ~ 2021.09",
    company: "SK 이노베이션",
  },
  {
    title: "Oracle ZDLRA 구축 및 운영",
    description: "신한DS, KB카드, 국민연금 등 금융권 Oracle Zero Data Loss Recovery Appliance 구축",
    image: "/oracle-backup-recovery.png",
    tags: ["Oracle", "ZDLRA", "Database", "Backup", "Recovery"],
    period: "2018.12 ~ 2021.09",
    company: "다수 금융기관",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">주요 프로젝트</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            12년 9개월간 수행한 대규모 클라우드 인프라 프로젝트들을 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <span className="font-medium">{project.company}</span>
                  <span>{project.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    <Github className="h-4 w-4 mr-2" />
                    기업 프로젝트
                  </Button>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" disabled>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    비공개
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
