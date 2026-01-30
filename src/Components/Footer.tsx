import React from "react";
import { Heart, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-luxury-charcoal border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-luxury-lightGray flex items-center gap-2 justify-center md:justify-start flex-wrap">
              <span>
                © {new Date().getFullYear()} Subham Gyawali. All rights
                reserved.
              </span>
            </p>
            <p className="text-luxury-lightGray/60 text-sm mt-2 flex items-center gap-2 justify-center md:justify-start">
              Built with{" "}
              <Heart
                className="text-luxury-gold"
                size={14}
                fill="currentColor"
              />{" "}
              for hospitality excellence by{" "}
              <a
                href="https://billoratech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-gold hover:text-luxury-darkGold transition-colors font-semibold underline decoration-luxury-gold/30 hover:decoration-luxury-gold"
              >
                Billora
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-luxury-lightGray hover:text-luxury-gold transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-luxury-lightGray hover:text-luxury-gold transition-colors text-sm"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-luxury-lightGray hover:text-luxury-gold transition-colors text-sm"
            >
              Contact
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-darkGold flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-luxury-charcoal" />
          </button>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-luxury-lightGray/60 text-sm">
           • Always learning and exploring new technologies in the
            coding world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
