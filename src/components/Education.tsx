import Timeline from "./Timeline";

const Education = () => {
  const education = [
    {
      title: "B.Tech",
      subtitle: "Indian Institute of Information Technology, Dharwad",
      duration: "July 2023 – July 2027",
      grade: "CGPA: 7.64 (Current)",
      description:
        "Currently pursuing a B.Tech in Computer Science and Engineering at IIIT Dharwad. Building a strong foundation in programming, algorithms, and modern technologies like Artificial Intelligence, Machine Learning, and Web Development. Passionate about using technology to solve real-world problems and create meaningful impact.",
    },
    {
      title: "Senior Secondary Education / Class XII",
      subtitle: "River Valley School, Anand Vihar, Begusarai, Bihar",
      duration: "2020 – 2022",
      grade: "Percentage: 87%",
      description:
        "Completed Class 12th in the Science stream with a focus on Physics, Chemistry, and Mathematics. Strengthened analytical and problem-solving abilities, which became the stepping stones for my engineering journey.",
    },
    {
      title: "Secondary Education / Class X",
      subtitle:
        "St. Paul Senior Secondary School, Harpur Ailouth, Samastipur, Bihar",
      duration: "2016 – 2020",
      grade: "Percentage: 86%",
      description:
        "Completed Class 10th, developing a solid academic foundation and an early curiosity for technology. My time at St. Paul helped nurture discipline, creativity, and a lifelong love for learning.",
    },
  ];

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Education
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic background and continuous learning journey
            </p>
          </div>

          {/* Timeline */}
          <Timeline
            items={education.map((edu) => ({
              title: edu.title,
              subtitle: (
                <div>
                  <p className="font-semibold">{edu.subtitle}</p>
                  <p className="text-accent font-medium mt-1">{edu.grade}</p>
                </div>
              ),
              duration: edu.duration,
              description: edu.description,
            }))}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
