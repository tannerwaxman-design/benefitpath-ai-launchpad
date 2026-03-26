import { Clock, PhoneOff, Zap, Users } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "You Spend Hours Manually Dialing",
    desc: "Every day you sit down, pull up your lead list, and start dialing one number at a time. Most calls go unanswered. The ones that do pick up often aren't interested. By the end of the day, you've spent 4 to 6 hours on the phone and booked maybe one or two appointments. Your time is your most valuable asset, and manual dialing is burning through it with almost nothing to show.",
  },
  {
    icon: PhoneOff,
    title: "You Miss Your Best Leads",
    desc: "While you're in an appointment with one client, three hot leads are sitting in your pipeline unanswered. By the time you call them back, they've already talked to another agent. Speed to lead is everything in Medicare sales, and if you're the one doing all the calling, you will always be slower than an agent who has AI working in the background.",
  },
  {
    icon: Zap,
    title: "Your Competition Is Using AI Already",
    desc: "The top-producing Medicare agents aren't grinding harder — they're working smarter. They've already deployed AI calling agents to handle outreach at scale. While you're making 40 calls a day, they're making 400. While you're leaving voicemails one at a time, their AI is dropping hundreds simultaneously. Every day you wait is another day your competition pulls further ahead.",
  },
  {
    icon: Users,
    title: "Renewal Season Crushes You",
    desc: "AEP and OEP hit like a freight train. Suddenly you have thousands of clients who need to be contacted in a narrow window. There aren't enough hours in the day to reach everyone, and hiring temporary staff takes time you don't have. Leads fall through the cracks, renewals get missed, and you leave money on the table every single year because the volume is simply too much for one person.",
  },
];

const WhyAgentsNeed = () => (
  <section className="bg-background py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-16">
        The Problem Every Medicare Agent Knows Too Well
      </h2>
      <div className="grid sm:grid-cols-2 gap-8 mb-16">
        {painPoints.map((point) => (
          <div key={point.title} className="bg-background rounded-xl border border-border shadow-card p-8">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
              <point.icon className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">{point.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{point.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-xl sm:text-2xl font-bold text-navy max-w-3xl mx-auto">
        Voice AI solves all four of these problems simultaneously.{" "}
        <span className="text-green-highlight">That's why we built this.</span>
      </p>
    </div>
  </section>
);

export default WhyAgentsNeed;
