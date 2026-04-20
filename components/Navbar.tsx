import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#abordagem', label: 'Abordagem' },
  { href: '#especialidades', label: 'Áreas' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 top-0 ${isScrolled ? 'py-0' : ''}`}
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="glass border-b border-brand-moss/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <a href="#topo" className="group" aria-label="Voltar ao topo">
                <span className="font-serif text-3xl font-medium tracking-tight text-brand-moss">
                  Eliezer Jr.
                </span>
                <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-brand-moss/60 group-hover:text-brand-clay transition-colors">
                  Psicólogo Clinico
                </span>
              </a>

              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-brand-stone/70 hover:text-brand-moss uppercase tracking-widest transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contato"
                  className="px-6 py-2.5 bg-brand-moss text-white rounded-sm hover:bg-brand-clay transition-all duration-300 text-xs font-bold uppercase tracking-widest shadow-soft"
                >
                  Primeira conversa
                </a>
              </div>

              <button
                id="mobile-menu-btn"
                className="md:hidden text-brand-moss p-2"
                onClick={handleMobileMenuToggle}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
              </button>
            </div>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden absolute w-full bg-brand-sand border-b border-brand-moss/10 shadow-xl ${isMobileMenuOpen ? '' : 'hidden'}`}
          role="menu"
        >
          <div className="px-6 py-8 flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileLinkClick}
                className="font-serif text-2xl text-brand-moss hover:text-brand-clay transition-colors"
                role="menuitem"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={handleMobileLinkClick}
              className="text-brand-clay font-bold uppercase tracking-widest text-sm"
              role="menuitem"
            >
              Primeira conversa
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}