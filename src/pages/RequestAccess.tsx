import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const RequestAccess = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      city: formData.get("city"),
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyBSEjgZlr0CVPOP75VN6_FNzWS7jbHblRyHakCRpvPBJjPXwmUrNSUSYR-pbwnOG9D/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll contact you soon!",
      });

      e.currentTarget.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center space-x-2" aria-label="Back to home">
            <span className="text-xl font-bold text-primary">AUTERA</span>
          </Link>
          <Link 
            to="/" 
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="pulse-chip mx-auto mb-6">
                <span>Early Access Request</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Request Early Access
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Join the waitlist to be among the first to experience Autera's AI-powered car diagnostics platform in the UK.
              </p>
            </div>

            <div className="glass-card p-8">
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Enter your city"
                    className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Request Early Access"}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>We'll contact you as soon as Autera launches in your area.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestAccess;
