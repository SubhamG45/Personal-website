import React from "react";
import {
  Sparkles,
  Users,
  Clock,
  Lightbulb,
  Shield,
  Laptop,
  Languages,
  Heart,
} from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Sparkles,
      skills: [
        { name: "HTML, CSS & JavaScript", level: 95 },
        { name: "React & Component Architecture", level: 90 },
        { name: "Responsive Design & UI/UX", level: 88 },
        { name: "Version Control (Git/GitHub)", level: 85 },
      ],
    },
    {
      category: "Backend Development",
      icon: Heart,
      skills: [
        { name: "Node.js & Express.js", level: 92 },
        { name: "Database Management (MongoDB/MySQL)", level: 90 },
        { name: "API Development & Integration", level: 95 },
        { name: "Authentication & Security Practices", level: 88 },
      ],
    },
    {
      category: "Professional Skills",
      icon: Users,
      skills: [
        { name: "Team Collaboration & Code Reviews", level: 90 },
        { name: "Agile & Scrum Methodologies", level: 85 },
        { name: "Time Management & Productivity", level: 92 },
        { name: "Problem Solving & Debugging", level: 88 },
      ],
    },
    {
      category: "Technical Tools",
      icon: Laptop,
      skills: [
        { name: "VS Code & Developer Tools", level: 80 },
        { name: "Postman & API Testing", level: 75 },
        { name: "CI/CD Pipelines & Deployment", level: 85 },
        { name: "Cloud Platforms (AWS, Vercel)", level: 82 },
      ],
    },
  ];

  const certifications = [
    {
      icon: Shield,
      title: "Web Security & Best Practices",
      description:
        "Knowledge of secure coding, HTTPS, CORS, and other security protocols",
    },
    {
      icon: Lightbulb,
      title: "Clean Code & Architecture",
      description:
        "Experienced in writing maintainable, scalable, and efficient code",
    },
    {
      icon: Clock,
      title: "Agile & Scrum Certified",
      description:
        "Trained in modern software development workflows and project management",
    },
    {
      icon: Languages,
      title: "Multilingual Developer",
      description: "Fluent in English, with experience in documentation and coding standards",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-luxury-slate/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold heading-gradient mb-4 gold-line inline-block pb-4">
            Skills & Expertise
          </h2>
          <p className="text-luxury-lightGray text-lg max-w-2xl mx-auto mt-6">
            Comprehensive web and software development skills built through real projects and continuous learning
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="glass-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="text-luxury-gold" size={28} />
                  <h3 className="text-2xl font-display font-semibold text-luxury-cream">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-luxury-lightGray font-medium">
                          {skill.name}
                        </span>
                        <span className="text-luxury-gold font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-luxury-charcoal rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-luxury-gold to-luxury-darkGold transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications & Special Skills */}
        <div>
          <h3 className="text-3xl font-display font-semibold mb-8 text-center heading-gradient">
            Certifications & Special Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="text-luxury-gold mx-auto mb-4" size={40} />
                  <h4 className="text-lg font-display font-semibold mb-2 text-luxury-cream">
                    {cert.title}
                  </h4>
                  <p className="text-luxury-lightGray text-sm">
                    {cert.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Training */}
        <div className="mt-16 glass-card p-8">
          <h3 className="text-2xl font-display font-semibold mb-6 heading-gradient">
            Professional Development
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-luxury-gold font-semibold mb-2 flex items-center gap-2">
                <Sparkles size={18} />
                Web Development Bootcamp
              </h4>
              <p className="text-luxury-lightGray text-sm">
                Completed intensive full-stack development training covering HTML, CSS, JavaScript, React, Node.js, and database integration through real-world projects
              </p>
            </div>
            <div>
              <h4 className="text-luxury-gold font-semibold mb-2 flex items-center gap-2">
                <Users size={18} />
                Software Engineering Workshop
              </h4>
              <p className="text-luxury-lightGray text-sm">
                Participated in team-based software projects, learning agile practices, version control, and collaboration for building efficient web applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
