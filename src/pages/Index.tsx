import Hero from "@/components/portfolio/Hero";
import SkillsSummary from "@/components/portfolio/SkillsSummary";
import Qualifications from "@/components/portfolio/Qualifications";
import ExperienceTimeline from "@/components/portfolio/ExperienceTimeline";
import Education from "@/components/portfolio/Education";

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
    <div className="min-h-screen">
      <nav className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="container mx-auto flex items-center justify-between h-14">
          <a href="#top" className="font-semibold">MW</a>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#skills">Skills</a>
            <a href="#qualifications">Qualifikationen</a>
            <a href="#projects">Projekte</a>
            <a href="#education">Ausbildung</a>
            <a href="mailto:kontakt@marvin-warnke.dev">Kontakt</a>
          </div>
        </div>
      </nav>

      <main id="top" className="container mx-auto py-10 space-y-10">
        <Hero />
        <SkillsSummary />
        <Qualifications />
        <ExperienceTimeline />
        <Education />
      </main>

      <footer className="py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Marvin Warnke · Built with React & Tailwind
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
    </div>
  );
};

export default Index;
