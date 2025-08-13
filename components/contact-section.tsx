import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">연락처</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            클라우드 인프라 프로젝트나 기술 상담이 필요하시면 언제든 연락주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">연락 정보</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">이메일</p>
                    <p className="text-muted-foreground">golreas@naver.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">전화번호</p>
                    <p className="text-muted-foreground">010-7413-5650</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">위치</p>
                    <p className="text-muted-foreground">경기도 용인시, 대한민국</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">전문 분야</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• AWS/Azure/GCP 클라우드 마이그레이션</li>
                <li>• 클라우드 인프라 설계 및 구축</li>
                <li>• DevOps 및 CI/CD 파이프라인 구축</li>
                <li>• 컨테이너 오케스트레이션 (Kubernetes)</li>
                <li>• 클라우드 비용 최적화</li>
                <li>• 기술 아키텍처 컨설팅</li>
              </ul>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>메시지 보내기</CardTitle>
              <CardDescription>클라우드 프로젝트 협업이나 기술 상담이 있으시면 메시지를 남겨주세요.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    이름
                  </label>
                  <Input id="name" placeholder="홍길동" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    이메일
                  </label>
                  <Input id="email" type="email" placeholder="hong@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  제목
                </label>
                <Input id="subject" placeholder="클라우드 프로젝트 협업 제안" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  메시지
                </label>
                <Textarea id="message" placeholder="프로젝트 내용이나 기술 상담 내용을 입력해주세요..." rows={5} />
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">메시지 보내기</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
