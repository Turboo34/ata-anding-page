
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const industryQuotes: { quote: string; source: string; role: string; }[] = [
  {
    quote: "AI's ability to provide immediate diagnostic support helps level the playing field, empowering shops with the intelligence and expertise they need without requiring additional personnel.",
    source: "Automotive Industry Expert",
    role: "Industry Analysis"
  },
  {
    quote: "Vehicle diagnostics and service benefit from AI-powered onboard systems that predict parts failures before they happen.",
    source: "Automotive Technology Review", 
    role: "Technology Assessment"
  }
];

const IndustryQuoteCard = ({
  quote,
  source,
  role
}: { quote: string; source: string; role: string; }) => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-8 h-full flex flex-col justify-between border border-gray-200 transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden shadow-lg">
      <div className="relative z-0">
        <blockquote className="text-xl mb-8 font-medium leading-relaxed italic text-gray-900">
          "{quote}"
        </blockquote>
        <div className="border-t pt-4">
          <p className="font-semibold text-lg text-gray-900">{source}</p>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Testimonials</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">Industry Recognition</h2>
        
        <p className="section-subtitle mb-12 text-left max-w-3xl">
          Leading automotive experts recognize the transformative potential of AI-powered diagnostics in car servicing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industryQuotes.map((quote, index) => (
            <IndustryQuoteCard 
              key={index} 
              quote={quote.quote} 
              source={quote.source} 
              role={quote.role} 
            />
          ))}
        </div>
      </div>
    </section>;
};

export default Testimonials;
