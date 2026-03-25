const FinalCTA = () => (
  <section id="book" className="gradient-cta py-24">
    <div className="container mx-auto px-6 text-center">
      {/* Calendly placeholder */}
      <div id="calendly-embed" />
      
      <h2 className="text-3xl sm:text-5xl font-extrabold text-primary-foreground mb-6">
        Stop Dialing. Start Booking.
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
        Let us build your AI calling agent this week. Your leads are waiting.
      </p>
      <a
        href="#book"
        className="inline-flex items-center justify-center rounded-full bg-cta-blue px-10 py-4 text-lg font-semibold text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
      >
        Book Your Free Setup Call
      </a>
      <p className="text-sm text-gray-400 mt-6">
        No contracts. No tech skills needed. Setup completed in 48 hours.
      </p>
    </div>
  </section>
);

export default FinalCTA;
