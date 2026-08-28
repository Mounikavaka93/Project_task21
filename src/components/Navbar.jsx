import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'
import { goToSection } from '../utils/scroll'
import { LogoMark, MenuIcon } from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function goTo(event, href) {
    event.preventDefault()
    setOpen(false)
    goToSection(event, href)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-void/95 backdrop-blur-md' : 'border-transparent bg-void/70'
      }`}
    >
      <nav className="section-shell grid h-16 grid-cols-[1fr_auto] items-center lg:h-[4.5rem] lg:grid-cols-[1fr_auto_1fr]">
        <a href="#top" className="flex items-center gap-2.5 justify-self-start" onClick={(event) => goTo(event, '#top')}>
          <LogoMark className="h-8 w-8 shrink-0" />
          <span className="font-display text-2xl font-extrabold uppercase tracking-wide">
            Iron<span className="text-ember">Peak</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => goTo(event, link.href)}
                className="text-sm font-medium text-mist transition-colors duration-200 hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-self-end">
          <a
            href="#join"
            onClick={(event) => goTo(event, '#join')}
            className="hidden rounded-full bg-ember px-5 py-2 text-sm font-semibold text-void transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-400 lg:inline-flex"
          >
            Start program
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-x-0 top-16 z-40 border-b border-line bg-panel shadow-xl transition-all duration-300 lg:hidden ${
          open ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-2 opacity-0'
        }`}
      >
        <ul className="section-shell flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => goTo(event, link.href)}
                className="block rounded-lg px-2 py-3 text-base font-medium text-paper transition-colors hover:bg-raised hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#join"
              onClick={(event) => goTo(event, '#join')}
              className="mt-2 block rounded-full bg-ember px-4 py-3 text-center text-sm font-semibold text-void"
            >
              Start program
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
