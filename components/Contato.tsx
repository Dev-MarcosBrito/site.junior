export default function Contato() {
  return (
    <section
      id="contato"
      className="py-24 relative overflow-hidden"
      aria-labelledby="contato-heading"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2
          id="contato-heading"
          className="font-serif text-4xl md:text-6xl text-brand-moss mb-6"
        >
          Inicie sua jornada hoje.
        </h2>
        <p className="text-brand-stone/70 text-lg mb-10 max-w-2xl mx-auto font-light">
          Agende um horário e dê o primeiro passo para mais clareza, autonomia e
          bem-estar emocional.
        </p>

        <p className="text-brand-stone/60 text-sm mb-8">
          Atendimento com sigilo profissional e retorno para agendamento em horário comercial.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/5593991744437"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1"
            aria-label="Agendar consulta pelo WhatsApp"
          >
            <i className="fab fa-whatsapp text-xl" aria-hidden="true" />
            Agendar no WhatsApp
          </a>
          <a
            href="mailto:psicologoeliezerjr@gmail.com"
            className="border border-brand-moss text-brand-moss hover:bg-brand-moss hover:text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3"
            aria-label="Enviar e-mail para contato"
          >
            <i className="far fa-envelope text-xl" aria-hidden="true" />
            Enviar e-mail
          </a>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <address className="not-italic">
            <div className="w-12 h-12 bg-brand-sage/20 rounded-full flex items-center justify-center text-brand-moss mx-auto mb-4">
              <i className="fab fa-whatsapp" aria-hidden="true" />
            </div>
            <p className="text-brand-stone/70 text-sm">(93) 9 9174-4437</p>
          </address>

          <address className="not-italic">
            <div className="w-12 h-12 bg-brand-sage/20 rounded-full flex items-center justify-center text-brand-moss mx-auto mb-4">
              <i className="far fa-envelope" aria-hidden="true" />
            </div>
            <p className="text-brand-stone/70 text-sm break-all">
              psicologoeliezerjr@gmail.com
            </p>
          </address>

          <address className="not-italic">
            <div className="w-12 h-12 bg-brand-sage/20 rounded-full flex items-center justify-center text-brand-moss mx-auto mb-4">
              <i className="fas fa-map-marker-alt" aria-hidden="true" />
            </div>
            <p className="text-brand-stone/70 text-sm">
              Altamira-PA | Online
            </p>
          </address>
        </div>
      </div>
    </section>
  );
}