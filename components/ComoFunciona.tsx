const passos = [
  {
    titulo: '1. Primeiro contato',
    descricao:
      'Você envia uma mensagem no WhatsApp e recebe retorno para entender sua necessidade.',
    icon: 'fa-comments',
  },
  {
    titulo: '2. Alinhamento inicial',
    descricao:
      'Definimos formato do atendimento (online ou presencial), frequência e próximos passos.',
    icon: 'fa-calendar-check',
  },
  {
    titulo: '3. Início da terapia',
    descricao:
      'Começamos seu processo com acolhimento, técnica e foco no que faz sentido para você.',
    icon: 'fa-seedling',
  },
];

export default function ComoFunciona() {
  return (
    <section className="py-24 relative" aria-labelledby="como-funciona-heading">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-clay font-bold tracking-widest uppercase text-xs mb-4 block text-center">
            Como funciona
          </span>
          <h2
            id="como-funciona-heading"
            className="font-serif text-3xl md:text-5xl text-brand-moss mb-4 text-center"
          >
            Seu início em 3 passos simples
          </h2>
          <p className="text-center text-brand-stone/70 text-lg max-w-2xl mx-auto mb-12">
            Um processo claro para você começar com segurança, sem burocracia e
            com orientação profissional desde o primeiro contato.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {passos.map((passo) => (
              <article key={passo.titulo} className="bg-white p-8 rounded-lg shadow-soft">
                <div className="w-12 h-12 bg-brand-sage/20 rounded-full flex items-center justify-center text-brand-moss mb-5">
                  <i className={`fas ${passo.icon}`} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl text-brand-moss mb-3">{passo.titulo}</h3>
                <p className="text-brand-stone/70 leading-relaxed">{passo.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

