import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { getProjects } from "@/lib/notion"

export async function PortfolioSection() {
  // Notion에서 프로젝트 가져오기
  const projects = await getProjects()

  return (
    <section id="portfolio" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">저의 프로젝트</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            클라우드 인프라와 자동화 도구 개발 프로젝트들을 소개합니다.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">아직 프로젝트가 없습니다.</p>
            <p className="text-sm text-muted-foreground mt-2">
              Notion에서 첫 번째 프로젝트를 추가해보세요!
            </p>
          </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {project.title}
                    {project.featured && (
                      <Badge variant="default" className="bg-emerald-600">
                        주요
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          코드
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          데모
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
