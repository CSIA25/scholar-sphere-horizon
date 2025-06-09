
import React, { useEffect, useRef, useState } from 'react';

const FeaturedIn = () => {
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

  const publications = [
    'TechCrunch',
    'Forbes',
    'Times Higher Education',
    'QS World Rankings',
    'Coursera',
    'EdSurge'
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-lg font-light text-muted-foreground mb-8">
            Trusted by students worldwide and featured in
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center max-w-4xl mx-auto">
            {publications.map((publication, index) => (
              <div
                key={publication}
                className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300">
                  {publication}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
