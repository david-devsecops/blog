import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            안녕하세요! 저는 <span className="text-emerald-600">박상준</span>입니다.
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
            AWS Cloud Engineer & Solution Architect
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            12년 9개월의 클라우드 인프라 경험으로 안정적이고 확장 가능한 시스템을 구축합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <a href="#portfolio">프로젝트 보기</a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#blog">기술 블로그</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:golreas@naver.com"
              className="text-muted-foreground hover:text-emerald-600 transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
