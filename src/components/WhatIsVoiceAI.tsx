import { CheckCircle } from "lucide-react";

const steps = [
  "Your AI agent receives the next lead from your contact list and initiates the call automatically.",
  "The phone rings on the lead's end. The AI waits for an answer or voicemail detection.",
  "If a voicemail is detected, the AI drops a pre-recorded compliant message and moves to the next lead.",
  "If a real person answers, the AI greets them by name and introduces itself as calling on behalf of your agency.",
  "The AI asks permission-based questions about their Medicare coverage and upcoming renewal.",
  "If the lead expresses interest, the AI offers to schedule a quick review call or transfers live to you.",
  "If the lead books, the appointment is placed directly on your calendar with all contact details.",
  "The AI logs the full call outcome, transcript, and recording into your dashboard in real time.",
];

const transcript = [
  { speaker: "AI", text: "Hi Margaret, this is Sarah calling from BenefitPath Insurance Services. How are you doing today?" },
  { speaker: "Margaret", text: "I'm doing fine, thank you. Who did you say this was?" },
  { speaker: "AI", text: "I'm Sarah, calling on behalf of your local Medicare advisor. I wanted to reach out because your Medicare Advantage plan is coming up for renewal soon, and there may be some new benefits available in your area for 2026." },
  { speaker: "Margaret", text: "Oh really? I haven't looked at anything new yet." },
  { speaker: "AI", text: "That's exactly why I'm calling! We'd love to schedule a quick 15-minute review to walk you through what's changed. Would Tuesday or Thursday work better for you?" },
  { speaker: "Margaret", text: "Thursday afternoon would be fine." },
  { speaker: "AI", text: "Perfect! I've got you down for Thursday at 2:00 PM. You'll receive a confirmation shortly. Thank you, Margaret!" },
];

const WhatIsVoiceAI = () => (
  <section id="what-is-voice-ai" className="bg-section-gray py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-8">
        What Exactly Is Voice AI?
      </h2>
      <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed mb-20">
        <p>
          Voice AI is an artificial intelligence agent that makes real phone calls on your behalf. Unlike robocalls or pre-recorded messages, a Voice AI agent uses advanced neural text-to-speech technology to sound like a real, natural human being. It speaks with natural cadence, pauses, tone variation, and even filler words — making it nearly indistinguishable from a live caller.
        </p>
        <p>
          Here's how it works: you provide a list of leads — whether that's Medicare prospects, aged leads, or your existing book of business. The AI agent dials each lead automatically, one after another, at a pace you control. When someone picks up, the AI engages them in a real conversation using a script that's been custom-written for your agency and your market.
        </p>
        <p>
          The system is smart enough to detect whether a real person answered or if the call went to voicemail. If it's voicemail, the AI drops a compliant pre-recorded message and moves on. If it's a live person, the AI follows a conversation flow that includes introducing itself, asking permission-based questions about Medicare coverage, handling basic objections, and — when the lead is interested — either transferring the call directly to your phone or booking an appointment on your calendar.
        </p>
        <p>
          Think of it as a tireless, perfectly trained assistant that makes 200+ calls a day, never gets frustrated, never forgets the script, and never takes a day off. It handles the repetitive outreach so you can focus on what you do best: sitting down with qualified prospects and closing business.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Steps */}
        <div>
          <h3 className="text-2xl font-bold text-navy mb-8">How a Single Call Works</h3>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cta-blue flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {i + 1}
                </div>
                <p className="text-muted-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transcript mockup */}
        <div>
          <h3 className="text-2xl font-bold text-navy mb-8">Live Call Transcript</h3>
          <div className="bg-background rounded-xl border border-border shadow-card p-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="w-10 h-10 rounded-full bg-green-accent/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-accent" />
              </div>
              <div>
                <p className="font-semibold text-navy">Margaret J.</p>
                <p className="text-xs text-muted-foreground">Call Connected — 3:42 duration</p>
              </div>
            </div>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {transcript.map((line, i) => (
                <div key={i} className={`flex ${line.speaker === "AI" ? "justify-start" : "justify-end"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    line.speaker === "AI"
                      ? "bg-cta-blue/10 text-navy"
                      : "bg-section-gray text-muted-foreground"
                  }`}>
                    <span className="font-semibold text-xs block mb-1">{line.speaker === "AI" ? "AI Agent" : "Margaret J."}</span>
                    {line.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatIsVoiceAI;
