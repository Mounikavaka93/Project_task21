import { useState } from 'react'

export default function CallToAction() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (!email.trim()) return
    setJoined(true)
  }

  return (
    <section id="join" className="scroll-mt-0 py-14 sm:py-20 lg:scroll-mt-[-1.75rem] lg:py-28">
      <div className="section-shell">
        <div className="flex w-full min-w-0 flex-col items-stretch justify-between gap-6 overflow-hidden rounded-2xl border border-ember/40 bg-gradient-to-br from-raised via-panel to-void px-5 py-8 sm:gap-8 sm:rounded-3xl sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:px-12">
          <div className="w-full min-w-0 lg:max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs sm:tracking-[0.28em]">
              Start the journey
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.85rem,6vw,3.75rem)] font-extrabold uppercase leading-[0.95]">
              Ready to bulk
              <span className="text-ember"> with a plan?</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mist sm:text-base">
              Join the waitlist for the next IronPeak cohort. You will get the 12-week Mass Hypertrophy outline,
              grocery list, and first-week lifting log.
            </p>
          </div>

          {joined ? (
            <p className="w-full rounded-2xl border border-line bg-void px-5 py-4 text-sm text-paper lg:max-w-md" role="status">
              You are on the list. Check your inbox for the starter week.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:items-center lg:max-w-md"
            >
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@email.com"
                className="h-12 min-w-0 flex-1 rounded-full border border-line bg-void px-5 text-sm text-paper outline-none ring-ember placeholder:text-mist focus:ring-2"
              />
              <button
                type="submit"
                className="h-12 w-full shrink-0 rounded-full bg-ember px-6 text-sm font-semibold text-void transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-400 sm:w-auto"
              >
                Join now
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
