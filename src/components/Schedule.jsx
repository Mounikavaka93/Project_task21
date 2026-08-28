import { useState } from 'react'
import { week } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Schedule() {
  const [active, setActive] = useState(0)
  const session = week[active]

  return (
    <section id="schedule" className="scroll-mt-0 py-20 lg:scroll-mt-[-1.75rem] lg:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Training schedule"
          title="Seven days."
          accent="Zero guesswork."
          copy="Hit a different muscle emphasis each day. Tap a day to see the session focus and time on the floor."
        />

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:grid lg:grid-cols-1 lg:overflow-visible">
            {week.map((item, index) => (
              <button
                key={item.day}
                type="button"
                onClick={() => setActive(index)}
                className={`min-w-[10rem] rounded-xl border px-4 py-3 text-left transition-all duration-200 lg:min-w-0 lg:w-full ${
                  active === index
                    ? 'border-ember bg-raised'
                    : 'border-line bg-panel hover:border-gold'
                }`}
              >
                <span className="text-[11px] font-semibold uppercase tracking-wider text-mist">{item.day}</span>
                <strong className="mt-1 block font-display text-lg font-bold uppercase tracking-wide">
                  {item.group}
                </strong>
              </button>
            ))}
          </div>

          <div className="flex min-h-[280px] flex-col rounded-2xl border border-line bg-panel p-6 sm:p-8 lg:sticky lg:top-24 lg:min-h-[32rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">{session.day}</p>
            <h3 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none text-paper">
              {session.group}
            </h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-mist sm:text-base">{session.activity}</p>
            <div className="mt-8 flex items-center justify-between border-t border-line pt-5 text-sm">
              <span className="text-mist">Session length</span>
              <span className="font-display text-2xl font-bold text-gold">{session.minutes} min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
