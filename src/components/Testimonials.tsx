
import React, { useEffect, useRef, useState } from 'react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials = [
    {
      name: 'Sarah Chen',
      country: 'Singapore',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      result: 'Got 3 full-ride offers!',
      quote: 'ScholarSphere transformed my dream into reality. Their personalized guidance helped me secure full scholarships to three top universities.',
    },
    {
      name: 'Ahmed Hassan',
      country: 'Egypt',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      result: '$50K scholarship secured',
      quote: 'The expert mentorship was invaluable. I received a $50,000 scholarship for my Master\'s program at MIT.',
    },
    {
      name: 'Maria Rodriguez',
      country: 'Brazil',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      result: 'Visa approved in 2 weeks',
      quote: 'The visa guidance service was exceptional. My student visa was approved in just 2 weeks with zero complications.',
    },
    {
      name: 'David Kim',
      country: 'South Korea',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      result: 'PhD at Oxford University',
      quote: 'ScholarSphere\'s network opened doors I never knew existed. Now I\'m pursuing my PhD at Oxford University.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-glow">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Real results from students who trusted us with their future
          </p>
        </div>

        <div className={`max-w-4xl mx-auto scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="flex items-center justify-center mb-8">
              <img
                src={testimonials[currentIndex].photo}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full border-4 border-primary/30"
              />
            </div>

            <blockquote className="text-2xl font-light text-foreground mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="mb-6">
              <h4 className="text-xl font-medium text-foreground mb-2">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-muted-foreground mb-2">
                {testimonials[currentIndex].country}
              </p>
              <div className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-2 rounded-full">
                <span className="text-primary font-medium">
                  {testimonials[currentIndex].result}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center hover:bg-muted transition-colors duration-300"
              >
                <i className="ph-caret-left text-xl"></i>
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center hover:bg-muted transition-colors duration-300"
              >
                <i className="ph-caret-right text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
