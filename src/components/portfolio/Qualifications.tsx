import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Item = { label: string; value: string };

const Row = ({ label, value }: Item) => (
  <div className="flex items-center justify-between py-2 border-b last:border-0">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const Block = ({ title, items }: { title: string; items: Item[] }) => (
  <div className="space-y-2">
    <h4 className="font-semibold mt-4">{title}</h4>
    <div className="rounded-lg border p-4">
      {items.map((i) => (
        <Row key={`${title}-${i.label}`} {...i} />
      ))}
    </div>
  </div>
);

const Qualifications = () => {
  return (
    <section id="qualifications" className="scroll-mt-24">
      <Card className="glass-surface">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Qualifikationsprofil</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Block
                title="Datenbanken"
                items={[
                  { label: "Oracle", value: "> 3 Jahr(e)" },
                  { label: "MS Access", value: "> 5 Jahr(e)" },
                  { label: "MySQL", value: "> 7 Jahr(e)" },
                ]}
              />
              <Block
                title="ERP / CRM Systeme"
                items={[
                  { label: "Infor 7.1 FP2", value: "> 3 Jahr(e)" },
                  { label: "Infor 7.5", value: "> 3 Jahr(e)" },
                  { label: "SAP", value: "< 1 Jahr(e)" },
                ]}
              />
              <Block
                title="Betriebssysteme"
                items={[{ label: "Linux", value: "> 8 Jahr(e)" }]}
              />
            </div>
            <div>
              <Block
                title="Programmiersprachen"
                items={[
                  { label: "Java, PHP, JavaScript, CSS, HTML, XML", value: "> 5 Jahr(e)" },
                  { label: "C#", value: "> 3 Jahr(e)" },
                  { label: "Python, JSON", value: "> 2 Jahr(e)" },
                ]}
              />
              <Block
                title="Frameworks"
                items={[
                  { label: ".NET MAUI, .NET", value: "> 3 Jahr(e)" },
                  { label: "Expo, Expo Go", value: "< 1 Jahr(e)" },
                ]}
              />
              <Block
                title="IDEs"
                items={[
                  { label: "Visual Studio, VS Code, IntelliJ IDEA", value: "> 5 Jahr(e)" },
                ]}
              />
              <Block
                title="Methoden"
                items={[
                  { label: "SCRUM", value: "> 3 Jahr(e)" },
                  { label: "Wasserfall", value: "> 3 Jahr(e)" },
                ]}
              />
              <Block
                title="Deployment"
                items={[
                  { label: "CI/CD, GitLab, GitHub", value: "> 3 Jahr(e)" },
                  { label: "Expo EAS, Google Play Console, Mobile App Deployment", value: "< 1 Jahr(e)" },
                ]}
              />
              <Block
                title="Collaboration"
                items={[
                  { label: "MS Outlook, SharePoint", value: "> 3 Jahr(e)" },
                  { label: "Jira / Confluence", value: "> 3 Jahr(e)" },
                ]}
              />
              <Block
                title="Sonstiges"
                items={[
                  { label: "MS Excel, Word, PowerPoint", value: "> 10 Jahr(e)" },
                  { label: "Virtualisierung (VirtualBox, Docker)", value: "> 5 Jahr(e)" },
                  { label: "Führerschein Klasse B/BE", value: "vorhanden" },
                ]}
              />
              <Block
                title="Sprachen"
                items={[
                  { label: "Deutsch", value: "Muttersprache" },
                  { label: "Englisch", value: "Gute Kenntnisse" },
                  { label: "Russisch", value: "Grundlagen" },
                ]}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Qualifications;
