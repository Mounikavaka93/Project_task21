import { macros, meals } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Nutrition() {
  return (
    <section id="nutrition" className="scroll-mt-0 border-t border-line bg-panel py-20 lg:scroll-mt-[-1.75rem] lg:py-28">
      <div className="section-shell grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative min-h-[18rem] overflow-hidden rounded-3xl sm:min-h-[26rem]">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80"
            alt="High-protein meal prepared for a bulking diet"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-4 right-4 rounded-2xl border border-line bg-void px-4 py-3 shadow-xl">
            <p className="text-[11px] uppercase tracking-wider text-mist">Example day</p>
            <p className="font-display text-2xl font-bold text-gold">3,200 kcal</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <SectionHeading
            kicker="Bulking nutrition"
            title="Eat in a surplus."
            accent="Stay on protein."
            copy="Muscle growth needs extra energy and enough amino acids. Keep the surplus modest, hit protein at every meal, and scale carbs around training."
          />

          <dl className="mt-8 grid grid-cols-2 gap-3">
            {macros.map((item) => (
              <div key={item.label} className="rounded-xl border border-line bg-void px-4 py-3">
                <dt className="text-[11px] uppercase tracking-wider text-mist">{item.label}</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-paper">{item.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-8 space-y-4">
            {meals.map((meal) => (
              <li key={meal.title} className="border-l-2 border-ember pl-4">
                <p className="text-sm font-semibold text-paper">{meal.title}</p>
                <p className="mt-1 text-sm text-mist">{meal.items}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
