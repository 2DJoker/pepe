export default function Footer({
  onBooking,
  address = "Москва, ул. Образцова 31, строение 3",
  workHours = "Работаем ежедневно с 10:00 до 00:00",
  mapUrl = "https://yandex.ru/maps/", // ← вставишь свою ссылку
  contactImage = "/contact.jpg", // ← положи фото в public/contact.jpg
  brand = "На Горе",
}) {
  return (
    <footer className="bg-[#060709]">
      {/* CONTACT BLOCK (как на скрине) */}
      <section id="contacts" className="pt-10 md:pt-14 pb-10 md:pb-14">
        <div className="mx-auto max-w-6xl px-4">
          {/* верхняя строка */}
          <div className="flex items-center gap-3 text-white/60 text-sm">
            <span className="inline-block w-10 h-px bg-white/20" />
            <span className="tracking-[0.18em] uppercase">контакты</span>
          </div>

          <div className="mt-6 grid lg:grid-cols-[380px_1fr] gap-8 lg:gap-10 items-start">
            {/* left */}
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.08]">
                Добавьте нашу баню
                в своё расписание
              </h3>

              <p className="mt-4 text-white/60">
                Удобное расположение и приватная атмосфера — легко найти время для
                комфортного отдыха.
              </p>

              <div className="mt-8">
                <p className="text-white/60 text-sm">Ждём вас в гости по адресу:</p>
                <p className="mt-2 text-lg font-semibold">{address}</p>
              </div>

              <div className="mt-7">
                <p className="text-white/60 text-sm">Режим работы:</p>
                <p className="mt-2 text-white/70">{workHours}</p>
              </div>

              <button
                onClick={onBooking}
                className="mt-8 h-12 w-full rounded-full bg-white/10 border border-white/15 text-white font-medium hover:bg-white/15 transition"
              >
                Связаться
              </button>
            </div>

            {/* right */}
            <div className="relative">
              {/* кнопка на карте */}
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute right-4 top-4 md:right-6 md:top-6 z-10
                           h-12 px-6 rounded-full bg-[#7C8067] text-white font-medium
                           hover:opacity-90 transition flex items-center gap-2"
              >
                <span className="text-lg">📍</span>
                Показать на карте
              </a>

              {/* “стрелочка” как на скрине — лёгкий декор */}
              <div className="absolute right-14 top-16 hidden md:block text-white/30">
                <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
                  <path
                    d="M2 10c30 10 25 30 40 30s25-20 40-30"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M63 48l10-1-6 8"
                    stroke="currentColor"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* картинка */}
              <div className="rounded-[28px] overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
  <div
    className="
      relative
      h-[260px]
      sm:h-[300px]
      md:h-[340px]
      lg:h-[380px]
    "
  >
    <img
      src={contactImage}
      alt="Контакты"
      className="
        w-full
        h-full
        object-cover
        object-center
        block
      "
      onError={(e) => {
        e.currentTarget.src = "/1f5ebf2c-16df-4241-8671-68571ae52f84-md.jpeg"; // fallback
      }}
    />
  </div>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* нижняя полоса футера */}
      <div className="border-t border-white/10 bg-black/15">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div>
            <p className="font-semibold">{brand}</p>
            <p className="text-white/50 text-sm mt-1">
              © {new Date().getFullYear()} • Все права защищены
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-white/60">
            <a href="#gallery" className="hover:text-white transition">Галерея</a>
            <a href="#about" className="hover:text-white transition">О бане</a>
            <a href="#contacts" className="hover:text-white transition">Контакты</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
