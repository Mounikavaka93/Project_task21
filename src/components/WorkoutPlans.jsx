import { useState } from 'react'
import { plans } from '../data/content'
import SectionHeading from './SectionHeading'

export default function WorkoutPlans() {
  const [selected, setSelected] = useState(1)

  return (
    <section id="plans" className="scroll-mt-0 border-t border-line bg-panel py-20 lg:scroll-mt-[-1.75rem] lg:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Workout plans"
          title="A split for every"
          accent="stage of the bulk."
          copy="Each plan lists duration, difficulty, and how many days you train so you can pick a program that fits your recovery and calendar."
        />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const active = selected === index
            return (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember ${
                  plan.highlight || active
                    ? 'border-ember bg-raised shadow-[0_0_0_1px_rgba(255,90,31,0.25)]'
                    : 'border-line bg-void'
                }`}
              >
                <div className="flex min-h-14 items-start justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-wide">{plan.name}</h3>
                  {plan.highlight ? (
                    <span className="shrink-0 rounded-full bg-ember px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-void">
                      Popular
                    </span>
                  ) : (
                    <span className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider opacity-0" aria-hidden="true">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{plan.description}</p>
                <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-panel px-3 py-2">
                    <dt className="text-[11px] uppercase tracking-wider text-mist">Duration</dt>
                    <dd className="font-semibold text-paper">{plan.duration}</dd>
                  </div>
                  <div className="rounded-xl bg-panel px-3 py-2">
                    <dt className="text-[11px] uppercase tracking-wider text-mist">Difficulty</dt>
                    <dd className="font-semibold text-gold">{plan.difficulty}</dd>
                  </div>
                  <div className="col-span-2 rounded-xl bg-panel px-3 py-2">
                    <dt className="text-[11px] uppercase tracking-wider text-mist">Schedule</dt>
                    <dd className="font-semibold text-paper">{plan.sessions}</dd>
                  </div>
                </dl>
                <button
                  type="button"
                  onClick={() => setSelected(index)}
                  className={`mt-5 w-full rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                    active ? 'bg-ember text-void' : 'border border-line text-paper hover:border-gold hover:text-gold'
                  }`}
                >
                  {active ? 'Selected plan' : 'Choose this plan'}
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
