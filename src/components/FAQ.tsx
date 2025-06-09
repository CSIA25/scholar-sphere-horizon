
import React, { useEffect, useRef, useState } from 'react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqs = [
    {
      question: 'How does ScholarSphere differ from other education consultancies?',
      answer: 'We combine AI-powered matching with human expertise to provide personalized guidance. Our platform offers 24/7 support, real-time application tracking, and access to exclusive scholarships through our global network.',
    },
    {
      question: 'What is your success rate for university admissions?',
      answer: 'Our students have a 95% success rate in gaining admission to their target universities. We achieve this through personalized guidance, comprehensive application support, and our extensive network of partner institutions.',
    },
    {
      question: 'Do you provide visa assistance?',
      answer: 'Yes, we offer comprehensive visa guidance including document preparation, interview coaching, and ongoing support throughout the visa application process. Our team stays updated with the latest visa requirements for all major study destinations.',
    },
    {
      question: 'Can I change my plan or cancel my subscription?',
      answer: 'Absolutely! You can upgrade, downgrade, or cancel your subscription at any time. We offer a 30-day money-back guarantee on all paid plans, and there are no cancellation fees.',
    },
    {
      question: 'How do you match students with universities?',
      answer: 'Our AI algorithm considers your academic background, career goals, budget, preferred location, and personal preferences to suggest the best-fit universities. Our human advisors then review and refine these recommendations.',
    },
    {
      question: 'What kind of scholarships can I access through ScholarSphere?',
      answer: 'We provide access to merit-based scholarships, need-based aid, country-specific grants, and exclusive scholarships from our partner universities. Our database includes opportunities worth over $100 million annually.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} id="faq" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-glow">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Get answers to common questions about our services and platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`scroll-fade-in ${isVisible ? 'visible' : ''} mb-4`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className="text-xl font-medium text-foreground pr-8">
                    {faq.question}
                  </h3>
                  <i className={`ph-caret-${openIndex === index ? 'up' : 'down'} text-xl text-muted-foreground transition-transform duration-300`}></i>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 scroll-fade-in ${isVisible ? 'visible' : ''} delay-500`}>
          <p className="text-muted-foreground font-light mb-6">
            Still have questions? We're here to help.
          </p>
          <button className="neumorphic-button px-8 py-4 text-foreground font-medium hover:scale-105 transform transition-all duration-300">
            <i className="ph-chat-circle mr-2"></i>
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
