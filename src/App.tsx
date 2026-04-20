import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Sobre from '../components/Sobre';
import Abordagem from '../components/Abordagem';
import Especialidades from '../components/Especialidades';
import ComoFunciona from '../components/ComoFunciona';
import Faq from '../components/Faq';
import Contato from '../components/Contato';
import Footer from '../components/Footer';
import MobileStickyCta from '../components/MobileStickyCta';

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-brand-stone focus:px-4 focus:py-3 focus:shadow-soft"
      >
        Pular para o conteúdo principal
      </a>

      <div id="topo" />
      <div
        className="fixed inset-0 bg-texture opacity-40 pointer-events-none z-0"
        aria-hidden="true"
      />

      <Navbar />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Abordagem />
        <Especialidades />
        <ComoFunciona />
        <Faq />
        <Contato />
      </main>
      <div className="h-24 md:hidden" aria-hidden="true" />
      <MobileStickyCta />
      <Footer />
    </>
  );
}

