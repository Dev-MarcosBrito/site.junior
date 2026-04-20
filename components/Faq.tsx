const perguntas = [
  {
    pergunta: 'Como funciona a primeira sessão?',
    resposta:
      'A primeira sessão é um momento de escuta e entendimento da sua demanda. A partir dela, definimos os próximos passos de forma clara.',
  },
  {
    pergunta: 'A terapia online funciona mesmo?',
    resposta:
      'Sim. Quando conduzida com técnica e vínculo terapêutico, a modalidade online oferece resultados consistentes e maior praticidade.',
  },
  {
    pergunta: 'Qual a frequência recomendada?',
    resposta:
      'Na maioria dos casos, a frequência semanal é indicada no início. Isso pode ser ajustado conforme sua necessidade e evolução.',
  },
  {
    pergunta: 'Como faço para agendar?',
    resposta:
      'Você pode agendar diretamente pelo WhatsApp. O retorno é rápido para alinhar horário, formato e valores.',
  },
];

export default function Faq() {
  return (
    <section className="py-24 bg-white relative" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-clay font-bold tracking-widest uppercase text-xs mb-4 block text-center">
            Dúvidas frequentes
          </span>
          <h2
            id="faq-heading"
            className="font-serif text-3xl md:text-5xl text-brand-moss mb-12 text-center"
          >
            Perguntas comuns antes de começar
          </h2>

          <div className="space-y-4">
            {perguntas.map((item) => (
              <details key={item.pergunta} className="group bg-brand-sand/50 rounded-lg p-6">
                <summary className="list-none cursor-pointer flex items-center justify-between gap-4">
                  <h3 className="font-serif text-2xl text-brand-moss">{item.pergunta}</h3>
                  <i
                    className="fas fa-plus text-brand-clay text-sm transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="text-brand-stone/75 mt-4 leading-relaxed">{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

