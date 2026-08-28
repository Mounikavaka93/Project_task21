export default function SectionHeading({ kicker, title, accent, copy, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto w-full min-w-0 text-center' : 'w-full min-w-0'}>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember sm:text-xs sm:tracking-[0.28em]">
        {kicker}
      </p>
      <h2 className="font-display text-[clamp(2rem,7vw,3.75rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-paper">
        {title}
        {accent ? (
          <>
            {' '}
            <span className="text-gold">{accent}</span>
          </>
        ) : null}
      </h2>
      {copy ? (
        <p className="mt-4 w-full max-w-3xl text-sm leading-relaxed text-mist sm:text-base">{copy}</p>
      ) : null}
    </div>
  )
}
