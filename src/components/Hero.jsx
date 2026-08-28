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
        <div className="absolute inset-0 bg-gradient-to-b from-void/90 via-void/80 to-void lg:bg-gradient-to-r lg:from-void lg:via-void/85 lg:to-void/40" />
      </div>

      <div className="section-shell relative grid items-center gap-8 py-12 sm:gap-10 sm:py-16 md:min-h-[calc(100svh-4rem)] lg:grid-cols-2 lg:gap-12 lg:py-24">
        <div className="animate-fade-up flex w-full min-w-0 flex-col">
          <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-panel/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold sm:text-xs sm:tracking-[0.22em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
            <span className="truncate">12-week bulking program</span>
          </p>
          <h1 className="w-full font-display text-[clamp(2.5rem,10vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
            Build mass.
            <span className="block text-ember">Train with intent.</span>
          </h1>
          <p className="mt-5 w-full text-sm leading-relaxed text-mist sm:mt-6 sm:text-base lg:text-lg">
            IronPeak is a complete bulking system: structured hypertrophy training, a calorie surplus you can
            actually follow, and recovery that keeps you progressing week after week.
          </p>
          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#join"
              onClick={(event) => goToSection(event, '#join')}
              className="w-full rounded-full bg-ember px-6 py-3 text-center text-sm font-semibold text-void transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-400 sm:w-auto"
            >
              Start your bulk
            </a>
            <a
              href="#plans"
              onClick={(event) => goToSection(event, '#plans')}
              className="w-full rounded-full border border-line px-6 py-3 text-center text-sm font-semibold text-paper transition-colors duration-200 hover:border-gold hover:text-gold sm:w-auto"
            >
              View workout plans
            </a>
          </div>
          <dl className="mt-8 grid w-full grid-cols-3 gap-2 border-t border-line pt-5 sm:mt-10 sm:gap-6 sm:pt-6">
            <div className="min-w-0">
              <dt className="text-[10px] uppercase tracking-wider text-mist sm:text-[11px]">Athletes</dt>
              <dd className="font-display text-xl font-bold text-paper sm:text-3xl">18k+</dd>
            </div>
            <div className="min-w-0">
              <dt className="text-[10px] uppercase tracking-wider text-mist sm:text-[11px]">Avg. gain</dt>
              <dd className="font-display text-xl font-bold text-gold sm:text-3xl">9 lbs</dd>
            </div>
            <div className="min-w-0">
              <dt className="text-[10px] uppercase tracking-wider text-mist sm:text-[11px]">Completion</dt>
              <dd className="font-display text-xl font-bold text-paper sm:text-3xl">94%</dd>
            </div>
          </dl>
        </div>

        <div className="w-full min-w-0">
          <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl shadow-black/40 sm:rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80"
              alt="Athlete performing a heavy squat during a bulking session"
              className="h-56 w-full object-cover sm:h-80 lg:h-[26rem]"
            />
            <div className="grid grid-cols-2 divide-x divide-line">
              <div className="bg-panel p-3 sm:p-4">
                <p className="text-[11px] uppercase tracking-wider text-mist sm:text-xs">This week</p>
                <p className="mt-1 font-display text-xl font-bold sm:text-2xl">5 lifts</p>
              </div>
              <div className="bg-panel p-3 sm:p-4">
                <p className="text-[11px] uppercase tracking-wider text-mist sm:text-xs">Surplus</p>
                <p className="mt-1 font-display text-xl font-bold text-ember sm:text-2xl">+420 kcal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
