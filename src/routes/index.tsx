import { createFileRoute } from "@tanstack/react-router";
import doctorHero from "@/assets/doctor-hero.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6 flex items-center justify-between">
        <div />
        <a
          href="#agendar"
          className="hidden md:inline-block text-[11px] uppercase tracking-[0.24em] text-primary-foreground/90 hover:text-primary-foreground transition-colors border-b border-primary-foreground/40 pb-1"
        >
          Agendar Consulta
        </a>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={doctorHero.url}
          alt="Dra. Nome Sobrenome"
          className="absolute inset-0 h-full w-full object-cover object-center grayscale scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        {/* Assinatura próxima ao ombro */}
        <div className="hidden md:block absolute z-10 top-[46%] right-[26%] text-primary-foreground/90 text-right">
          <p className="font-serif text-sm tracking-wide leading-tight">Dra. Calina Lima</p>
          <p className="text-[10px] uppercase tracking-[0.28em] text-primary-foreground/70 mt-1">
            Anestesiologista
          </p>
        </div>

        <div className="relative z-10 flex min-h-screen items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl text-primary-foreground">
            <p className="text-[11px] uppercase tracking-[0.32em] text-primary-foreground/70 mb-8">
              Protocolo CORE
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-light">
              Seja o melhor paciente antes de escolher o melhor cirurgião.
            </h1>
            <p className="mt-8 text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl font-light">
              Sua recuperação bem-sucedida e pós-operatório mais rápido, requer
              preparação e acompanhamento exclusivo.
            </p>
            <div className="mt-12">
              <a
                href="#agendar"
                className="inline-flex items-center gap-4 bg-primary-foreground text-primary px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-primary-foreground/90 transition-colors"
              >
                Agendar Consulta
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-40 bg-background">
        <div className="max-w-6xl mx-auto">
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
      </section>

      {/* SOBRE */}
      <section className="bg-primary text-primary-foreground px-6 md:px-12 lg:px-24 py-24 md:py-40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={doctorHero.url}
                alt="Retrato da Dra. Nome Sobrenome"
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.32em] text-primary-foreground/60 mb-6">
              Quem é a Doutora
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-light">
              Uma médica dedicada à sua jornada — não apenas à sua cirurgia.
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
                href="#"
                className="inline-flex items-center gap-4 border border-primary-foreground/60 text-primary-foreground px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                Agendar Consulta
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground/60 border-t border-primary-foreground/10 px-6 md:px-12 lg:px-24 py-10 text-xs tracking-[0.16em] uppercase flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <span>© {new Date().getFullYear()} Dra. Nome Sobrenome</span>
        <span>CRM 000000 · Medicina</span>
      </footer>
    </main>
  );
}
