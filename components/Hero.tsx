export default function Hero() {
  return (
    <section
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}fundohero.jpeg`}
          alt="Ambiente Terapêutico Dr. Antônio Eliezer"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-sand/90 via-brand-sand/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-sand via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mt-20">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-brand-clay" aria-hidden="true" />
            <span className="text-brand-clay font-bold tracking-[0.2em] text-xs uppercase">
              Atendimento Online
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-serif text-5xl md:text-7xl text-brand-moss leading-[1.1] mb-8 font-light"
          >
            Psicoterapia para viver com mais <span className="italic font-medium">clareza</span>, <br />
            leveza e autonomia.
          </h1>

          <p className="text-lg text-brand-stone/70 leading-relaxed mb-10 font-light">
            Atendimento online para ansiedade,
            estresse, relacionamentos e autoconhecimento, com escuta ética e
            acolhedora.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#contato"
              className="group bg-brand-moss text-white px-8 py-4 rounded-sm flex items-center justify-center gap-3 hover:bg-brand-stone transition-all duration-300 shadow-soft"
            >
              <span className="text-xs font-bold uppercase tracking-widest">
                Agendar primeira conversa
              </span>
              <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#sobre"
              className="group px-8 py-4 border border-brand-moss/30 text-brand-moss hover:bg-brand-moss hover:text-white transition-all duration-300 rounded-sm flex items-center justify-center gap-3"
            >
              <i className="far fa-user text-lg" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Conhecer o profissional
              </span>
            </a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-brand-stone/60 text-sm">
            <p className="flex items-center gap-2">
              <i className="fas fa-shield-heart text-brand-clay" aria-hidden="true" />
              Sigilo profissional e escuta qualificada
            </p>
            <p className="flex items-center gap-2">
              <i className="fas fa-id-card text-brand-clay" aria-hidden="true" />
              CRP 10/12457
            </p>
          </div>
        </div>

        <div className="hidden md:block relative h-full">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass p-6 rounded-t-full rounded-b-full shadow-soft animate-float"
            aria-label="Frase inspiradora"
          >
        </div>
      </div>
    </section>
  );
}
