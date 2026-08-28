import { testimonials } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-0 border-t border-line bg-panel py-20 lg:scroll-mt-[-1.75rem] lg:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Testimonials"
          title="Lifters who"
          accent="committed to the surplus."
        />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex h-full flex-col rounded-2xl border border-line bg-void p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 text-gold" aria-label="5 star rating">
                ★★★★★
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-paper sm:text-base">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ember font-display text-lg font-bold text-void">
                  {item.initials}
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">{item.name}</span>
                  <span className="text-xs text-mist">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
