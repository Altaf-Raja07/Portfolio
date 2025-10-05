import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl" />
            <img
              src={profilePhoto}
              alt="Profile"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-card shadow-2xl"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Altaf Raja
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-secondary font-light">
              Full Stack Developer & Problem Solver
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            An aspiring innovator from IIIT Dharwad, 
            blending creativity and intelligence to craft meaningful digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-3 pt-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-2"
              >
                Get In Touch
              </Button>
            </div>

            {/* View Resume button — opens in new tab */}
            <a
              href="https://drive.google.com/file/d/1RDtoNT-rTmuF9BoTS29VNIMdZXyjLPy_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                View Resume
              </Button>
            </a>

            {/* Scroll Indicator — placed below the resume button (in-flow) */}
            <button
              onClick={() => scrollToSection("#about")}
              className="mt-3 animate-bounce cursor-pointer"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
