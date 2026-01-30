import React from "react";
import { MapPin, Phone, Mail, Download, Sparkles } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-grain relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-luxury-gold/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-luxury-darkGold/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="mb-4 mt-20 animate-fade-in">
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-luxury-gold animate-pulse"></div>
            <div className="absolute inset-2 rounded-full border-2 border-luxury-darkGold/50"></div>
            <img
              src="/images/profile.jpeg"
              alt="Subham Gyawali"
              className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full object-cover shadow-2xl shadow-luxury-gold/30"
            />
          </div>
        </div>

        {/* Name & Title */}
        <div className="animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-luxury-gold" size={20} />
            <span className="text-luxury-gold font-medium tracking-wider uppercase text-sm">
              Software Developer
            </span>
            <Sparkles className="text-luxury-gold" size={20} />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-shadow">
            <span className="heading-gradient">Subham Gyawali</span>
          </h1>

          <p className="text-xl md:text-2xl text-luxury-lightGray mb-8 max-w-3xl mx-auto leading-relaxed">
            Hi I am Subham Gyawali, a passionate full-stack developer who loves
            creating clean and responsive websites. I enjoy learning new
            technologies and building user-friendly web applications. My goal is
            to improve my skills every day and create meaningful digital
            experiences.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-slide-up text-luxury-lightGray">
          <div className="flex items-center gap-2">
            <MapPin className="text-luxury-gold" size={18} />
            <span>Butwal, Nepal</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-luxury-gold" size={18} />
            <span>+977-9865374899</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-luxury-gold" size={18} />
            <a
              href="mailto:subhamgyawali2063@gmail.com"
              className="hover:text-luxury-gold transition-colors"
            >
              subhamgyawali2063@gmail.com
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
          <a
            href="/documents/resume.pdf"
            download="Subham_Gyawali_Resume-1.pdf"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <div
            className="glass-card p-6 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="text-4xl font-display font-bold heading-gradient mb-2">
              seeking for job or intern
            </div>
            <div className="text-luxury-lightGray">Years Experience</div>
          </div>
          <div
            className="glass-card p-6 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-4xl font-display font-bold heading-gradient mb-2">
              5★
            </div>
            <div className="text-luxury-lightGray">Developer</div>
          </div>
          <div
            className="glass-card p-6 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-4xl font-display font-bold heading-gradient mb-2">
              100%
            </div>
            <div className="text-luxury-lightGray">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
