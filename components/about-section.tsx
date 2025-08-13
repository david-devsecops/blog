import { Badge } from "@/components/ui/badge"

const skills = [
  "AWS",
  "Azure",
  "GCP",
  "Oracle",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "GitLab CI/CD",
  "Linux",
  "Unix",
  "Nginx",
  "EMR",
  "Athena",
  "CloudWatch",
  "EKS",
  "IaaS",
  "Solaris",
  "Veritas",
  "NetBackup",
]

const certifications = [
  "AWS Solution Architect Associate",
  "AWS Database Specialty",
  "Google Cloud Professional Cloud Architect",
  "Oracle Cloud Infrastructure 2018 Architect Associate",
  "OCP",
  "SCSECA",
  "SCNA",
  "CSA",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">소개</h2>
            <p className="text-lg text-muted-foreground">저에 대해 더 자세히 알아보세요.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/professional-cloud-engineer.png"
                alt="박상준 프로필 사진"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">AWS Cloud Engineer 👋</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  12년 9개월의 클라우드 인프라 경험을 보유한 AWS Solution Architect입니다. 현재
                  서울과학종합대학원대학교에서 AI빅데이터학과 석사과정을 재학 중이며, 한국은행 CBDC 활용성 테스트 인프라
                  구축 프로젝트를 진행하고 있습니다.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  아모레퍼시픽의 On-Premise to AWS Migration 프로젝트를 성공적으로 완료했으며, SKT, SK C&C, 신한DS 등
                  다양한 대기업의 클라우드 전환과 운영을 담당했습니다. Oracle부터 AWS, Azure, GCP까지 멀티 클라우드
                  환경에서의 풍부한 경험을 보유하고 있습니다.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  "두드려라. 그러면 열릴 것이다. 그래도 안 열리면 뚫어라."라는 신념으로 어떤 기술적 도전에도 포기하지
                  않고 해결책을 찾아내는 것이 저의 강점입니다.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">기술 스택</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">자격증</h4>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
