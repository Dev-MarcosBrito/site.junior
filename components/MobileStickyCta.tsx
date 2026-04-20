export default function MobileStickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden p-4 bg-brand-sand/90 backdrop-blur border-t border-brand-moss/10">
      <a
        href="https://wa.me/5593991744437"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-sm font-bold uppercase tracking-widest shadow-soft flex items-center justify-center gap-3"
        aria-label="Agendar primeira conversa pelo WhatsApp"
      >
        <i className="fab fa-whatsapp text-lg" aria-hidden="true" />
        Agendar no WhatsApp
      </a>
    </div>
  );
}

