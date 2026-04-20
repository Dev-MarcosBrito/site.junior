const especialidades = [
  {
    icon: 'brain',
    title: 'Ansiedade & Estresse',
    description:
      'Auxílio no gerenciamento de crises e na redução da carga emocional causada pelo cotidiano acelerado.',
  },
  {
    icon: 'users',
    title: 'Relacionamentos',
    description:
      'Trabalho voltado para a comunicação, limites e saúde nos vínculos afetivos e familiares.',
  },
  {
    icon: 'compass',
    title: 'Autoconhecimento',
    description:
      'Exploração dos desejos e medos para uma vida com maior autenticidade e propósito.',
  },
];

const iconMap: Record<string, string> = {
  brain: 'fas fa-brain',
  users: 'fas fa-users',
  compass: 'fas fa-compass',
};

export default function Especialidades() {
  return (
    <section
      id="especialidades"
      className="py-24 bg-white relative"
      aria-labelledby="especialidades-heading"
    >
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-brand-sand/50 -z-0"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <span className="text-brand-clay font-bold tracking-widest uppercase text-xs mb-2 block">
              Áreas de Atuação
            </span>
            <h2
              id="especialidades-heading"
              className="font-serif text-4xl md:text-5xl text-brand-moss leading-tight"
            >
              Como posso ajudar?
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {especialidades.map((item, index) => (
            <article
              key={item.title}
              className="group bg-[#F9F8F6] p-10 hover:bg-brand-moss transition-all duration-500 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-moss mb-8 shadow-sm group-hover:bg-brand-clay group-hover:text-white transition-colors">
                <i className={iconMap[item.icon]} aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl text-brand-moss mb-4 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-brand-stone/70 font-light leading-relaxed group-hover:text-white/80 transition-colors">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}