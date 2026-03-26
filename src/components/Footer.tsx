import benefitPathIcon from "@/assets/benefit-path-icon.svg";

const Footer = () => (
  <footer className="bg-background border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <a href="#" className="flex items-center gap-2.5">
          <img src={benefitPathIcon} alt="Benefit Path" className="w-6 h-auto" />
          <span className="text-lg font-bold text-foreground">Benefit Path</span>
        </a>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Benefit Path</p>
      </div>
      <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
        BenefitPath is not a government agency and is not affiliated with Medicare or the Centers for Medicare & Medicaid Services (CMS). BenefitPath provides AI-powered outreach tools for licensed insurance agents and agencies. All AI calling services are designed to comply with TCPA regulations and CMS Medicare marketing guidelines. Results may vary. By using our services you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  </footer>
);

export default Footer;
