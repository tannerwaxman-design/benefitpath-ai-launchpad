import { Shield, FileCheck, UserX, Phone } from "lucide-react";

const badges = [
  { icon: Shield, label: "TCPA Compliant" },
  { icon: FileCheck, label: "Medicare Marketing Guidelines" },
  { icon: UserX, label: "Instant Opt-Out Honored" },
  { icon: Phone, label: "No Spoofed Numbers" },
];

const ComplianceSection = () => (
  <section className="bg-background py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-8">
        100% Compliant. Built for the Medicare Market.
      </h2>
      <div className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed space-y-6 mb-16">
        <p>
          Compliance isn't an afterthought for us — it's the foundation. Every aspect of BenefitPath Voice AI has been designed from the ground up to comply with the Telephone Consumer Protection Act (TCPA) and CMS Medicare marketing guidelines. We know that in the insurance industry, one compliance mistake can cost you your license, your reputation, and your livelihood. That's why we take it so seriously.
        </p>
        <p>
          Every call made by your AI agent includes proper disclosures at the beginning of the conversation. The AI identifies itself, states the purpose of the call, and gives the lead a clear opportunity to opt out at any time. If a lead says "take me off your list" or anything similar, the system immediately flags them, stops the call, and adds them to your suppression list — automatically, with no manual intervention required.
        </p>
        <p>
          We only call leads for whom you have documented consent. Our system supports prior express written consent records, and we provide guidance on how to ensure your lead sources meet the legal requirements. We never use spoofed caller IDs — your calls display a real, registered phone number that leads can call back.
        </p>
        <p>
          Our compliance team reviews every script, every voicemail drop, and every conversation flow before your AI agent goes live. We stay current with regulatory changes so you don't have to. When CMS or the FCC updates their guidelines, we update your system accordingly. This isn't a generic tech product repurposed for insurance — this was built specifically for Medicare agents by people who understand the regulatory landscape you operate in.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map((badge) => (
          <div key={badge.label} className="bg-section-gray rounded-xl border border-border p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-green-accent/10 flex items-center justify-center mx-auto mb-4">
              <badge.icon className="w-7 h-7 text-green-accent" />
            </div>
            <p className="text-sm font-bold text-navy">{badge.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComplianceSection;
