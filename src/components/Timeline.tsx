import { Calendar } from "lucide-react";
import React from "react";

// ✅ Allow subtitle to be JSX or text
interface TimelineItem {
  title: string;
  subtitle: React.ReactNode;
  duration: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-col md:gap-8`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 bg-accent rounded-full border-4 border-background z-10 shadow-lg" />

            {/* Content Card */}
            <div
              className={`flex-1 ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              } ml-20 md:ml-0`}
            >
              <div
                className={`p-6 bg-card rounded-xl card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  index % 2 === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {item.title}
                </h3>

                {/* ✅ subtitle now supports JSX */}
                <div className="text-secondary font-medium mb-3">
                  {item.subtitle}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
