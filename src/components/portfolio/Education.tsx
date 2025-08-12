import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="scroll-mt-24">
      <Card className="glass-surface">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Ausbildung & Fortbildungen</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold">2025 · Berufsausbildung Fachinformatiker</h4>
            <p className="text-sm text-muted-foreground">Schwerpunkte: Programmierung, Prozesse — Abschluss: Fachinformatiker für Anwendungsentwicklung</p>
          </div>
          <div>
            <h4 className="font-semibold">2025 · Udemy: Building Microservices with Quarkus</h4>
          </div>
          <div>
            <h4 className="font-semibold">2025 · Udemy: Starting with Quarkus</h4>
          </div>
          <div>
            <h4 className="font-semibold">2023 · Udemy: .NET MAUI Mobile App Development</h4>
          </div>
          <div>
            <h4 className="font-semibold">2022 · Abitur Schwerpunkt Naturwissenschaften</h4>
            <p className="text-sm text-muted-foreground">Schwerpunkte: Mathematik, Chemie, Physik — Abschluss: Allgemeine Fachhochschulreife</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Education;
