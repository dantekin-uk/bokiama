import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Star, CheckCircle2 } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    initials: 'J&E',
    avatarBg: 'from-orange-400 to-rose-500',
    rating: 5,
    quote:
      "Bokiama didn't just give us a vacation; they designed a masterpiece. Every logistical detail was flawless, and the access they provided to the private Mara conservancies felt completely exclusive. The best travel decision we've ever made.",
    name: 'James & Elena',
    location: 'London',
    tripTag: 'Custom Safari & Coastal Escape',
    timeAgo: '2 months ago',
  },
  {
    id: 2,
    initials: 'W&D',
    avatarBg: 'from-teal-400 to-emerald-600',
    rating: 5,
    quote:
      'As Kenyans, we thought we knew Diani inside and out, but Bokiama unlocked doors we never knew existed. They secured a private villa and handled every detail so seamlessly that we finally got to truly disconnect. Unmatched white-glove service.',
    name: 'Wanjiku & David',
    location: 'Nairobi',
    tripTag: 'Anniversary Coastal Retreat',
    timeAgo: '1 month ago',
  },
  {
    id: 3,
    initials: 'MT',
    avatarBg: 'from-indigo-500 to-violet-600',
    rating: 5,
    quote:
      'From a private Dhow sailing at sunset to a surprise bush breakfast overlooking Kilimanjaro, the hyper-personalized touches were unbelievable. They truly have money-can\'t-buy insider access.',
    name: 'Marcus T.',
    location: 'New York',
    tripTag: 'Bespoke Honeymoon',
    timeAgo: '3 weeks ago',
  },
  {
    id: 4,
    initials: 'OF',
    avatarBg: 'from-amber-400 to-orange-600',
    rating: 5,
    quote:
      'Planning a multi-generational family trip is usually a nightmare, but our Travel Architect handled the logistics effortlessly. The kids were entertained, the elders were comfortable, and the cultural immersion in the North was handled with so much respect and authenticity.',
    name: 'The Ochieng Family',
    location: 'Kisumu',
    tripTag: 'Northern Frontier Family Journey',
    timeAgo: '5 weeks ago',
  },
  {
    id: 5,
    initials: 'CF',
    avatarBg: 'from-rose-400 to-pink-600',
    rating: 5,
    quote:
      'We wanted to experience the real Kenya without the stress of planning. The 24/7 support from our Bokiama architect meant we never had to worry about a single transfer or booking. Pure magic from touchdown to takeoff.',
    name: 'The Chen Family',
    location: 'Singapore',
    tripTag: 'Heritage & Wildlife Safari',
    timeAgo: '2 months ago',
  },
]

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  )
}

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="fill-[#FBBF24] text-[#FBBF24]"
          strokeWidth={0}
        />
      ))}
      <CheckCircle2
        size={15}
        className="ml-1 text-[#4285F4]"
        strokeWidth={2.5}
      />
    </div>
  )
}

function TestimonialCard({ review }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className="group relative flex w-[255px] shrink-0 flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_10px_28px_-12px_rgba(15,23,42,0.08)] sm:w-[275px] sm:p-4"
    >
      <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gradient-to-br from-secondary/8 via-secondary/4 to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex items-start justify-between gap-2.5">
        <div className="flex items-center gap-2.5">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${review.avatarBg} text-[11px] font-bold uppercase tracking-tight text-white shadow-sm ring-2 ring-white sm:h-10 sm:w-10 sm:text-[12px]`}
          >
            {review.initials}
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-display text-[12px] font-bold leading-tight text-slate-900 sm:text-[13px]">
              {review.name}
            </span>
            <span className="mt-0.5 truncate font-sans text-[10px] text-slate-500 sm:text-[11px]">
              {review.location} · {review.timeAgo}
            </span>
          </div>
        </div>
        <div className="shrink-0 opacity-90">
          <svg viewBox="0 0 48 48" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mt-3">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} size={12} className="fill-[#FBBF24] text-[#FBBF24]" strokeWidth={0} />
          ))}
          <CheckCircle2 size={13} className="ml-1 text-[#4285F4]" strokeWidth={2.5} />
        </div>
      </div>

      <p className="relative z-10 mt-2.5 flex-1 font-sans text-[11.5px] leading-relaxed text-slate-700 sm:text-[12px]">
        &ldquo;{review.quote}&rdquo;
      </p>

      <div className="relative z-10 mt-3.5 flex items-center justify-end border-t border-slate-100 pt-3">
        <span className="inline-flex items-center gap-1 text-[9px] font-medium text-slate-400 sm:text-[10px]">
          <CheckCircle2 size={10} className="text-slate-300" strokeWidth={2.5} />
          Verified
        </span>
      </div>
    </motion.article>
  )
}

function MarqueeRow({ items, direction = 'left', duration = 70 }) {
  const duplicated = useMemo(() => [...items, ...items], [items])

  return (
    <div className="relative flex w-full overflow-hidden py-1">
      <div
        className="absolute inset-y-0 left-0 z-20 w-20 sm:w-32"
        style={{
          background:
            'linear-gradient(to right, rgba(248,250,252,1), rgba(248,250,252,0))',
        }}
      />
      <div
        className="absolute inset-y-0 right-0 z-20 w-20 sm:w-32"
        style={{
          background:
            'linear-gradient(to left, rgba(248,250,252,1), rgba(248,250,252,0))',
        }}
      />

      <motion.div
        className="flex shrink-0 gap-4 sm:gap-5"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {duplicated.map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} review={item} />
        ))}
      </motion.div>
    </div>
  )
}

export default function Globe() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-11 sm:py-14 lg:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-12 h-56 w-56 rounded-full bg-secondary/8 blur-3xl" />
        <div className="absolute right-10 top-32 h-64 w-64 rounded-full bg-primary/6 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.06) 1px, transparent 0)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex flex-col items-start sm:mb-8 lg:mb-10"
        >
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-px w-5 bg-gradient-to-r from-secondary to-primary" />
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[11px]">
              Traveler Journals
            </p>
          </div>

          <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-end lg:gap-8">
            <div className="flex max-w-3xl flex-col">
              <h2
                className="font-display text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-2xl"
                style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
              >
                <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  Stories from the wild private conservancies, barefoot beaches, mountain skies, and the
                  travelers who lived them all.
                </span>
              </h2>
            </div>

            <div className="flex shrink-0 items-center gap-4 lg:gap-5">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((t) => (
                  <div
                    key={t.id}
                    className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${t.avatarBg} text-[9px] font-bold text-white ring-2 ring-slate-50 sm:h-8 sm:w-8 sm:text-[10px]`}
                  >
                    {t.initials[0]}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-[#FBBF24] text-[#FBBF24]"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="mt-0.5 font-sans text-[10.5px] font-medium text-slate-500 sm:text-[11px]">
                  <span className="font-bold text-slate-800">4.9 / 5</span> · 240+ verified Google reviews
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative -mx-4 px-4 lg:-mx-6 lg:px-6">
          <MarqueeRow items={testimonials} direction="left" duration={68} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-8 flex items-center justify-center sm:mt-10"
        >
          <a
            href="https://g.page/bokiama/review"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 font-sans text-[11.5px] font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/40 hover:text-slate-900 hover:shadow-md sm:px-6 sm:text-xs"
          >
            <GoogleLogo />
            Read all reviews on Google
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path d="M7 17L17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
