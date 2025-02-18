
import { Shield, Lock, Database } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-purple-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Elevate your digital security
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Protecting your digital assets with next-generation cybersecurity
              solutions and expertise.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeIn opacity-0" style={{ animationDelay: "0.4s" }}>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="bg-white hover:bg-gray-50 text-primary px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 border border-primary"
            >
              Learn More
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fadeIn opacity-0" style={{ animationDelay: "0.6s" }}>
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-purple-100 transform hover:-translate-y-1 transition-all duration-200">
              <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Advanced Protection</h3>
              <p className="text-gray-600">State-of-the-art security solutions for your business</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-purple-100 transform hover:-translate-y-1 transition-all duration-200">
              <Lock className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Monitoring</h3>
              <p className="text-gray-600">Continuous threat detection and response</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-purple-100 transform hover:-translate-y-1 transition-all duration-200">
              <Database className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Data Security</h3>
              <p className="text-gray-600">Comprehensive data protection strategies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
