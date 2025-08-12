import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <header
      className="spotlight relative overflow-hidden rounded-2xl border bg-card/60 p-8 md:p-12 shadow-soft"
      style={{ ['--x' as any]: `${pos.x}px`, ['--y' as any]: `${pos.y}px` }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="mb-3 text-sm text-muted-foreground">Portfolio</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="text-gradient-primary">Marvin Warnke</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          Junior Software Engineer • Junior Consultant
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
          <Badge variant="secondary">Oracle SQL • React • Python • Git</Badge>
          <Badge variant="secondary">Datawarehouse • ERP Infor</Badge>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button asChild variant="hero" size="lg">
            <a href="#projects" aria-label="Zu den Projekten springen">Projekte ansehen</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:kontakt@marvin-warnke.dev" aria-label="E-Mail an Marvin senden">Kontakt aufnehmen</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
