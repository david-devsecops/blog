// 기존
import { BlogSection } from "@/components/blog-section"
import { PortfolioSection } from "@/components/portfolio-section"

// 변경 후 (Server Component로 사용)
import { BlogSection } from "@/components/blog-section"
import { PortfolioSection } from "@/components/portfolio-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <BlogSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
