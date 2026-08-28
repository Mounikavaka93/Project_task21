export default function SectionHeading({ kicker, title, accent, copy, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-ember">{kicker}</p>
      <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
        {title}
        {accent ? (
          <>
            {' '}
            <span className="text-gold">{accent}</span>
          </>
        ) : null}
      </h2>
      {copy ? <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist sm:text-base">{copy}</p> : null}
    </div>
  )
}
