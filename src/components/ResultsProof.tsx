const testimonials = [
  {
    name: "David Mitchell",
    state: "Texas",
    quote: "I was skeptical at first — I've been in Medicare sales for 12 years and thought I'd heard every pitch. But once BenefitPath set up my Voice AI agent, my business changed completely. In the first two weeks, I booked 19 appointments from leads I hadn't been able to reach in months. The AI called them at times I'd never think to call, left perfect voicemails, and when they called back, they were already warmed up. I went from grinding 6 hours a day on the phone to spending that time actually sitting with clients. My revenue went up 40% in the first month.",
  },
  {
    name: "Patricia Hernandez",
    state: "Florida",
    quote: "AEP used to be the most stressful time of my year. I'd have 3,000 clients to contact and maybe 3 weeks to do it. Last year I let the AI handle the outreach and it was like having a team of 10 callers working around the clock. Every client got contacted, every renewal was addressed, and I booked more appointments during AEP than I had in the previous three years combined. I'll never go back to doing it manually. This is the single best investment I've made in my insurance career.",
  },
  {
    name: "James Crawford",
    state: "Ohio",
    quote: "I was spending over $2,000 a month on a virtual assistant who made maybe 80 calls a day. The connection rate was terrible and the appointments were inconsistent. I switched to BenefitPath Voice AI and the difference was night and day. The AI makes 200+ calls daily, the voicemail delivery rate is incredible, and I'm consistently booking 3 to 5 appointments per day. The ROI hit 4x in the first 30 days. I only wish I'd found this sooner.",
  },
];

const stats = [
  { number: "3.2", label: "Avg. Appointments Booked Per 100 Calls" },
  { number: "14hrs", label: "Average Time Saved Per Week" },
  { number: "4x", label: "Average ROI in First 30 Days" },
];

const ResultsProof = () => (
  <section className="bg-section-gray py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-16">
        What Agents Are Saying
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-background rounded-xl border border-border shadow-card p-8">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">"{t.quote}"</p>
            <div>
              <p className="font-bold text-navy">{t.name}</p>
              <p className="text-sm text-muted-foreground">Medicare Agent — {t.state}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-background rounded-xl border border-border shadow-card-lg p-12">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl sm:text-5xl font-extrabold text-cta-blue">{stat.number}</p>
              <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ResultsProof;
