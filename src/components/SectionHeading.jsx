export default function SectionHeading({ kicker, title, accent, copy, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto w-full text-center' : 'w-full'}>
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
      {copy ? <p className="mt-4 w-full max-w-3xl text-sm leading-relaxed text-mist sm:text-base">{copy}</p> : null}
    </div>
  )
}
