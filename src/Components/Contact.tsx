import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, FileText } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:gyawaliprakash4@gmail.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "subhamgyawali2063@gmail.com",
      href: "mailto:subhamgyawali2063@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone (Nepal)",
      value: "+977-9865374899",
      href: "tel:+9779865374899",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Butwal, Nepal",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-luxury-slate/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold heading-gradient mb-4 gold-line inline-block pb-4">
            Get In Touch
          </h2>
          <p className="text-luxury-lightGray text-lg max-w-2xl mx-auto mt-6">
            Interested in working together? Let's connect and discuss
            opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-6 text-luxury-cream">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-darkGold flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-luxury-charcoal" />
                    </div>
                    <div>
                      <div className="text-luxury-lightGray text-sm mb-1">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-luxury-cream font-semibold hover:text-luxury-gold transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-luxury-cream font-semibold">
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-6">
              <h4 className="text-lg font-display font-semibold mb-4 text-luxury-cream">
                Quick Actions
              </h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <FileText
                    className="text-luxury-gold group-hover:scale-110 transition-transform"
                    size={20}
                  />
                  <span className="text-luxury-lightGray group-hover:text-luxury-gold transition-colors">
                    Download Resume 
                  </span>
                </a>
                <a
                  href="https://linkedin.com/in/subhamgyawali45"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
                  target="_blank"
                >
                  <FaLinkedin
                    className="fill-luxury-gold group-hover:scale-110 transition-transform"
                    size={20}
                  />
                  <span className="text-luxury-lightGray group-hover:text-luxury-gold transition-colors">
                    Connect on LinkedIn
                  </span>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-6 p-6 bg-gradient-to-r from-luxury-gold/10 to-luxury-darkGold/10 border border-luxury-gold/20 rounded-lg">
              <h4 className="text-luxury-gold font-semibold mb-2">
                Current Status
              </h4>
              <p className="text-luxury-lightGray text-sm">
                Successfully completed project at Billora Tech.
                
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-6 text-luxury-cream">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-luxury-lightGray mb-2 font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-luxury-charcoal/50 border border-white/10 rounded-lg focus:border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 text-luxury-cream transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-luxury-lightGray mb-2 font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-luxury-charcoal/50 border border-white/10 rounded-lg focus:border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 text-luxury-cream transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-luxury-lightGray mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-luxury-charcoal/50 border border-white/10 rounded-lg focus:border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 text-luxury-cream transition-all"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-luxury-lightGray mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-luxury-charcoal/50 border border-white/10 rounded-lg focus:border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 text-luxury-cream transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
