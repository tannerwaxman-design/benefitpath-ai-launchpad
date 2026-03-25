const stats = [
  { number: "10,000+", label: "Calls Made" },
  { number: "87%", label: "Voicemail Delivery Rate" },
  { number: "3x", label: "More Appointments" },
  { number: "100%", label: "TCPA Compliant" },
  { number: "48hrs", label: "Setup Time" },
];

const TrustBar = () => (
  <section className="bg-background py-24">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-16">
        Trusted by Medicare Agents Across the Country
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl sm:text-4xl font-extrabold text-cta-blue">{stat.number}</p>
            <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
