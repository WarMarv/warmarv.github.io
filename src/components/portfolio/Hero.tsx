import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Profilbild from "../../../resources/Profilbild.jpeg";

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
      className="spotlight relative overflow-hidden rounded-2xl border bg-card/60 p-6 sm:p-8 md:p-12 shadow-soft"
      style={{ ['--x' as any]: `${pos.x}px`, ['--y' as any]: `${pos.y}px` }}
    >
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:gap-16">
        {/* Bild links (Desktop), oben (Mobil) */}
        <div className="flex justify-center md:justify-start mb-6 md:mb-0 md:flex-shrink-0 md:self-start">
          <Avatar className="h-64 w-64 ring-4 ring-primary/30 shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]">
            <AvatarImage
              src={Profilbild}
              alt="Profilbild von Marvin Warnke"
              className="object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <AvatarFallback className="text-lg font-semibold">MW</AvatarFallback>
          </Avatar>
        </div>
        {/* Textbereich */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="text-gradient-primary">Marvin Warnke</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Junior Software Engineer • Junior Consultant
          </p>
          <div className="mt-6 flex items-center justify-center md:justify-start gap-2 flex-wrap">
            <Badge variant="secondary">Oracle SQL • React • Python • Git</Badge>
            <Badge variant="secondary">Datawarehouse • ERP Infor</Badge>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto md:mx-0">
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto min-w-0 sm:min-w-[10rem]">
              <a href="#projects" aria-label="Zu den Projekten springen" className="inline-flex w-full justify-center md:justify-start">Projekte ansehen</a>
            </Button>
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto min-w-0 sm:min-w-[10rem]">
              <a href="mailto:mawrx.dev@gmail.com" aria-label="E-Mail an Marvin senden" className="inline-flex w-full justify-center md:justify-start">Kontakt aufnehmen</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
