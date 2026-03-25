import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-cta-blue flex items-center justify-center">
            <Phone className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-navy">Benefit Path</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#" className="hidden sm:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Login</a>
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-cta-blue px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
