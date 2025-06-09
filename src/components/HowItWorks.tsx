
import React, { useEffect, useRef, useState } from 'react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: 'ph-calendar-check',
      title: 'Book a Call',
      description: 'Schedule a free consultation with our expert advisors to discuss your goals and aspirations.',
    },
    {
      icon: 'ph-path',
      title: 'Customize Your Path',
      description: 'Get a personalized roadmap tailored to your academic background and target destinations.',
    },
    {
      icon: 'ph-globe-hemisphere-west',
      title: 'Access Global Programs',
      description: 'Unlock exclusive opportunities and scholarships from our network of partner institutions.',
    },
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-glow">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Your journey to global education success starts with three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="glass-card p-8 text-center group hover:scale-105 transform transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${step.icon} text-3xl text-primary`}></i>
                </div>
                
                <h3 className="text-2xl font-medium mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground font-light leading-relaxed">
                  {step.description}
                </p>

                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
