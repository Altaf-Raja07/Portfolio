import { Code2, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Development",
      description: "Expertise in modern web technologies and frameworks",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful and intuitive user interfaces",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-center md:text-left">
             I’m Altaf Raja, a budding full-stack developer and AI enthusiast. I am specializing in
              frontend and backend development, working with technologies like React, Node.js, 
              Python, and TensorFlow to build efficient, scalable, and visually engaging applications.
              I enjoy crafting solutions that are not only functional but also user-friendly, whether
              it’s a responsive web interface or an intelligent AI-powered system.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-center md:text-left">
              My approach combines technical expertise with creative problem-solving, ensuring that 
              every project I work on is not just functional, but also intuitive and engaging. I believe 
              in writing clean, maintainable code and building solutions that scale.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="group p-6 bg-card rounded-xl card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <skill.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
