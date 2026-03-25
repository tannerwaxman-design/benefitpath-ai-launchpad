import { useEffect } from "react";

const FinalCTA = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.leadconnectorhq.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book" className="gradient-cta py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-primary-foreground mb-6">
          Stop Dialing. Start Booking.
        </h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
          Let us build your AI calling agent this week. Your leads are waiting.
        </p>

        {/* Booking calendar */}
        <div className="max-w-3xl mx-auto mb-10 rounded-xl overflow-hidden">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/TPVyOYj9Uu6aX7uwGorv"
            style={{ width: "100%", minHeight: "600px", border: "none", overflow: "hidden" }}
            scrolling="no"
            id="TPVyOYj9Uu6aX7uwGorv_1774456158746"
          />
        </div>

        <p className="text-sm text-white/40 mt-6">
          No contracts. No tech skills needed. Setup completed in 48 hours.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
