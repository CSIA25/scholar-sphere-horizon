
import React, { useEffect, useRef, useState } from 'react';

const Mission = () => {
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

  return (
    <section ref={sectionRef} className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-5xl md:text-6xl font-light mb-12 text-glow">
              Our Mission
            </h2>
          </div>

          <div className={`scroll-fade-in ${isVisible ? 'visible' : ''} delay-200`}>
            <div className="glass-card p-12">
              <p className="text-2xl font-light text-foreground mb-8 leading-relaxed">
                At ScholarSphere, we believe that exceptional education should be accessible to everyone, regardless of their geographical or economic background.
              </p>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're democratizing global education by combining cutting-edge AI technology with human expertise to create personalized pathways for students worldwide. Our platform connects ambitious learners with world-class opportunities, breaking down barriers and opening doors to a brighter future.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="ph-heart text-2xl text-primary"></i>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Accessibility</h3>
                  <p className="text-muted-foreground font-light">Making quality education accessible to students from all backgrounds</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="ph-lightbulb text-2xl text-secondary"></i>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Innovation</h3>
                  <p className="text-muted-foreground font-light">Leveraging AI and technology to revolutionize educational guidance</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="ph-rocket-launch text-2xl text-accent"></i>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Empowerment</h3>
                  <p className="text-muted-foreground font-light">Empowering students to achieve their highest potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
