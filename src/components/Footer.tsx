import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container-custom px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Altaf Raja. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Built by</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>Altaf Raja</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
