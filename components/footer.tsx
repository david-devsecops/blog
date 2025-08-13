import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/20 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-emerald-600 mb-4">Dev.Portfolio</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              창의적이고 기술적인 해결책으로 문제를 해결하는 개발자의 포트폴리오와 기술 블로그입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                  홈
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                  포트폴리오
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                  블로그
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                  소개
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">카테고리</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                  Frontend
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                  Backend
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                  DevOps
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                  Tutorial
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 Dev.Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
