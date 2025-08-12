import Hero from "@/components/portfolio/Hero";
import SkillsSummary from "@/components/portfolio/SkillsSummary";
import Qualifications from "@/components/portfolio/Qualifications";
import ExperienceTimeline from "@/components/portfolio/ExperienceTimeline";
import Education from "@/components/portfolio/Education";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Index = () => {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marvin Warnke",
    jobTitle: "Junior Software Engineer / Junior Consultant",
    description:
      "Portfolio von Marvin Warnke: Projekte, Skills und Qualifikationen in Software Engineering, Datawarehouse und ERP.",
    skills: [
      "Oracle SQL",
      "React",
      "Python",
      "Git",
      "Relationales Datawarehouse",
      "Infor ERP Entwicklung",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip-Link für Tastatur-Nutzer */}
      <a
        href="#hauptinhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >Direkt zum Inhalt</a>

      <nav className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="container mx-auto flex items-center justify-between h-14 px-4 md:px-6">
          <a href="#top" className="font-semibold tracking-tight" aria-label="Zur Startsektion">MW</a>
          {/* Desktop-Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#qualifications" className="hover:text-foreground transition-colors">Qualifikationen</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projekte</a>
            <a href="#education" className="hover:text-foreground transition-colors">Ausbildung</a>
            <a href="mailto:mawrx.dev@gmail.com" className="hover:text-foreground transition-colors">Kontakt</a>
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Menü öffnen">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-80 flex flex-col gap-2 pt-16">
                <nav className="flex flex-col gap-1" aria-label="Hauptnavigation mobil">
                  {[{ href: '#skills', label: 'Skills' }, { href: '#qualifications', label: 'Qualifikationen' }, { href: '#projects', label: 'Projekte' }, { href: '#education', label: 'Ausbildung' }].map(i => (
                    <SheetClose asChild key={i.href}>
                      <a
                        href={i.href}
                        className="rounded-md px-4 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >{i.label}</a>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <a
                      href="mailto:mawrx.dev@gmail.com"
                      className="rounded-md px-4 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >Kontakt</a>
                  </SheetClose>
                </nav>
                <div className="mt-auto pt-6 text-xs text-muted-foreground px-4">
                  © {new Date().getFullYear()} Marvin Warnke
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <main id="hauptinhalt" className="container mx-auto flex-1 py-8 md:py-12 space-y-8 md:space-y-12 px-4 md:px-6">
        <Hero />
        <SkillsSummary />
        <Qualifications />
        <ExperienceTimeline />
        <Education />
      </main>

      <footer className="py-8 md:py-10 text-center text-xs md:text-sm text-muted-foreground px-4">
        © {new Date().getFullYear()} Marvin Warnke · Built with React & Tailwind
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
    </div>
  );
};

export default Index;
