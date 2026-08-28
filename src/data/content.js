export const navLinks = [
  { label: 'Plans', href: '#plans' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Nutrition', href: '#nutrition' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Reviews', href: '#reviews' },
]

export const plans = [
  {
    name: 'Lean Bulk Starter',
    duration: '8 weeks',
    difficulty: 'Beginner',
    description:
      'Learn the core lifts, hit a controlled calorie surplus, and build your first 4–6 lbs of quality muscle.',
    sessions: '4 days / week',
    highlight: false,
  },
  {
    name: 'Mass Hypertrophy',
    duration: '12 weeks',
    difficulty: 'Intermediate',
    description:
      'Progressive overload with higher volume, smarter rest, and a 300–500 kcal surplus for serious size.',
    sessions: '5 days / week',
    highlight: true,
  },
  {
    name: 'Power Bulk Pro',
    duration: '16 weeks',
    difficulty: 'Advanced',
    description:
      'Strength-first hypertrophy blocks, heavy compounds, and peak week nutrition for experienced lifters.',
    sessions: '6 days / week',
    highlight: false,
  },
]

export const week = [
  {
    day: 'Monday',
    group: 'Chest & Triceps',
    activity: 'Bench press, incline dumbbell press, dips, cable flyes, skull crushers',
    minutes: 70,
  },
  {
    day: 'Tuesday',
    group: 'Back & Biceps',
    activity: 'Deadlift variation, weighted pull-ups, rows, face pulls, curls',
    minutes: 75,
  },
  {
    day: 'Wednesday',
    group: 'Legs',
    activity: 'Squat, Romanian deadlift, lunges, leg press, calf raises',
    minutes: 80,
  },
  {
    day: 'Thursday',
    group: 'Shoulders & Core',
    activity: 'Overhead press, laterals, rear-delt work, hanging raises, carry',
    minutes: 60,
  },
  {
    day: 'Friday',
    group: 'Upper Volume',
    activity: 'Close-grip bench, lat pulldown, incline press, arm finisher',
    minutes: 65,
  },
  {
    day: 'Saturday',
    group: 'Posterior Chain',
    activity: 'Hip hinge, glute bridges, hamstring curls, farmer carries',
    minutes: 55,
  },
  {
    day: 'Sunday',
    group: 'Recovery',
    activity: 'Walk, mobility, light core, and a full rest from heavy loading',
    minutes: 30,
  },
]

export const macros = [
  { value: '+300–500', label: 'Daily calorie surplus' },
  { value: '1.6–2.2g', label: 'Protein per kg bodyweight' },
  { value: '4–5', label: 'Meals and snacks / day' },
  { value: '3–4L', label: 'Water target' },
]

export const meals = [
  {
    title: 'Breakfast',
    items: 'Oats, whole eggs, banana, and Greek yogurt for 40g+ protein.',
  },
  {
    title: 'Lunch',
    items: 'Chicken, rice, olive oil, and mixed vegetables — easy to scale.',
  },
  {
    title: 'Pre-workout',
    items: 'Rice cakes or fruit plus whey if training is more than 3 hours after lunch.',
  },
  {
    title: 'Dinner',
    items: 'Salmon or lean beef, potatoes, greens, and a casein-rich dessert.',
  },
]

export const features = [
  {
    title: 'Progressive overload',
    text: 'Every session has a clear target: add load, reps, or quality without junk volume.',
  },
  {
    title: 'Built for a surplus',
    text: 'Training volume matches a bulking diet so extra calories become muscle, not just fatigue.',
  },
  {
    title: 'Meal templates',
    text: 'Simple plates you can repeat, swap, and scale as bodyweight and appetite change.',
  },
  {
    title: 'Recovery windows',
    text: 'Sleep, deloads, and a true rest day so joints and the nervous system keep up.',
  },
  {
    title: 'Form-first coaching cues',
    text: 'Compound lifts stay safe and strong with setup notes for squat, bench, hinge, and press.',
  },
  {
    title: 'Trackable weekly targets',
    text: 'Know exactly how many hard sets you owe each muscle group before the week ends.',
  },
]

export const testimonials = [
  {
    name: 'Marcus Hale',
    role: '12-week Mass Hypertrophy',
    quote:
      'I added 11 pounds and my bench jumped 25. The surplus was clear, the workouts were hard, and I never felt lost.',
    initials: 'MH',
  },
  {
    name: 'Priya Nair',
    role: 'Lean Bulk Starter',
    quote:
      'First time bulking without feeling bloated. Protein targets and four-day splits made it realistic around work.',
    initials: 'PN',
  },
  {
    name: 'Jonah Reed',
    role: 'Power Bulk Pro',
    quote:
      'The heavy days actually respect recovery. I got stronger every block instead of spinning on random PPL.',
    initials: 'JR',
  },
]
