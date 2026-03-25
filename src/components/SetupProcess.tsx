import { Calendar, Cpu, Database, Shield, Headphones, Rocket } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book Your Onboarding Call",
    desc: "We start with a 30-minute strategy session where we review your Medicare business, your lead sources, your current follow-up process, and your goals. We learn exactly how you work so we can build an AI agent that fits seamlessly into your workflow. This call is free and there's no obligation.",
  },
  {
    icon: Cpu,
    title: "We Build Your AI Agent",
    desc: "Our team selects or clones a professional voice, writes your custom call script with Medicare-specific language and objection handling, and configures every conversation flow. We build branching logic for live transfers, voicemail drops, and calendar bookings — all tailored to how you want calls handled.",
  },
  {
    icon: Database,
    title: "We Connect Your Leads",
    desc: "You provide your contact list however you have it — CSV export, CRM integration, or even a spreadsheet. We import and format your leads, set up dialing sequences, configure retry logic, and make sure everything is ready to go before a single call is made.",
  },
  {
    icon: Shield,
    title: "Compliance Review",
    desc: "Before anything goes live, our compliance team reviews every script, every voicemail message, and every configuration setting to ensure full TCPA compliance and adherence to Medicare marketing guidelines. We verify consent records, opt-out mechanisms, and disclosure language. Nothing launches without passing this review.",
  },
  {
    icon: Headphones,
    title: "Test Calls & Approval",
    desc: "We run a series of test calls so you can hear exactly how your AI agent sounds. You listen to simulated calls with live answers and voicemail drops. You provide feedback, we make adjustments, and nothing goes to production until you give final approval. You are always in control.",
  },
  {
    icon: Rocket,
    title: "Go Live",
    desc: "Once approved, we flip the switch. Your AI agent starts dialing leads from your list according to the schedule you set. You watch results come in on your real-time dashboard — calls made, connections, voicemails dropped, appointments booked. From this moment on, your AI is working for you around the clock.",
  },
];

const SetupProcess = () => (
  <section className="bg-background py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
          Your Setup Process — Start to Finish
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From the moment you book a call to the moment your AI starts dialing, here is exactly what happens.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-0">
        {steps.map((step, i) => (
          <div key={step.title} className="relative flex gap-6 pb-12 last:pb-0">
            {/* Timeline line */}
            {i < steps.length - 1 && (
              <div className="absolute left-6 top-14 w-0.5 h-full bg-border -translate-x-1/2" />
            )}
            {/* Number circle */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cta-blue flex items-center justify-center text-primary-foreground font-bold text-lg z-10">
              {i + 1}
            </div>
            <div className="pt-1">
              <div className="flex items-center gap-3 mb-2">
                <step.icon className="w-5 h-5 text-cta-blue" />
                <h3 className="text-xl font-bold text-navy">{step.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SetupProcess;
