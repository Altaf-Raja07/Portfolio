import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommerce from "../assets/E-commerce.jpg";
import FitnessTracker from "@/assets/FitnessTracker.png";
import TaskApp from "@/assets/TaskApp.webp";
import weatherDashboard from "@/assets/WeatherDashboard.jpg";
import GarbageClassification from "@/assets/GarbageClassification.png";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: ecommerce,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and analytics dashboard.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: TaskApp,
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and weather alerts. Clean and intuitive interface.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      github: "#",
      demo: "#",
      image: weatherDashboard,
    },
    {
      title: "Garbage Classification",
      description:
        "An AI-powered web application that classifies uploaded images of garbage into categories like cardboard, glass, metal, paper, plastic, and trash. Built using Python, TensorFlow, and a pre-trained deep learning model for accurate predictions.",
      technologies: ["Python", "TensorFlow", "React", "Flask"],
      github: "https://github.com/Altaf-Raja07/garbage_classifiacation1",
      demo: "#",
      image: GarbageClassification,
    },
    {
      title: "Fitness Tracker",
      description:
        "Mobile-responsive fitness tracking app with workout plans, progress tracking, and nutrition logging features.",
      technologies: ["React Native", "Node.js", "MySQL"],
      github: "#",
      demo: "#",
      image: FitnessTracker,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-background rounded-xl overflow-hidden card-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div
                  className="h-48 relative overflow-hidden bg-center bg-cover"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    {/* GitHub Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex-1 ${
                        project.github === "#"
                          ? "opacity-60 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={project.github === "#"}
                      asChild
                    >
                      <a
                        href={
                          project.github !== "#" ? project.github : undefined
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>

                    {/* Live Demo Button */}
                    <Button
                      size="sm"
                      className={`flex-1 bg-accent hover:bg-accent/90 ${
                        project.demo === "#"
                          ? "opacity-60 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={project.demo === "#"}
                      asChild
                    >
                      <a
                        href={project.demo !== "#" ? project.demo : undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
