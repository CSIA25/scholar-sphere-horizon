
import React, { useEffect, useRef, useState } from 'react';

const Features = () => {
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

  const features = [
    {
      icon: 'ph-graduation-cap',
      title: 'Global Scholarships',
      description: 'Access exclusive scholarships and funding opportunities from top universities worldwide.',
    },
    {
      icon: 'ph-users-three',
      title: 'Expert Mentors',
      description: 'Get guidance from industry professionals and successful alumni in your field.',
    },
    {
      icon: 'ph-airplane',
      title: 'Visa Guidance',
      description: 'Complete visa support and documentation assistance for your study destination.',
    },
    {
      icon: 'ph-trend-up',
      title: 'Career Mapping',
      description: 'Strategic career planning to maximize your international education investment.',
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-glow">
            Why Choose ScholarSphere
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive support for every step of your international education journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="glass-card p-8 group hover:scale-105 transform transition-all duration-500">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${feature.icon} text-2xl text-primary`}></i>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
