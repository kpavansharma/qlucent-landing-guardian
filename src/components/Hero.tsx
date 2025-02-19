
import { Shield, Lock, Database, Code2, Laptop } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-purple-50">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          poster="/lovable-uploads/238659ec-d372-4b20-9bbe-db1af26e654c.png"
        >
          <source 
            src="https://videos.ctfassets.net/c1tbynmqwh7x/2Hp35YIxjFBt6Cj36Z6V9M/d79a20cf14c91f25ec6fcac961aaa7c2/12676757_2560_1440_30fps.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-purple-50/80" />
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
              <Laptop className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Consulting Services</h3>
              <p className="text-gray-600">Professional guidance for your security needs</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-purple-100 transform hover:-translate-y-1 transition-all duration-200">
              <Code2 className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Technology-Driven Solutions</h3>
              <p className="text-gray-600">Innovative approaches to cybersecurity challenges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
