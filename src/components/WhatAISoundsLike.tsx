import { X, CheckCircle, PlayCircle } from "lucide-react";

const oldWay = [
  "Robotic, monotone voice that sounds obviously automated",
  "No response detection — talks over the listener",
  "Hangs up on voicemail or plays a glitchy recording",
  "Sounds spammy and untrustworthy from the first second",
  "Leads hang up immediately and block your number",
];

const newWay = [
  "Natural, warm voice with human cadence and tone variation",
  "Real-time response detection — listens and reacts naturally",
  "Detects voicemail and drops a clean, compliant message",
  "Sounds professional and trustworthy from the first word",
  "Leads engage, ask questions, and book appointments",
];

const WhatAISoundsLike = () => (
  <section className="bg-section-gray py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-8">
        Your AI Sounds Like a Real Person. Because It's Built Like One.
      </h2>
      <div className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed mb-16 space-y-6">
        <p>
          When most people hear "AI calling," they picture a robocall — a stilted, robotic recording that leads instantly recognize and hang up on. That's not what this is. Modern Voice AI uses neural text-to-speech technology that generates speech with natural cadence, breath pauses, subtle filler words, and tone variation that mirrors how a real person speaks on the phone.
        </p>
        <p>
          The AI doesn't just read a script in a flat voice. It adjusts its delivery based on the context of the conversation. It pauses when the listener is speaking. It responds to questions with relevant, natural answers. It sounds warm, professional, and conversational — because it was trained on thousands of hours of real human phone conversations.
        </p>
        <p>
          This is the difference between a technology that annoys your leads and a technology that books appointments for you while you sleep. The voice quality is the foundation of everything, and we take it extremely seriously.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Old way */}
        <div className="bg-background rounded-xl border border-red-200 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
              <X className="w-5 h-5 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-navy">Old Way — Robocall</h3>
          </div>
          <ul className="space-y-4">
            {oldWay.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* New way */}
        <div className="bg-background rounded-xl border border-green-200 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-accent" />
            </div>
            <h3 className="text-xl font-bold text-navy">New Way — BenefitPath Voice AI</h3>
          </div>
          <ul className="space-y-4">
            {newWay.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA callout */}
      <div className="bg-background rounded-xl border border-border shadow-card p-8 text-center max-w-2xl mx-auto">
        <PlayCircle className="w-12 h-12 text-cta-blue mx-auto mb-4" />
        <p className="text-xl font-bold text-navy mb-2">Want to hear a real sample call?</p>
        <p className="text-muted-foreground mb-6">Book a demo and we'll play you an actual call recording so you can hear the quality for yourself.</p>
        <a
          href="#book"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
        >
          Book a Demo
        </a>
      </div>
    </div>
  </section>
);

export default WhatAISoundsLike;
