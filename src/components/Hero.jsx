import { goToSection } from '../utils/scroll'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/40" />
      </div>

      <div className="section-shell relative grid min-h-[calc(100vh-4.5rem)] items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="animate-fade-up flex w-full flex-col">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-panel/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            12-week bulking program
          </p>
          <h1 className="w-full font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Build mass.
            <span className="block text-ember">Train with intent.</span>
          </h1>
          <p className="mt-6 w-full text-base leading-relaxed text-mist sm:text-lg">
            IronPeak is a complete bulking system: structured hypertrophy training, a calorie surplus you can
            actually follow, and recovery that keeps you progressing week after week.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#join"
              onClick={(event) => goToSection(event, '#join')}
              className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-void transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-400"
            >
              Start your bulk
            </a>
            <a
              href="#plans"
              onClick={(event) => goToSection(event, '#plans')}
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-paper transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              View workout plans
            </a>
          </div>
          <dl className="mt-10 grid w-full grid-cols-3 gap-3 border-t border-line pt-6 sm:gap-6">
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-mist">Athletes</dt>
              <dd className="font-display text-2xl font-bold text-paper sm:text-3xl">18k+</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-mist">Avg. gain</dt>
              <dd className="font-display text-2xl font-bold text-gold sm:text-3xl">9 lbs</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-mist">Completion</dt>
              <dd className="font-display text-2xl font-bold text-paper sm:text-3xl">94%</dd>
            </div>
          </dl>
        </div>

        <div className="w-full">
          <div className="overflow-hidden rounded-3xl border border-line bg-panel shadow-2xl shadow-black/40">
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80"
              alt="Athlete performing a heavy squat during a bulking session"
              className="h-72 w-full object-cover sm:h-80 lg:h-[26rem]"
            />
            <div className="grid grid-cols-2 divide-x divide-line">
              <div className="bg-panel p-4">
                <p className="text-xs uppercase tracking-wider text-mist">This week</p>
                <p className="mt-1 font-display text-2xl font-bold">5 lifts</p>
              </div>
              <div className="bg-panel p-4">
                <p className="text-xs uppercase tracking-wider text-mist">Surplus</p>
                <p className="mt-1 font-display text-2xl font-bold text-ember">+420 kcal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
