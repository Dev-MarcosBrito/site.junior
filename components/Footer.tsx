export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-brand-stone text-brand-sand py-16 border-t border-white/5 text-sm font-light"
      role="contentinfo"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <span className="font-serif text-2xl font-medium tracking-tight text-white block mb-4">
            Eliezer Jr.
          </span>
          <p className="opacity-60 leading-relaxed max-w-xs">
            Psicologia Clínica.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
            Contato
          </h3>
          <ul className="space-y-3 opacity-60">
            <li>
              <i className="fab fa-whatsapp w-6" aria-hidden="true" />
              <span>(93) 9 9174-4437</span>
            </li>
            <li>
              <i className="far fa-envelope w-6" aria-hidden="true" />
              <span>psicologoeliezerjr@gmail.com</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt w-6" aria-hidden="true" />
              <span>Altamira-PA | Atendimento Online</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
            Redes Sociais
          </h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/"
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-clay hover:border-brand-clay transition-all"
              aria-label="Instagram"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-clay hover:border-brand-clay transition-all"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin-in" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center opacity-40 text-xs">
        <p>© {currentYear} Eliezer Jr. Desenvolvido com foco na ética e acolhimento.</p>
        <p className="mt-2">CRP 10/12457</p>
      </div>
    </footer>
  );
}