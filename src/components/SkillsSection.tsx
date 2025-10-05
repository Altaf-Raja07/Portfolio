import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SkillsInfo } from "../constants/SkillsInfo";

interface Skill {
  name: string;
  logo: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="section-padding bg-background text-foreground font-sans"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        <motion.div
          className="w-16 h-1 bg-accent mx-auto mt-2 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />
        <p className="text-muted-foreground mt-3 text-base sm:text-lg max-w-2xl mx-auto">
          A collection of technologies, tools, and languages I’ve learned and
          applied in real-world projects.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm w-full sm:w-[45%] md:w-[30%] card-shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6 text-center">
              {category.title}
            </h3>

            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={500}>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-muted border border-border rounded-lg py-3 px-2 hover:shadow-md hover:shadow-accent/30 transition duration-300"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-2">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-foreground text-sm sm:text-base font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
