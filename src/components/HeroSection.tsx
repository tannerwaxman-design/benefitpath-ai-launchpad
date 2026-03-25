import { useState, useEffect } from "react";

const rotatingWords = ["Appointments", "Renewals", "Consultations", "Clients", "Enrollments"];

const TypewriterWord = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = rotatingWords[wordIndex];

    if (!isDeleting && displayed === currentWord) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      return;
    }

    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? currentWord.substring(0, displayed.length - 1)
          : currentWord.substring(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  return (
    <span className="text-green-highlight">
      {displayed}
      <span className="inline-block w-[3px] h-[0.85em] bg-green-accent ml-1 animate-[pulse_1s_ease-in-out_infinite] align-middle" />
    </span>
  );
};

const HeroSection = () => {
  const recentCalls = [
    { name: "Margaret J.", status: "Connected", time: "3:24", color: "text-green-accent" },
    { name: "Robert K.", status: "Voicemail", time: "0:45", color: "text-yellow-400" },
    { name: "Susan M.", status: "Connected", time: "2:12", color: "text-green-accent" },
    { name: "James P.", status: "No Answer", time: "0:30", color: "text-muted-foreground" },
  ];

  return (
    <section className="gradient-hero min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side */}
        <div className="fade-in-up">
          <p className="text-sm font-medium tracking-wide uppercase mb-4 text-white/60">
            Built For Medicare Agents
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-primary-foreground">Book More</span>
            <br />
            <TypewriterWord />
          </h1>
          <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
            We set up your entire Voice AI system from scratch so it starts calling your Medicare leads, leaving compliant voicemails, and booking appointments — without you lifting a finger.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
            >
              Book Your Setup Call
            </a>
            <a
              href="#what-is-voice-ai"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-white/10 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Right side — iPhone mockup */}
        <div className="hidden lg:flex justify-center fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="w-[320px] rounded-[2.5rem] bg-white border border-border shadow-2xl overflow-hidden">
            {/* iPhone notch bar */}
            <div className="bg-white px-6 pt-3 pb-2 flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">9:41</span>
              <div className="w-24 h-6 bg-foreground rounded-full mx-auto" />
              <div className="w-6 h-3 rounded-sm bg-green-accent" />
            </div>

            {/* App header */}
            <div className="bg-primary px-5 py-4">
              <p className="text-primary-foreground text-sm font-semibold">BenefitPath Voice AI</p>
              <p className="text-primary-foreground/80 text-xs font-medium">Active Campaign</p>
            </div>

            {/* Active call */}
            <div className="px-5 py-5 bg-white text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-accent" />
                <span className="text-green-accent text-sm font-semibold">AI Agent Active</span>
              </div>
              <p className="text-muted-foreground text-sm">Calling Margaret Johnson...</p>
              <div className="flex items-center justify-center gap-1 mt-3 h-8">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 bg-primary rounded-full waveform-bar" style={{ height: 8 }} />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border mx-5" />

            {/* Recent calls */}
            <div className="px-5 py-4">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-3 font-semibold">Recent Calls</p>
              <div className="space-y-3">
                {recentCalls.map((call) => (
                  <div key={call.name} className="flex items-center justify-between">
                    <span className="text-foreground text-sm font-medium">{call.name}</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${call.color === "text-green-accent" ? "bg-green-accent" : call.color === "text-yellow-400" ? "bg-yellow-400" : "bg-muted-foreground"}`} />
                        <span className="text-muted-foreground text-xs">{call.status}</span>
                      </div>
                      <span className="text-muted-foreground text-xs">{call.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="border-t border-border mx-5" />
            <div className="grid grid-cols-3 gap-2 text-center px-5 py-4 pb-6">
              <div>
                <p className="text-primary font-bold text-xl">47</p>
                <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-semibold">Calls</p>
              </div>
              <div>
                <p className="text-foreground font-bold text-xl">12</p>
                <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-semibold">Connected</p>
              </div>
              <div>
                <p className="text-primary font-bold text-xl">5</p>
                <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-semibold">Booked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
