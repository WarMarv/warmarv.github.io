import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24">
    <Card className="glass-surface">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <Badge variant="secondary" className="mb-2 mr-2">{children}</Badge>
);

const SkillsSummary = () => {
  return (
    <Section id="skills" title="Auf einen Blick">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-3">Technologien</h3>
          <div>
            <Pill>Relationales Datawarehouse</Pill>
            <Pill>Oracle SQL Server</Pill>
            <Pill>SQL</Pill>
            <Pill>Git</Pill>
            <Pill>Software Engineering</Pill>
            <Pill>Infor ERP Entwicklung</Pill>
          </div>
          <h3 className="font-semibold mt-6 mb-3">Tätigkeiten (Allgemein)</h3>
          <div>
            <Pill>Projektleitung</Pill>
            <Pill>Lead Developer</Pill>
            <Pill>Stakeholder Management</Pill>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Tools / Ausprägungen</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground mb-1">SAP BO</p>
              <div>
                <Pill>Web Intelligence</Pill>
                <Pill>Design Studio</Pill>
                <Pill>Lumira</Pill>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Software Engineering</p>
              <div>
                <Pill>Python</Pill>
                <Pill>Java</Pill>
                <Pill>JavaScript</Pill>
                <Pill>React</Pill>
                <Pill>GitHub</Pill>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Administration</p>
              <div>
                <Pill>Linux</Pill>
                <Pill>Windows Server</Pill>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Datenbanken</p>
              <div>
                <Pill>Oracle SQL</Pill>
                <Pill>Microsoft SQL</Pill>
                <Pill>MySQL</Pill>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SkillsSummary;
