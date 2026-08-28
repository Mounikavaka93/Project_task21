import { goToSection } from '../utils/scroll'
import { navLinks } from '../data/content'
import { LogoMark, SocialIcon } from './Icons'

const socials = [
  { name: 'instagram', href: 'https://instagram.com', label: 'Instagram' },
  { name: 'youtube', href: 'https://youtube.com', label: 'YouTube' },
  { name: 'x', href: 'https://x.com', label: 'X' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="section-shell grid grid-cols-1 items-start gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#top" className="inline-flex items-center gap-2.5" onClick={(event) => goToSection(event, '#top')}>
            <LogoMark className="h-8 w-8 shrink-0" />
            <span className="font-display text-2xl font-extrabold uppercase">
              Iron<span className="text-ember">Peak</span>
            </span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">
            Structured bulking workouts, nutrition targets, and recovery — built for people who want to add real
            muscle.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Navigate</p>
          <ul className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => goToSection(event, link.href)}
                  className="text-sm text-mist transition-colors hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#join" onClick={(event) => goToSection(event, '#join')} className="text-sm text-mist transition-colors hover:text-paper">
                Join
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Social</p>
          <div className="mt-4 flex gap-3">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-paper transition-colors hover:border-ember hover:text-ember"
              >
                <SocialIcon name={item.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="section-shell py-5 text-xs text-mist">
          © {new Date().getFullYear()} IronPeak Training. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
