const stats = [
  { number: "3.2", label: "Avg. Appointments Booked Per 100 Calls" },
  { number: "14hrs", label: "Average Time Saved Per Week" },
  { number: "4x", label: "Average ROI in First 30 Days" },
];

const ResultsProof = () => (
  <section className="bg-section-gray py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-16">
        Results That Speak for Themselves
      </h2>

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
