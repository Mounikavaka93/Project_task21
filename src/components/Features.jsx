import { features } from '../data/content'
import { FeatureIcon } from './Icons'
import SectionHeading from './SectionHeading'

export default function Features() {
  return (
    <section id="benefits" className="scroll-mt-0 py-14 sm:py-20 lg:scroll-mt-[-1.75rem] lg:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Benefits"
          title="Why this bulk"
          accent="actually sticks."
          copy="The program is built around the few things that move the needle: hard sets, a real surplus, and enough recovery to come back stronger."
        />

        <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group flex h-full min-w-0 flex-col rounded-2xl border border-line bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ember hover:bg-raised sm:p-6"
            >
              <div className="mb-4 inline-flex w-fit rounded-xl bg-void p-3 transition-transform duration-300 group-hover:scale-110">
                <FeatureIcon index={index} />
              </div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide sm:text-xl">{feature.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
