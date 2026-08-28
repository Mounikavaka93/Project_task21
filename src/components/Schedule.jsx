import { useState } from 'react'
import { week } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Schedule() {
  const [active, setActive] = useState(0)
  const session = week[active]

  return (
    <section id="schedule" className="scroll-mt-0 py-14 sm:py-20 lg:scroll-mt-[-1.75rem] lg:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Training schedule"
          title="Seven days."
          accent="Zero guesswork."
          copy="Hit a different muscle emphasis each day. Tap a day to see the session focus and time on the floor."
        />

        <div className="mt-8 grid items-start gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {week.map((item, index) => (
              <button
                key={item.day}
                type="button"
                onClick={() => setActive(index)}
                className={`min-w-0 rounded-xl border px-3 py-3 text-left transition-all duration-200 sm:px-4 ${
                  active === index
                    ? 'border-ember bg-raised'
                    : 'border-line bg-panel hover:border-gold'
                }`}
              >
                <span className="text-[11px] font-semibold uppercase tracking-wider text-mist">{item.day}</span>
                <strong className="mt-1 block font-display text-sm font-bold uppercase leading-tight tracking-wide sm:text-lg">
                  {item.group}
                </strong>
              </button>
            ))}
          </div>

          <div className="flex min-h-[220px] flex-col rounded-2xl border border-line bg-panel p-5 sm:min-h-[280px] sm:p-8 lg:sticky lg:top-24 lg:min-h-[32rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">{session.day}</p>
            <h3 className="mt-3 font-display text-3xl font-extrabold uppercase leading-none text-paper sm:text-4xl">
              {session.group}
            </h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-mist sm:text-base">{session.activity}</p>
            <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5 text-sm sm:mt-8">
              <span className="text-mist">Session length</span>
              <span className="shrink-0 font-display text-xl font-bold text-gold sm:text-2xl">{session.minutes} min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
