import React from "react";
import { GraduationCap, BookOpen, Award, Trophy } from "lucide-react";

const Education: React.FC = () => {
  const activities = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description:
        "Achieved top grades in core CSIT subjects including programming, web development, and database systems.",
    },
    {
      icon: Trophy,
      title: "Software Projects & Hackathons",
      description:
        "Participated in multiple coding competitions, hackathons, and team projects, building real-world web and software applications.",
    },
    {
      icon: Award,
      title: "Community & Tech Contribution",
      description:
        "Active in open-source contributions, coding workshops, and mentoring juniors in programming and web development.",
    },
  ];

  const interests = [
    "Web Development & Building Projects",
    "Learning New Programming Languages & Frameworks",
    "Problem Solving & Algorithm Challenges",
    "Tech Blogging & Documentation",
    "Fitness & Mindfulness for Focus",
    "Team Collaboration in Coding Projects",
  ];

  return (
    <section id="education" className="section-padding bg-luxury-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold heading-gradient mb-4 gold-line inline-block pb-4">
            Education & Development
          </h2>
          <p className="text-luxury-lightGray text-lg max-w-2xl mx-auto mt-6">
            Academic foundation and continuous personal growth in computer science and software development
          </p>
        </div>

        {/* Main Education */}
        <div className="glass-card p-8 md:p-12 mb-12">
          <div className="flex items-start gap-6">
            <div className="hidden md:block">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-darkGold flex items-center justify-center">
                <GraduationCap size={40} className="text-luxury-charcoal" />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-3xl font-display font-bold text-luxury-cream mb-2">
                  Bachelor of Science in Computer Science and IT (BSc CSIT)
                </h3>
                <div className="text-luxury-gold font-semibold text-lg mb-2">
                  Tribhuvan University
                </div>
                <div className="text-luxury-lightGray">
                  Multiple Campus, Bhairahawa, Nepal
                </div>
                <div className="text-luxury-lightGray mt-2">2025 – Present</div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-luxury-lightGray leading-relaxed">
                  Comprehensive computer science education covering programming, web development, software engineering, database management, networking, and algorithms. Gained strong theoretical foundation combined with hands-on coding projects and practical software development experience. Developed proficiency in JavaScript, React, Node.js, databases, and collaborative software development practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Extra-curricular Activities */}
        <div className="mb-12">
          <h3 className="text-3xl font-display font-semibold mb-8 text-center heading-gradient">
            Professional Activities & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="text-luxury-gold mb-4" size={36} />
                  <h4 className="text-xl font-display font-semibold mb-3 text-luxury-cream">
                    {activity.title}
                  </h4>
                  <p className="text-luxury-lightGray text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-display font-semibold mb-6 heading-gradient">
            Hobbies & Interests
          </h3>
          <p className="text-luxury-lightGray mb-6 leading-relaxed">
            Beyond my professional pursuits, I maintain a balanced lifestyle that contributes to my effectiveness as a software developer:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 flex-shrink-0"></div>
                <span className="text-luxury-lightGray">{interest}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote/Philosophy */}
        <div className="mt-12 text-center">
          <blockquote className="text-2xl md:text-3xl font-display italic text-luxury-lightGray max-w-4xl mx-auto">
            "Coding is not just writing programs; it’s creating solutions that make life easier and more efficient."
          </blockquote>
          <p className="text-luxury-gold mt-4">— My Developer Thought</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
