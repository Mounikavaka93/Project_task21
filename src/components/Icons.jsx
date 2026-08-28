export function LogoMark({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#ff5a1f" />
      <path d="M8 22V10h4.2l3.8 7.4L19.8 10H24v12h-3.2v-7.1L17.4 22h-2.8l-3.4-7.1V22H8Z" fill="#070708" />
    </svg>
  )
}

export function MenuIcon({ open }) {
  return (
    <span className="relative block h-4 w-6">
      <span
        className={`absolute left-0 h-0.5 w-6 bg-paper transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
      />
      <span
        className={`absolute left-0 top-1.5 h-0.5 w-6 bg-paper transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}
      />
      <span
        className={`absolute left-0 h-0.5 w-6 bg-paper transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}
      />
    </span>
  )
}

export function FeatureIcon({ index }) {
  const paths = [
    'M5 19V5h4l3.5 8L16 5h4v14h-3v-8l-3 8h-3l-3-8v8H5Z',
    'M4 18h16v2H4v-2Zm2-4 4-9 3 6 2-4 5 7H6Z',
    'M12 3 4 7v5c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V7l-8-4Zm0 3.2 5 2.5v3.6c0 3.3-2.1 5.9-5 6.9-2.9-1-5-3.6-5-6.9V8.7l5-2.5Z',
    'M4 12a8 8 0 1 1 8 8v-2.2A5.8 5.8 0 1 0 6.2 12H4Zm8 0-4 8h8l-4-8Z',
    'M7 4h10v3H7V4Zm-2 5h14v13H5V9Zm4 3v7h2v-7H9Zm4 0v7h2v-7h-2Z',
    'M4 6h16v2H4V6Zm0 5h10v2H4v-2Zm0 5h16v2H4v-2Z',
  ]

  return (
    <svg className="h-7 w-7 text-ember" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={paths[index % paths.length]} />
    </svg>
  )
}

export function SocialIcon({ name }) {
  const icons = {
    instagram:
      'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.2 6.6a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z',
    youtube:
      'M22 8.2a3.2 3.2 0 0 0-2.2-2.3C18 5.5 12 5.5 12 5.5s-6 0-7.8.4A3.2 3.2 0 0 0 2 8.2 33 33 0 0 0 1.6 12a33 33 0 0 0 .4 3.8 3.2 3.2 0 0 0 2.2 2.3c1.8.4 7.8.4 7.8.4s6 0 7.8-.4a3.2 3.2 0 0 0 2.2-2.3A33 33 0 0 0 22.4 12 33 33 0 0 0 22 8.2ZM10 15.2V8.8l6 3.2-6 3.2Z',
    x: 'M17.5 4h2.8l-6.1 7 7.2 9h-5.6l-4.4-5.8L6.2 20H3.4l6.5-7.5L3 4h5.8l4 5.3L17.5 4Zm-1 14.4h1.5L7.6 5.5H6L16.5 18.4Z',
  }

  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={icons[name]} />
    </svg>
  )
}
