
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary/30 rounded-full rotating"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-secondary/30 rounded-full rotating" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
      </div>

      {/* 3D Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg floating shadow-lg"></div>
        <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-gradient-to-br from-accent to-primary rounded-full floating" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : ''}`}>
          <h1 className="text-6xl md:text-8xl font-light mb-8 text-glow leading-tight">
            Your Gateway to
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Global Education
            </span>
          </h1>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : ''}`}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Unlock world-class educational opportunities with AI-powered guidance, 
            expert mentorship, and comprehensive support for your academic journey.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : ''}`}>
          <button
            onClick={() => scrollToSection('#how-it-works')}
            className="glow-effect relative inline-block"
          >
            <div className="neumorphic-button px-12 py-6 text-lg font-medium pulse-glow hover:scale-105 transform transition-all duration-300">
              <i className="ph-rocket-launch mr-3 text-xl"></i>
              Start Your Journey
            </div>
          </button>
        </div>

        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-semibold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground font-light">Students Guided</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold text-secondary mb-2">95%</div>
              <div className="text-muted-foreground font-light">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold text-accent mb-2">50+</div>
              <div className="text-muted-foreground font-light">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ph-caret-down text-2xl text-muted-foreground"></i>
      </div>
    </section>
  );
};

export default Hero;
