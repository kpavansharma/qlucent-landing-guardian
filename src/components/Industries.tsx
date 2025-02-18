
import { Building2, Factory, Briefcase, Hospital, Bank, ShoppingBag } from "lucide-react";
import { useRef, useEffect } from "react";

const Industries = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const elements = containerRef.current.querySelectorAll(".industry-card");
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          el.classList.add("animate-fadeIn");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const industries = [
    {
      icon: <Building2 className="w-12 h-12" />,
      name: "Corporate",
      description: "Enterprise-level security solutions",
    },
    {
      icon: <Factory className="w-12 h-12" />,
      name: "Manufacturing",
      description: "Industrial cybersecurity protection",
    },
    {
      icon: <Hospital className="w-12 h-12" />,
      name: "Healthcare",
      description: "HIPAA-compliant security measures",
    },
    {
      icon: <Bank className="w-12 h-12" />,
      name: "Financial",
      description: "Banking-grade security systems",
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      name: "Retail",
      description: "PCI-compliant security solutions",
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      name: "Professional Services",
      description: "Tailored security for service firms",
    },
  ];

  return (
    <section id="industries" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600">
            Specialized security solutions across various sectors
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card opacity-0 bg-white p-6 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-primary mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
