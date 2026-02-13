import { useEffect, useState } from "react";

export default function Header({
  onBooking,
  logoSrc = "/51c4e7a306be9287010f6d01870462f8.png",
  logoAlt = "Логотип",
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/45 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center gap-4">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={logoAlt}
              className={`object-contain transition-all duration-300 ${
                scrolled
                  ? "h-10 md:h-11 max-w-[180px]"
                  : "h-12 md:h-14 max-w-[220px]"
              }`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div
              className={`rounded-2xl bg-white/10 border border-white/10 transition-all duration-300 ${
                scrolled ? "h-10 w-10" : "h-12 w-12"
              }`}
            />
          )}

          <div className="leading-tight">
            <p className="font-semibold tracking-tight text-base md:text-lg">
              На Горе
            </p>
            <p className="text-xs md:text-sm text-white/60">
              баня • spa • релакс
            </p>
          </div>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#gallery" className="hover:text-white transition">
            Галерея
          </a>
          <a href="#about" className="hover:text-white transition">
            О бане
          </a>
          <a href="#contacts" className="hover:text-white transition">
            Контакты
          </a>
        </nav>

        {/* CTA */}
        <button
          onClick={onBooking}
          className={`rounded-full font-medium transition-all duration-300 ${
            scrolled
              ? "h-9 px-4 bg-white text-black"
              : "h-10 px-5 bg-white text-black"
          } hover:opacity-90`}
        >
          Связаться
        </button>
      </div>
    </header>
  );
}
