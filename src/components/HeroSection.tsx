import { Phone, PhoneCall, Voicemail, PhoneOff } from "lucide-react";

const WaveformBar = () => (
  <div className="flex items-center gap-1 h-8">
    {[...Array(8)].map((_, i) => (
      <div key={i} className="w-1 bg-green-accent rounded-full waveform-bar" style={{ height: 8 }} />
    ))}
  </div>
);

const HeroSection = () => {
  const recentCalls = [
    { name: "Margaret Johnson", status: "Connected", icon: PhoneCall, color: "text-green-accent" },
    { name: "Robert Davis", status: "Voicemail", icon: Voicemail, color: "text-yellow-400" },
    { name: "Linda Martinez", status: "No Answer", icon: PhoneOff, color: "text-red-400" },
    { name: "James Wilson", status: "Connected", icon: PhoneCall, color: "text-green-accent" },
  ];

  return (
    <section className="gradient-hero min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side */}
        <div className="fade-in-up">
          <span className="inline-block rounded-full border border-green-accent/30 bg-green-accent/10 px-4 py-1.5 text-sm font-medium text-green-accent mb-6">
            Done For You Voice AI Setup
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-primary-foreground">Your AI Calling Agent.</span>
            <br />
            <span className="text-primary-foreground">Fully Built. </span>
            <span className="text-green-highlight">Ready to Book.</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl">
            We set up your entire Voice AI system from scratch so it starts calling your Medicare leads, leaving compliant voicemails, and booking appointments — without you lifting a finger.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-full bg-cta-blue px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
            >
              Book Your Setup Call
            </a>
            <a
              href="#what-is-voice-ai"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-white/10 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Right side — Phone mockup */}
        <div className="hidden lg:flex justify-center fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="w-80 rounded-3xl bg-navy/80 backdrop-blur border border-white/10 p-6 shadow-2xl">
            {/* Active call */}
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-full bg-green-accent/20 flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-green-accent" />
              </div>
              <p className="text-primary-foreground font-semibold text-lg">Margaret Johnson</p>
              <p className="text-gray-400 text-sm">Active Call — 02:34</p>
              <div className="flex items-center justify-center gap-1 mt-3 h-8">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 bg-green-accent rounded-full waveform-bar" style={{ height: 8 }} />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 my-4" />

            {/* Recent calls */}
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Recent Calls</p>
            <div className="space-y-3">
              {recentCalls.map((call) => (
                <div key={call.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <call.icon className={`w-4 h-4 ${call.color}`} />
                    <span className="text-primary-foreground text-sm">{call.name}</span>
                  </div>
                  <span className={`text-xs font-medium ${call.color}`}>{call.status}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="border-t border-white/10 mt-5 pt-4 grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-primary-foreground font-bold text-lg">47</p>
                <p className="text-gray-400 text-xs">Calls Made</p>
              </div>
              <div>
                <p className="text-green-accent font-bold text-lg">12</p>
                <p className="text-gray-400 text-xs">Connected</p>
              </div>
              <div>
                <p className="text-cta-blue font-bold text-lg">5</p>
                <p className="text-gray-400 text-xs">Booked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
