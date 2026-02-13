import { useMemo, useState } from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import CookieBanner from "../ui/CookieBanner";

const CONTACTS = {
  phone: "+79933680468",
  telegram: "https://t.me/your_username_or_bot",
};

const PHOTOS = {
  // ФОНОВОЕ фото для верхней части сайта
  heroBackground: "/IMG_1649.JPG",
  
  // Отдельное фото для карточки справа
  heroCard: "/p1.jpg", // Можете поменять на другое фото
  
  // Остальные фото для галереи
  steam: [
    "/IMG_4629.jpg",
    "/IMG_4630.jpg",
    "/IMG_4631.jpg",
    "/IMG_4632.jpg",
    "/IMG_4633.jpg",
    "/IMG_1649.JPG",
    "/IMG_1647.JPG",
    "/IMG_1646.JPG",
  ],

  bath: [
    "/IMG_4626.jpg",
    "/IMG_4627.jpg",
    "/IMG_4615 (1).jpg",
    "/IMG_4628.jpg",
    "/IMG_1642.JPG",
    "/IMG_1644.JPG",
    "/IMG_4609 (1).jpg",
    "/IMG_4614.jpg",
  ],

  room: [
    "/IMG_4619 (1).jpg",
    "/IMG_4621.jpg",
    "/IMG_4623.jpg",
    "/IMG_4624.jpg",
    "/IMG_4625.jpg",
  ],
};

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.4)] ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({ title, desc }) {
  return (
    <div className="mb-8 md:mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {desc ? <p className="text-white/60 mt-3 max-w-2xl">{desc}</p> : null}
    </div>
  );
}

function BookingModal({ open, onClose, contacts }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center px-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative w-full max-w-xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.4)] p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-white/60 text-sm">Связаться</p>
              <h3 className="text-xl font-semibold mt-1">Бронирование</h3>
              <p className="text-white/60 mt-2">
                Напишите в Telegram или позвоните — согласуем время.
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-full px-3 py-2 border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label="Закрыть"
            >
              ✕
            </button>
          </div>

          <div className="mt-6 grid gap-3">
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noreferrer"
              className="h-12 rounded-2xl bg-[#1389C9] text-white font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              ✈️ Написать в Telegram
            </a>

            <a
              href={`tel:${contacts.phone}`}
              className="h-12 rounded-2xl bg-white text-black font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              📞 Позвонить
            </a>

            <p className="text-white/50 text-xs mt-2">
              Мы используем файлы cookie для улучшения работы сайта.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MasonryGallery({ images }) {
  return (
    <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
      {images.map((src) => (
        <div key={src} className="mb-4 break-inside-avoid">
          <Card className="overflow-hidden">
            <img
              src={src}
              alt=""
              className="w-full h-auto object-cover block hover:scale-[1.01] transition"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </Card>
        </div>
      ))}
    </div>
  );
}

function PhotoStrip({ images }) {
  return (
    <div className="overflow-x-auto scrollbar-none -mx-4 px-4">
      <div className="flex gap-3 min-w-max py-1">
        {images.map((src) => (
          <div key={src} className="w-[220px] md:w-[280px]">
            <Card className="overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover block hover:scale-[1.02] transition"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

// НОВЫЙ КОМПОНЕНТ ДЛЯ ОТОБРАЖЕНИЯ ЦЕН
function PriceCard({ title, price, description, className = "" }) {
  return (
    <Card className={`p-6 flex flex-col ${className}`}>
      <h3 className="text-lg font-medium text-white/80">{title}</h3>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="text-3xl font-semibold">{price}</span>
        {description && <span className="text-white/60 text-sm ml-1">{description}</span>}
      </div>
    </Card>
  );
}

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const bathImages = useMemo(() => PHOTOS.bath.filter(Boolean), []);
  const steamImages = useMemo(() => PHOTOS.steam.filter(Boolean), []);
  const roomImages = useMemo(() => PHOTOS.room.filter(Boolean), []);

  const features = [
    "Одна баня — полностью приватно",
    "Холодная купель",
    "Веники для парения",
    "Большая парная",
    "Стол + кухня для компании",
    "2 душевые кабинки",
    "Рядом река для купания",
    "Посуда, чай, кухня",
    "Комната отдыха над баней (посуточно)",
  ];

  return (
    <div className="relative">
      {/* HERO С ФОНОВОЙ ФОТОГРАФИЕЙ - ТОЛЬКО В ВЕРХНЕЙ ЧАСТИ */}
      <div className="relative">
        {/* Фоновый слой с фото ТОЛЬКО для героя */}
        <div className="absolute inset-0 -z-10 overflow-hidden h-[80vh] md:h-[85vh]">
          <div className="absolute inset-0">
            <img
              src={PHOTOS.heroBackground} // ИСПОЛЬЗУЕМ ОТДЕЛЬНОЕ ФОТО ДЛЯ ФОНА
              alt="Фон бани"
              className="w-full h-full object-cover"
              style={{
                filter: "brightness(0.7) contrast(1.1)",
              }}
            />
            {/* Градиент для плавного перехода в черный фон */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
          </div>
        </div>

        {/* Черный фон для остальной части сайта */}
        <div className="absolute inset-0 top-[80vh] md:top-[85vh] -z-10 bg-[#060709]" />

        <Header onBooking={() => setBookingOpen(true)} />

        {/* HERO секция */}
        <section className="relative pt-16 md:pt-30 pb-20 md:pb-24 min-h-[80vh] md:min-h-[85vh] flex flex-col justify-center">
          <div className="mx-auto max-w-6xl px-4 flex-1 flex flex-col justify-center">
            {/* На мобильной версии - колонка (текст сверху, фото снизу) */}
            {/* На десктопе - две колонки (текст слева, фото справа) */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center">
              {/* ТЕКСТ - всегда первым */}
              <div className="w-full">
                

                <h1 className="mt-20 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                  Баня у реки
                </h1>

                <p className="mt-10 text-lg md:text-xl text-white/85 max-w-xl">
                  Тёплая приватная баня у реки. Парная, купель и место для компании.
                </p>

                {/* Кнопка */}
                <button
                  onClick={() => setBookingOpen(true)}
                  className="mt-8 h-14 px-10 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition text-base shadow-lg hover:shadow-xl"
                >
                  Связаться и забронировать
                </button>
              </div>

              {/* ФОТО - на мобиле снизу, на десктопе справа */}
              <div className="w-full lg:mt-5">
                <Card className="p-1">
                  <div className="mt-1 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <img
                      src={PHOTOS.heroCard} // ИСПОЛЬЗУЕМ ОТДЕЛЬНОЕ ФОТО ДЛЯ КАРТОЧКИ
                      alt="Интерьер бани"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
                {/* Добавим небольшой текст под фото на мобилке */}
                <p className="text-white/60 text-sm text-center mt-3">
                  Посмотрите нашу баню изнутри
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Остальной контент на черном фоне */}
      <div className="bg-[#060709]">
        {/* FEATURES секция */}
        <section id="about" className="py-10 md:py-12">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle
              title="Что внутри"
            />

            <Card className="p-5 md:p-6">
              <div className="flex flex-wrap gap-2">
                {features.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-2 rounded-full text-sm text-white/80 bg-white/5 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>

            {/* Лента фото */}
            {bathImages.length > 0 ? (
              <div className="mt-8">
                <PhotoStrip images={bathImages.slice(0, 8)} />
              </div>
            ) : null}
          </div>
        </section>

        {/* НОВАЯ СЕКЦИЯ С ЦЕНАМИ */}
        <section className="py-10 md:py-12">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle
              title="Цены"
              desc="Актуальная стоимость на 2026 год"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <PriceCard
                title="Баня (почасовая)"
                price="5 500 ₽"
                description="/ час"
              />
              <PriceCard
                title="Комната над баней"
                price="20 000 ₽"
                description="/ ночь"
              />
              <PriceCard
                title="Беседка"
                price="10 000 ₽"
                description="на всё время"
              />
            </div>

            {/* Дополнительное пояснение */}
            <p className="text-white/60 text-sm mt-4 text-center">
              Минимальное время аренды бани — 2 часа. Точную стоимость и наличие уточняйте при бронировании.
            </p>
          </div>
        </section>

        {/* MAIN GALLERY */}
        <section className="py-10 md:py-12">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle
              title="Галерея бани"
            />
            <MasonryGallery images={bathImages} />
          </div>
        </section>

        {/* STEAM */}
        <section className="py-10 md:py-12">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle
              title="Парная"
            />
            <MasonryGallery images={steamImages} />
          </div>
        </section>

        {/* ROOM — обновлённое описание с ценой */}
        <section className="py-10 md:py-12">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle
              title="Комната отдыха над баней"
              desc="Можно снять посуточно: кровать, душ и туалет. Стоимость — 20 000 ₽/ночь."
            />
            <MasonryGallery images={roomImages} />
          </div>
        </section>

        {/* CONTACTS */}
        <section id="contacts" className="py-10 md:py-12">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle title="Контакты" desc="Быстрая связь без форм." />

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-6">
                <p className="text-white/60 text-sm">Телефон</p>
                <a
                  href={`tel:${CONTACTS.phone}`}
                  className="text-xl font-semibold mt-2 inline-block hover:opacity-80 transition"
                >
                  {CONTACTS.phone}
                </a>

                <div className="mt-5">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="h-11 px-5 rounded-full bg-white text-black font-medium hover:opacity-90 transition"
                  >
                    Открыть способы связи
                  </button>
                </div>
              </Card>

              <Card className="p-6">
                <p className="text-white/60 text-sm">Telegram</p>
                <a
                  href={CONTACTS.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl font-semibold mt-2 inline-block hover:opacity-80 transition"
                >
                  Написать в Telegram
                </a>

                <p className="text-white/60 mt-4">
                  Мы отвечаем и подбираем свободное время.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <Footer onBooking={() => setBookingOpen(true)} />
      </div>

      <CookieBanner />

      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        contacts={CONTACTS}
      />
    </div>
  );
}