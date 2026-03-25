import { Mic, FileText, Upload, Voicemail, PhoneForwarded, CalendarCheck, RotateCcw, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Custom AI Voice Agent",
    desc: "We clone or select a professional voice that sounds completely natural on phone calls. Your AI agent will greet leads by name with warmth, clarity, and confidence — no robotic monotone, no awkward pauses.",
  },
  {
    icon: FileText,
    title: "Call Script & Conversation Flow",
    desc: "Our team writes a fully customized Medicare-specific call script tailored to your market, products, and goals. Objection handling, permission-based questions, and natural conversation branching are all built in from day one.",
  },
  {
    icon: Upload,
    title: "Lead List Integration",
    desc: "Upload a CSV, connect your CRM, or hand us your contact list — we handle the integration. Your AI will know exactly who to call, in what order, and how many times to retry based on your preferences.",
  },
  {
    icon: Voicemail,
    title: "Voicemail Drop Setup",
    desc: "We record a compliant, professional voicemail message and configure your AI to drop it automatically whenever a call goes to voicemail. Every message meets TCPA and Medicare marketing guidelines.",
  },
  {
    icon: PhoneForwarded,
    title: "Live Transfer Logic",
    desc: "When a lead says they're interested, the AI doesn't just hang up and hope for the best. It transfers the call directly to your phone in real time so you can pick up a warm, qualified prospect instantly.",
  },
  {
    icon: CalendarCheck,
    title: "Calendar Booking Integration",
    desc: "If you prefer booked appointments over live transfers, the AI can schedule directly onto your Google Calendar, Outlook, or Calendly. The lead gets a confirmation, and you see it on your schedule instantly.",
  },
  {
    icon: RotateCcw,
    title: "Retry & Follow-Up Sequences",
    desc: "Leads who don't answer on the first attempt aren't forgotten. We configure intelligent retry sequences that call back at optimal times — different days, different hours — to maximize your connection rate.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    desc: "You get a live dashboard showing every call made, every outcome, every transcript, and every booking. Filter by date, status, or lead. Know exactly what your AI is doing at all times with full transparency.",
  },
];

const WhatWeBuild = () => (
  <section className="bg-section-gray py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
          Everything We Build For You — Done For You, Not DIY
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          You don't touch a single setting. Our team handles the entire setup from day one.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="bg-background rounded-xl border border-border shadow-card p-6 hover:shadow-card-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-cta-blue/10 flex items-center justify-center mb-5">
              <f.icon className="w-6 h-6 text-cta-blue" />
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeBuild;
