import benefitPathIcon from "@/assets/benefit-path-icon.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <img src={benefitPathIcon} alt="Benefit Path" className="w-7 h-auto" />
          <span className="text-xl font-bold text-foreground">Benefit Path</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#" className="hidden sm:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Login</a>
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
