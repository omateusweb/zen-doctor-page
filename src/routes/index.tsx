import { createFileRoute } from "@tanstack/react-router";
import doctorHero from "@/assets/doctor-hero.jpg.asset.json";
import doctorAbout from "@/assets/doctor-about.jpg.asset.json";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6 flex items-center justify-between">
        <div />
        <div />
      </header>

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={doctorHero.url}
          alt="Dra. Calina Lima"
          className="absolute top-0 h-full w-[110%] left-[15%] object-cover grayscale"
          loading="eager"
          fetchPriority="high"
        />
        {/* Scrim para legibilidade da headline centralizada */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Assinatura no canto superior esquerdo, ao lado da cabeça */}
        <div className="absolute z-10 left-[6%] md:left-[18%] top-[18%] text-left">
          <p className="font-serif text-base text-primary-foreground tracking-wide leading-tight">
            Dra. Calina Lima
          </p>
          <p className="text-[10px] uppercase tracking-[0.28em] text-primary-foreground/70 mt-1">
            Anestesiologista
          </p>
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-end text-center px-6 md:px-12 pb-6 md:pb-8">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-light text-primary-foreground max-w-4xl mix-blend-difference">
            Seja o melhor paciente antes de escolher o melhor cirurgião.
          </h1>
          <p className="mt-4 max-w-xl text-base md:text-lg text-primary-foreground/80 leading-relaxed font-light">
            Sua recuperação bem-sucedida e pós-operatório mais rápido, requer
            preparação e acompanhamento exclusivo.
          </p>
          <div className="mt-6">
            <a
              href="https://wa.me/5581981404133?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20Dra.%20Calina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-primary-foreground text-primary px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-primary-foreground/90 transition-colors"
            >
              Agendar Consulta
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <AuroraBackground className="px-6 md:px-12 lg:px-24 py-24 md:py-40 min-h-0 items-stretch justify-start">
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground mb-6">
                Metodologia
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground">
                Um cuidado que começa antes da sala de cirurgia.
              </h2>
            </div>

            <div className="md:col-span-8 md:pl-12 md:border-l md:border-border">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                Cada corpo responde de forma única a um procedimento cirúrgico.
                Por isso, desenvolvi um protocolo exclusivo de preparação e
                acompanhamento que transforma a experiência cirúrgica em um
                processo seguro, previsível e humano.
              </p>

              <div className="mt-16 grid sm:grid-cols-3 gap-10">
                {[
                  {
                    n: "01",
                    t: "Avaliação Pré-Operatória",
                    d: "Análise clínica aprofundada, exames e planejamento individual para preparar corpo e mente.",
                  },
                  {
                    n: "02",
                    t: "Preparação Personalizada",
                    d: "Protocolo nutricional, físico e emocional desenhado para otimizar sua resposta cirúrgica.",
                  },
                  {
                    n: "03",
                    t: "Acompanhamento Pós",
                    d: "Presença próxima e contínua na recuperação, com condutas ajustadas em cada etapa.",
                  },
                ].map((s) => (
                  <div key={s.n}>
                    <p className="font-serif text-2xl text-foreground mb-4">{s.n}</p>
                    <h3 className="text-sm uppercase tracking-[0.18em] text-foreground mb-3 font-sans font-medium">
                      {s.t}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {s.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* SOBRE */}
      <section className="bg-primary text-primary-foreground px-6 md:px-12 lg:px-24 py-24 md:py-40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={doctorAbout.url}
                alt="Retrato da Dra. Nome Sobrenome"
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.32em] text-primary-foreground/60 mb-6">
              QUEM É DRA. CALINA LIMA
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-light">
              Uma médica dedicada à sua jornada, não apenas à sua cirurgia.
            </h2>
            <div className="mt-10 space-y-6 text-primary-foreground/75 text-base md:text-lg leading-relaxed font-light max-w-xl">
              <p>
                Com anos de formação em centros de referência e uma prática
                voltada ao cuidado integral, dedico-me à preparação e ao
                acompanhamento de pacientes cirúrgicos com uma abordagem
                exclusiva, científica e profundamente humana.
              </p>
              <p>
                Acredito que os melhores resultados nascem do encontro entre
                conhecimento técnico, escuta atenta e um plano de cuidado feito
                sob medida — para que você chegue ao seu procedimento no seu
                melhor estado e se recupere com serenidade.
              </p>
            </div>

            <div id="agendar" className="mt-12">
              <a
                href="https://wa.me/5581981404133?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20Dra.%20Calina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 border border-primary-foreground/60 text-primary-foreground px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                Agendar Consulta
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground/60 border-t border-primary-foreground/10 px-6 md:px-12 lg:px-24 py-10 text-xs tracking-[0.16em] uppercase flex flex-col md:flex-row md:items-center md:justify-end gap-4">
        <span>CRM 000000 · Medicina</span>
      </footer>
    </main>
  );
}
