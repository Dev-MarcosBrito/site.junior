export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-24 relative overflow-hidden"
      aria-labelledby="sobre-heading"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative">
            <div
              className="aspect-[3/4] rounded-t-[10rem] rounded-b-lg overflow-hidden relative shadow-2xl"
            >
              <img
                src={`${import.meta.env.BASE_URL}eliezerjr3.jpeg`}
                alt="Eliezer Jr. - Psicólogo Clínico"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 bg-brand-sand/90 backdrop-blur p-6 w-full border-t border-brand-moss/10">
                <p className="font-serif text-2xl text-brand-moss italic">
                  Psicólogo Clínico
                </p>
              </div>
            </div>
            <div
              className="absolute -z-10 top-10 -left-10 w-full h-full border border-brand-clay/30 rounded-t-[10rem] rounded-b-lg"
              aria-hidden="true"
            />
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-brand-clay font-bold tracking-widest uppercase text-xs mb-4 block">
              Sobre o Eliezer Jr.
            </span>
            <h2
              id="sobre-heading"
              className="font-serif text-4xl md:text-5xl text-brand-moss mb-8 leading-tight"
            >
              Escuta ativa aliada à <br />
              <span className="italic text-brand-sage">técnica e ao acolhimento.</span>
            </h2>

            <div className="space-y-6 text-brand-stone/80 font-light text-lg leading-relaxed">
              <p>
                Acredito que o processo terapêutico é uma
                jornada de descoberta e fortalecimento. Meu papel é oferecer o
                suporte técnico e humano para que você possa enfrentar seus
                desafios com clareza.
              </p>
              <p>
                Com sólida formação em Psicologia e Clínica Psicanalítica, minha
                atuação é pautada na ética e na singularidade de cada paciente.
                Busco integrar a profundidade da investigação psíquica com o
                pragmatismo necessário para a mudança.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-brand-clay pl-4">
                <h3 className="font-serif text-xl text-brand-moss">
                  CRP 10/12457
                </h3>
                <p className="text-sm text-brand-stone/60">Ética Profissional</p>
              </div>
              <div className="border-l-2 border-brand-clay pl-4">
                <h3 className="font-serif text-xl text-brand-moss">
                  Sigilo Absoluto
                </h3>
                <p className="text-sm text-brand-stone/60">
                  Segurança do Paciente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
