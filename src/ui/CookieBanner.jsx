import { useEffect, useState } from "react";

function getCookie(name) {
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2]) : null;
}

function setCookie(name, value, days = 180) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed left-4 right-4 bottom-4 z-[60]">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl p-4 md:p-5 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
          <p className="text-white/80 text-sm md:text-base">
            Мы используем файлы cookie, чтобы улучшать работу сайта и сервис. Продолжая пользоваться сайтом,
            вы соглашаетесь с использованием cookie.
          </p>

          <div className="flex gap-2 md:ml-auto">
            <button
              onClick={() => {
                setCookie("cookie_consent", "accepted", 365);
                setVisible(false);
              }}
              className="h-11 px-5 rounded-full bg-white text-black font-medium hover:opacity-90 transition"
            >
              Понятно
            </button>

            <button
              onClick={() => {
                setCookie("cookie_consent", "declined", 365);
                setVisible(false);
              }}
              className="h-11 px-5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              Отказаться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
