import React from "react";
import { Award, Target, Heart, TrendingUp } from "lucide-react";

const About: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to maintaining Forbes and LQA standards",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail in every task",
    },
    {
      icon: Heart,
      title: "Service",
      description: "Guest satisfaction is my top priority",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuously learning and adapting",
    },
  ];

  return (
    <section id="about" className="section-padding bg-luxury-slate/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold heading-gradient mb-4 gold-line inline-block pb-4">
            About Me
          </h2>
          <p className="text-luxury-lightGray text-lg max-w-2xl mx-auto mt-6">
            I have experience working with core web technologies such as HTML and CSS for building clean and responsive web pages. I use JavaScript to create interactive and dynamic features on websites. I actively work with React.js to build modern, fast, and reusable user interface components. I also have  knowledge of Node.js for backend development and MongoDB for database management. I use Git and GitHub to manage my projects and code efficiently and I am always learning new technologies to improve my skills as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
  {highlights.map((item, index) => {
    const Icon = item.icon;
    return (
      <div
        key={index}
        className="glass-card p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
      >
        <Icon className="text-luxury-gold mb-4" size={32} />
        <h3 className="text-xl font-display font-semibold mb-2 text-luxury-cream">
          {item.title}
        </h3>
        <p className="text-luxury-lightGray text-sm">
          {item.description}
        </p>
      </div>
    );
  })}
</div>
</div>

{/* Additional Info */}
<div className="mt-16 glass-card p-8">
  <h3 className="text-2xl font-display font-semibold mb-6 heading-gradient">
    Professional Philosophy
  </h3>
  <div className="grid md:grid-cols-3 gap-8">
    <div>
      <h4 className="text-luxury-gold font-semibold mb-2">
        Clean Code Principle
      </h4>
      <p className="text-luxury-lightGray text-sm">
        Writing readable, maintainable, and scalable code with proper structure
        and best development practices
      </p>
    </div>
    <div>
      <h4 className="text-luxury-gold font-semibold mb-2">
        Problem Solving Mindset
      </h4>
      <p className="text-luxury-lightGray text-sm">
        Experience debugging real-world applications and building efficient
        solutions using modern web technologies
      </p>
    </div>
    <div>
      <h4 className="text-luxury-gold font-semibold mb-2">
        Continuous Learning
      </h4>
      <p className="text-luxury-lightGray text-sm">
        Actively learning new frameworks, tools, and software development
        concepts to stay updated in the tech industry
      </p>
    </div>
  </div>
</div>

        </div>
      
    </section>
  );
};

export default About;
