export default function Abordagem() {
  return (
    <section
      id="abordagem"
      className="py-24 bg-white relative"
      aria-labelledby="abordagem-heading"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-clay font-bold tracking-widest uppercase text-xs mb-4 block text-center">
            Abordagem
          </span>
          <h2
            id="abordagem-heading"
            className="font-serif text-3xl md:text-4xl text-brand-moss mb-8 leading-tight text-center"
          >
            Como funciona a terapia psicanalítica?
          </h2>

          <article className="bg-brand-sand/50 rounded-lg p-8 md:p-12">
            <div className="text-brand-stone/80 font-light leading-relaxed space-y-6 text-lg">
              <p>
                A abordagem psicanalítica é um método clínico que busca compreender
                os aspectos profundos e muitas vezes inconscientes do
                funcionamento psíquico. Parte do princípio de que pensamentos,
                emoções e comportamentos atuais são influenciados por
                experiências passadas, conflitos internos e conteúdos que nem
                sempre estão acessíveis à consciência.
              </p>

              <p>
                No processo terapêutico, o paciente é convidado a falar
                livremente, explorando suas vivências, sentimentos e relações,
                enquanto o psicólogo, com escuta qualificada e postura ética, auxilia
                na identificação de padrões, repetições e significados subjacentes. A
                técnica valoriza o vínculo terapêutico como um espaço seguro e
                confidencial, essencial para o desenvolvimento do trabalho.
              </p>

              <p>
                Com o tempo, a psicanálise pode favorecer o autoconhecimento, a
                elaboração de conflitos internos, redução de sofrimentos
                emocionais e a construção de formas mais saudáveis de se relacionar
                consigo mesmo e com o outro.
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-white rounded-lg shadow-soft">
                <div className="w-12 h-12 bg-brand-sage/20 rounded-full flex items-center justify-center text-brand-moss mx-auto mb-4">
                  <i className="fas fa-user" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl text-brand-moss mb-2">
                  Autoconhecimento
                </h3>
                <p className="text-sm text-brand-stone/70">
                  Compreensão dos padrões inconscientes
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-soft">
                <div className="w-12 h-12 bg-brand-sage/20 rounded-full flex items-center justify-center text-brand-moss mx-auto mb-4">
                  <i className="fas fa-heart" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl text-brand-moss mb-2">
                  Elaboração
                </h3>
                <p className="text-sm text-brand-stone/70">
                  Processamento de conflitos internos
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-soft">
                <div className="w-12 h-12 bg-brand-sage/20 rounded-full flex items-center justify-center text-brand-moss mx-auto mb-4">
                  <i className="fas fa-handshake" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl text-brand-moss mb-2">
                  Relacionamento
                </h3>
                <p className="text-sm text-brand-stone/70">
                  Formas mais saudáveis de se conectar
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}