import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !city) {
      toast({
        title: "Please enter your full name, email and city",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for your interest!",
        description: "We'll notify you when Autera launches in your area."
      });
      setFullName("");
      setEmail("");
      setCity("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Early Access</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-display font-bold mb-4 text-left">Stay in the Loop</h2>
          <p className="section-subtitle mb-10 text-left max-w-3xl">
            Be the first to know when Autera launches in your area. Get early access to the UK's first AI-powered car diagnostic platform.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700"
              required
            />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter your city"
              className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300"
            >
              {isSubmitting ? "Joining..." : "Get Early Access"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;