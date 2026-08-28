export function scrollToHash(href) {
  if (href === '#top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const target = document.querySelector(href)
  if (!target) return
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function goToSection(event, href) {
  event.preventDefault()
  window.history.pushState(null, '', href)
  requestAnimationFrame(() => scrollToHash(href))
}
