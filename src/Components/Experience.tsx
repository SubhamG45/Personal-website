import React from "react";
import { Building2, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import hackathonCertificate from "/images/certificate.jpeg"; 

const CodingJourney: React.FC = () => {
  const journey = [
    {
      title: "JavaScript & React Learner",
      company: "Self-Learning Projects",
      location: "Butwal, Nepal",
      period: "June 2025 – Present",
      type: "Web Development",
      responsibilities: [
        "Mastered JavaScript fundamentals, ES6 features, and asynchronous programming",
        "Built multiple projects using React including portfolio websites and small web apps",
        "Implemented responsive designs using Tailwind CSS and modern UI frameworks",
        "Learned state management, hooks, and component-based architecture",
      ],
    },
    {
      title: "Node.js & Backend Developer",
      company: "Self-Learning & Practice",
      location: "Butwal, Nepal",
      period: "July 2025 – Present",
      type: "Backend Development",
      responsibilities: [
        "Developed RESTful APIs using Node.js and Express.js",
        "Integrated MongoDB for database management",
        "Practiced authentication, authorization, and security best practices",
        "Built full-stack applications connecting frontend and backend seamlessly",
      ],
    },
    {
      title: "Hackathon Participant",
      company: "Local Tech Hackathon",
      location: "Butwal, Nepal",
      period: "January 2026",
      type: "Competition",
      responsibilities: [
        "Participated in a 24-hour coding hackathon",
        "Collaborated with a team to develop a functional web application",
        "Learned agile teamwork and rapid prototyping skills",
        "Received recognition and a certificate for outstanding performance",
      ],
    },
    {
      title: "Database & SQL Enthusiast",
      company: "Self-Learning",
      location: "Butwal, Nepal",
      period: "April 2025 – Present",
      type: "Database Management",
      responsibilities: [
        "Learned SQL and MongoDB to manage structured and unstructured data",
        "Built practice databases for CRUD operations",
        "Understood data modeling, queries, and optimization techniques",
        "Integrated databases into personal projects",
      ],
    },
  ];

  return (
    <section id="coding-journey" className="section-padding bg-luxury-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold heading-gradient mb-4 gold-line inline-block pb-4">
            Coding Journey
          </h2>
          <p className="text-luxury-lightGray text-lg max-w-2xl mx-auto mt-6">
            A journey through my coding and development milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-luxury-gold via-luxury-darkGold to-transparent transform md:-translate-x-1/2"></div>

          {/* Journey Cards */}
          <div className="space-y-12">
            {journey.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-luxury-gold rounded-full transform md:-translate-x-1/2 mt-8 z-10 ring-4 ring-luxury-charcoal"></div>

                {/* Content */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""} ml-8 md:ml-0`}
                >
                  <div className="glass-card p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div className={index % 2 === 0 ? "md:order-2" : ""}>
                        <h3 className="text-2xl font-display font-bold text-luxury-cream mb-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-luxury-gold font-semibold mb-2">
                          <Building2 size={18} />
                          <span>{item.company}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-luxury-gold/20 text-luxury-gold rounded-full text-sm font-medium">
                        {item.type}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4 text-luxury-lightGray">
                      <div className="flex items-center gap-2">
                        <MapPin
                          size={16}
                          className="text-luxury-gold flex-shrink-0"
                        />
                        <span className="text-sm">{item.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar
                          size={16}
                          className="text-luxury-gold flex-shrink-0"
                        />
                        <span className="text-sm">{item.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {item.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-luxury-lightGray"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-luxury-gold flex-shrink-0 mt-0.5"
                          />
                          <span className="text-sm leading-relaxed">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Highlight */}
        <div className="mt-16 glass-card p-8 border-l-4 border-luxury-gold text-center">
          <h3 className="text-2xl font-display font-semibold mb-4 heading-gradient">
            Hackathon Certificate
          </h3>
          <p className="text-luxury-lightGray mb-4 leading-relaxed">
            Proudly received this certificate for participating in a local tech hackathon,
            showcasing teamwork, rapid prototyping, and coding skills.
          </p>
          <img
            src={hackathonCertificate}
            alt="Hackathon Certificate"
            className="mx-auto max-w-xs rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CodingJourney;
