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
    <section id="join" className="scroll-mt-0 py-20 lg:scroll-mt-[-1.75rem] lg:py-28">
      <div className="section-shell">
        <div className="flex w-full flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl border border-ember/40 bg-gradient-to-br from-raised via-panel to-void px-6 py-12 sm:px-8 lg:flex-row lg:items-center">
          <div className="w-full min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Start the journey</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
              Ready to bulk
              <span className="text-ember"> with a plan?</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mist sm:text-base">
              Join the waitlist for the next IronPeak cohort. You will get the 12-week Mass Hypertrophy outline,
              grocery list, and first-week lifting log.
            </p>
          </div>

          {joined ? (
            <p className="w-full max-w-md rounded-2xl border border-line bg-void px-5 py-4 text-sm text-paper" role="status">
              You are on the list. Check your inbox for the starter week.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full max-w-md shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
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
                className="h-12 shrink-0 rounded-full bg-ember px-6 text-sm font-semibold text-void transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-400"
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
