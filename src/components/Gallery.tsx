import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Agriculture connect",
    description: "A agri connect website using React.js",
    link: "https://coffee-coders-hmvb.vercel.app/",
    tech: "React.js",
  },
  {
    title: "E-commerce App",
    description: " e-commerce application with React.js.",
    link:"https://minimart-subhamgyawali.vercel.app",
    tech: "React.js",
  },
    {
    title: "tic-tac-toe Game",
    description: "TicTacToe using simple html , css , js",
    link:"https://subhamtictactoe.vercel.app/",
    tech: "Html, CSS, JS",
  },
 
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-luxury-slate/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold heading-gradient mb-4 gold-line inline-block pb-4">
            My Projects
          </h2>
          <p className="text-luxury-lightGray text-lg max-w-2xl mx-auto mt-6">
            A showcase of some of my most interesting and impactful projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-luxury-charcoal/30 backdrop-blur-sm border border-luxury-gold/20 rounded-xl p-6 flex flex-col justify-between hover:scale-105 transform transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-luxury-cream mb-2">
                  {project.title}
                </h3>
                <p className="text-luxury-lightGray mb-4">{project.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-luxury-gold italic">{project.tech}</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-luxury-lightGray hover:text-luxury-gold transition-colors flex items-center gap-1"
                >
                  View <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
