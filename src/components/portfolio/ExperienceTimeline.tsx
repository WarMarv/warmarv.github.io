import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  period: string;
  title: string;
  customer?: string;
  role: string;
  activities: string[];
  technologies?: string[];
  methods?: string[];
  note?: string;
}

const projects: Project[] = [
  {
    period: "03/2025 – heute",
    title: "FOCUS (Stundenerfassung, Projektplanung & Controlling)",
    customer: "Holtkamp Consulting GmbH",
    role: "Projektleiter & Lead-Developer",
    activities: [
      "Anforderungsanalyse, Stakeholder-Management, Mockups",
      "Frontend zur Projekt- und Budgetsteuerung",
      "Frontend zur Stundenerfassung inkl. Security",
      "Übersicht/Controlling der erfassten Stunden",
      "Core Datawarehouse nach Data Vault 2.0 (initial)",
      "Data Mart für Projektcontrolling (semantisch)",
      "ETL-Prozessplanung & initiale Umsetzung (täglich)",
      "Power BI Dashboard für Projektcontrolling",
    ],
    technologies: [
      "Linux",
      "Git",
      "Python",
      "VS Code",
      "Flask",
      "nGinx",
      "PostgreSQL",
      "React",
      "Vite",
      "Tailwind",
      "Docker",
      "Portainer",
      "Jira",
      "Confluence",
      "OneNote",
      "Excel",
      "DrawIO",
    ],
    methods: ["Wasserfall"],
    note: "Teilzeitprojekt",
  },
  {
    period: "02/2025 – heute",
    title: "Wohngeldrechner (Mobile App)",
    role: "Fullstack-Developer",
    activities: [
      "Konzeption & Entwicklung einer Mobile App",
      "Umsetzung in TypeScript, React Native, Expo",
      "Komplexe Berechnungslogik gemäß WoGG",
      "UX für nicht-technische Zielgruppen",
      "Formularvalidierung & Ergebnisvisualisierung",
      "Testing, Build-Automatisierung und Deployment via EAS",
    ],
    technologies: [
      "TypeScript",
      "React Native",
      "Expo",
      "GitHub",
      "Expo Go",
      "EAS",
      "VS Code",
      "Google Play Console",
    ],
    methods: ["Clean Code", "Mobile-First", "Agile Eigenentwicklung"],
    note: "Geplantes Deployment im August 2025",
  },
  {
    period: "01/2025 – 06/2025",
    title: "DRIVE (Reservierung & Inventarverwaltung)",
    customer: "Neuenhauser Maschinenbau GmbH",
    role: "Product Owner & Lead-Developer",
    activities: [
      "Anforderungsanalyse",
      "Einführung von Software",
      "API-Entwicklung nach RMM Level 3",
      "Entwicklung von Schnittstellen",
    ],
    technologies: [
      "Jira",
      "Confluence",
      "IntelliJ IDEA",
      "Docker",
      "Bitbucket",
      "Java",
      "Jaspersoft Studio",
      "LaTeX",
      "Maven",
      "Excel",
      "Postman",
      "Quarkus",
      "VS Code",
    ],
    methods: ["SCRUM"],
    note: "Teilzeitprojekt",
  },
  {
    period: "04/2024 – 06/2024",
    title: "Schulprojekt: Bewässerungsanlage",
    role: "Developer",
    activities: ["Aufbau & Verkabelung Arduino ESP32", "Weboberfläche entwickelt"],
    technologies: ["Arduino IDE", "ESP32", "HTML/CSS", "JavaScript"],
    methods: ["SCRUM"],
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <Card className="glass-surface">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Projekthistorie</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="relative border-s pl-6 space-y-10">
            {projects.map((p, idx) => (
              <li key={idx} className="space-y-3">
                <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full bg-primary shadow-brand" />
                <p className="text-sm text-muted-foreground">{p.period}{p.customer ? ` · ${p.customer}` : ""}</p>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm">Rolle: {p.role}</p>
                <ul className="list-disc ps-6 text-sm leading-relaxed">
                  {p.activities.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
                {p.technologies && (
                  <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Technologien:</span> {p.technologies.join(", ")}</p>
                )}
                {p.methods && (
                  <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Methoden:</span> {p.methods.join(", ")}</p>
                )}
                {p.note && (
                  <p className="text-sm text-muted-foreground">Weitere Informationen: {p.note}</p>
                )}
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </section>
  );
};

export default ExperienceTimeline;
