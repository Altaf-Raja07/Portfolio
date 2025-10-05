import Timeline from "./Timeline";

const Experience = () => {
  const experiences = [
    {
      title: "Artificial Intelligence Intern",
      subtitle: "Edunet Foundation | Shell | AICTE Virtual Internship",
      duration: "June 2025 – July 2025",
      description:
        "Completed a 4-week AI internship where I developed a Garbage Classification system using Deep Learning models like VGG16 and ResNet50. Applied transfer learning, data augmentation, and model optimization to achieve accurate waste classification. Strengthened understanding of AI, ML, and real-world sustainability applications.",
    },
    {
      title: "Frontend Development Intern",
      subtitle: "Edunet Foundation | IBM SkillsBuild Program",
      duration: "September 2025 – Present",
      description:
        "Currently working as a Frontend Development Intern under IBM SkillsBuild at Edunet Foundation. Contributing to real-world web projects, enhancing responsive design, and improving user experience using React, Tailwind CSS, and JavaScript. Collaborating with mentors to build scalable and interactive interfaces.",
    },
    {
      title: "Open Source Contributor",
      subtitle: "GitHub Community Projects",
      duration: "2024 – Present",
      description:
        "Contributed to open-source repositories focused on web and AI solutions. Collaborated with developers globally, learning Git workflows, version control, and best coding practices while improving existing codebases and documentation.",
    },
    {
      title: "Project Developer & Team Lead",
      subtitle: "IIIT Dharwad | Academic Project",
      duration: "2024",
      description:
        "Led the development of a Facial Recognition Attendance System using Python, OpenCV, and YOLO. Integrated face detection, CSV-based attendance storage, and a simple web interface. Improved team coordination and end-to-end project deployment skills.",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-card">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Experience
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and hands-on learning experiences
            </p>
          </div>

          {/* Timeline */}
          <Timeline items={experiences} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
