import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is this legal? Can I really use AI to make calls to Medicare leads?",
    a: "Yes, absolutely. Our system is fully compliant with the Telephone Consumer Protection Act (TCPA) and CMS Medicare marketing guidelines. We only call leads for whom you have documented prior express consent. Every call includes proper disclosures, and opt-out requests are honored instantly. We built this specifically for the insurance industry with compliance as the foundation — not an afterthought.",
  },
  {
    q: "Will leads know they're talking to an AI?",
    a: "Our AI uses advanced neural text-to-speech that sounds remarkably natural — with breath pauses, tone variation, and conversational cadence. Most leads won't notice a difference. However, we always include proper disclosures at the beginning of each call as required by law. Transparency is part of our compliance framework.",
  },
  {
    q: "What if a lead wants to talk to a real person right away?",
    a: "The AI is configured to handle that request seamlessly. If a lead says they want to speak with someone, the AI can immediately transfer the call to your phone in real time. You pick up a warm, qualified prospect who's already been greeted and engaged. It's like having a receptionist who never misses a call.",
  },
  {
    q: "How long does the setup process take?",
    a: "Most setups are completed within 48 hours of your onboarding call. That includes voice selection, script writing, lead list integration, compliance review, and test calls. Complex configurations with custom CRM integrations may take an additional day or two, but we move fast because we know your leads aren't waiting.",
  },
  {
    q: "Do I need any technical skills to use this?",
    a: "None whatsoever. This is a done-for-you service. We handle every technical aspect — voice configuration, script programming, lead importing, compliance setup, and dashboard access. You'll receive a simple login to your dashboard where you can see results, but you never need to touch any settings unless you want to.",
  },
  {
    q: "What types of leads does this work with?",
    a: "Voice AI works with any lead list you have: aged leads, fresh leads, T65 lists, AEP/OEP renewal lists, referral leads, or your existing book of business. As long as you have proper consent to contact them, the AI can call them. We support CSV uploads, direct CRM connections, and manual list imports.",
  },
  {
    q: "Can I change the call script after setup?",
    a: "Yes. You can request script changes at any time, and our team will update the conversation flow for you. Whether you want to adjust the opening, add a new objection response, or change your call-to-action, we handle it. Most script updates are completed within 24 hours.",
  },
  {
    q: "What happens if a lead says 'remove me from your list'?",
    a: "The AI recognizes opt-out language immediately and responds professionally. It confirms the request, apologizes for any inconvenience, and ends the call politely. The lead is automatically added to your suppression list so they are never called again. This happens in real time with no manual intervention needed.",
  },
  {
    q: "How do I see the results of my campaigns?",
    a: "You get access to a real-time dashboard that shows every call made, every outcome (connected, voicemail, no answer), every transcript, and every booked appointment. You can filter by date, status, or lead. You'll also receive daily summary emails so you always know exactly what your AI accomplished.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on your call volume and configuration needs. We offer flexible plans that scale with your business. Book a free setup call and we'll give you a transparent quote based on your specific situation — no hidden fees, no surprises. Most agents see a positive ROI within the first two weeks.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. We don't lock you into lengthy contracts. Our service runs month-to-month because we believe the results should speak for themselves. If you're not seeing value, you can cancel anytime. That said, our retention rate is extremely high because agents consistently see measurable results from day one.",
  },
  {
    q: "What makes this different from a dialing service or power dialer?",
    a: "A power dialer still requires you to be on the phone — it just dials faster. You still have to talk to every person who picks up, leave every voicemail manually, and handle every rejection yourself. Voice AI does all of that for you. It makes the calls, has the conversations, drops the voicemails, handles objections, and books appointments — all without you being on the line. It's not a faster way to do the same thing. It's a completely different approach.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-16">
          Everything You're Wondering About Voice AI
        </h2>
        <div className="max-w-3xl mx-auto divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 py-6 text-left"
              >
                <span className="text-lg font-semibold text-navy pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 mt-1 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <p className="pb-6 text-muted-foreground leading-relaxed -mt-2">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
