export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14 grid md:grid-cols-12 gap-8">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="font-display text-3xl font-bold">Gustoza</div>
          <p className="mt-3 text-primary-foreground/70 max-w-sm text-sm leading-relaxed">
            Автентичен гръцки ресторант в София от 1996 г. Прясна риба, мезета и истинска средиземноморска атмосфера.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              {
                label: "Facebook",
                href: "https://www.facebook.com/GustosaSofia/",
                d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              },
              {
                label: "Instagram",
                d: "M16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5zm-4 6a3 3 0 110 6 3 3 0 010-6zm5-1.5a1 1 0 110 2 1 1 0 010-2z"
              },
              {
                label: "Google",
                d: "M21 11h-9v2.9h5.2c-.2 1.5-1.7 4.3-5.2 4.3-3.1 0-5.7-2.6-5.7-5.7S8.9 6.8 12 6.8c1.8 0 3 .8 3.7 1.4l2.5-2.4C16.6 4.3 14.5 3.4 12 3.4 7.3 3.4 3.5 7.2 3.5 12s3.8 8.6 8.5 8.6c4.9 0 8.2-3.4 8.2-8.3 0-.5-.1-1-.2-1.3z"
              },
            ].map(s => (
              <a
                key={s.label}
                href={s.href ?? "#"}
                target={s.href ? "_blank" : undefined}
                rel={s.href ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>

          {/* Contacts + Hours wrapper */}
          <div className="md:col-span-5 md:col-start-7 grid grid-cols-2 gap-8">

            {/* Contacts */}
            <div>
              <div className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/50">Контакти</div>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li>ж.к Христо Смирненски, ул. Мъдрен 18</li>
                <li>София 1574</li>
                <li className="pt-1"><a href="tel:+359888231246" className="hover:text-accent transition-colors">+359 88 823 1246</a></li>
                <li><a href="mailto:hello@gustoza.bg" className="hover:text-accent transition-colors">hello@gustoza.bg</a></li>
              </ul>
            </div>

            {/* Working hours */}
            <div className="text-center">
              <div className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/50">Работно време</div>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li className="flex justify-center gap-4"><span>Пон – Нед</span><span>11:30 – 23:00</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
