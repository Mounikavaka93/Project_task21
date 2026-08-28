import { macros, meals } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Nutrition() {
  return (
    <section id="nutrition" className="scroll-mt-0 border-t border-line bg-panel py-14 sm:py-20 lg:scroll-mt-[-1.75rem] lg:py-28">
      <div className="section-shell grid items-stretch gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative min-h-[16rem] overflow-hidden rounded-2xl sm:min-h-[22rem] sm:rounded-3xl lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80"
            alt="High-protein meal prepared for a bulking diet"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-3 right-3 rounded-2xl border border-line bg-void px-3 py-2 shadow-xl sm:bottom-4 sm:right-4 sm:px-4 sm:py-3">
            <p className="text-[10px] uppercase tracking-wider text-mist sm:text-[11px]">Example day</p>
            <p className="font-display text-xl font-bold text-gold sm:text-2xl">3,200 kcal</p>
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-center">
          <SectionHeading
            kicker="Bulking nutrition"
            title="Eat in a surplus."
            accent="Stay on protein."
            copy="Muscle growth needs extra energy and enough amino acids. Keep the surplus modest, hit protein at every meal, and scale carbs around training."
          />

          <dl className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2">
            {macros.map((item) => (
              <div key={item.label} className="min-w-0 rounded-xl border border-line bg-void px-4 py-3">
                <dt className="text-[11px] uppercase tracking-wider text-mist">{item.label}</dt>
                <dd className="mt-1 break-words font-display text-xl font-bold text-paper sm:text-2xl">{item.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 space-y-4 sm:mt-8">
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
