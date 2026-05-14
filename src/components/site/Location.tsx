import React from "react";

export function Location() {
  return (
    <section id="location" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-10 items-stretch">
        <div className="order-2 md:order-1">
          <p className="uppercase tracking-[0.2em] text-xs text-accent font-semibold mb-4">Локация</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary">Намерете ни в Слатина</h2>
          <div className="mt-8 space-y-5 text-lg">
            <Info icon={<MapPin />} title="Адрес" text="ж.к Христо Смирненски, ул. Мъдрен 18, София 1574" />
            <Info icon={<Clock />} title="Работно време" text="Понеделник – Неделя · 11:30 – 23:00" />
            <Info icon={<Car />} title="Паркинг" text="Безплатен уличен паркинг пред ресторанта" />
            <Info icon={<Phone />} title="Телефон" text="+359 88 823 1246" href="tel:+359888231246" />
          </div>
        </div>
        <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-warm h-[400px] md:h-auto min-h-[400px] border border-border">
          <iframe
            title="Местоположение Gustosa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11731.630847824106!2d23.374371099999998!3d42.684497199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85e5e06a776b%3A0xc9d38579b3b27ab9!2sGustoza%20Ltd!5e0!3m2!1sen!2sbg!4v1778714496524!5m2!1sen!2sbg"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function MapPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function Clock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
function Car() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  );
}
function Phone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function Info({ icon, title, text, href }: { icon: React.ReactNode; title: string; text: string; href?: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="text-accent mt-0.5 shrink-0">{icon}</div>
      <div>
        <div className="font-semibold text-primary">{title}</div>
        {href ? (
          <a href={href} className="text-muted-foreground hover:text-accent transition-colors">{text}</a>
        ) : (
          <div className="text-muted-foreground">{text}</div>
        )}
      </div>
    </div>
  );
}
