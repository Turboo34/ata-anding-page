import React from "react";
import { Check, Square } from "lucide-react";

const RoadmapSection = () => {
  const roadmapItems = [
    { text: "Development: Currently in progress", completed: true },
    { text: "Beta Testing: Planned late 2025", completed: false },
    { text: "Full Launch: Early 2026", completed: false },
    { text: "Focus: UK vehicle owners first", completed: true },
    { text: "AI Diagnostics: Coming in version 2", completed: false },
  ];

  return (
    <section className="w-full py-12 sm:py-16 bg-gray-50" id="roadmap">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-12 text-gray-900">
            Where We're At
          </h2>
          
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-elegant">
            <div className="space-y-6">
              {roadmapItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0">
                    {item.completed ? (
                      <div className="w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    ) : (
                      <Square className="w-6 h-6 text-gray-400" strokeWidth={2} />
                    )}
                  </div>
                  <span 
                    className={`text-lg sm:text-xl font-medium ${
                      item.completed ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;