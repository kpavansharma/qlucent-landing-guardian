
import { Shield, Cloud, Globe, Lock, Server, FileCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Enterprise Security",
      description: "Comprehensive security solutions for enterprise-level organizations",
    },
    {
      icon: <Cloud className="w-12 h-12 text-primary" />,
      title: "Cloud Security",
      description: "Protecting your cloud infrastructure and applications",
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Web Security",
      description: "Securing your web applications and online presence",
    },
    {
      icon: <Lock className="w-12 h-12 text-primary" />,
      title: "Vulnerability Management",
      description: "Continuous monitoring and remediation of security vulnerabilities",
    },
    {
      icon: <Server className="w-12 h-12 text-primary" />,
      title: "IT Managed & Migration Services",
      description: "Expert management and seamless migration of IT infrastructure",
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      title: "Compliance & Audit",
      description: "Comprehensive compliance assessments and audit solutions",
      isFlip: true,
    },
  ];

  return (
    <section id="services" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive cybersecurity solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="h-[280px]" // Set consistent height for all containers
            >
              {service.isFlip ? (
                <div className="flip-card h-full perspective-1000">
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-3d hover:rotate-y-180">
                    <div className="absolute w-full h-full backface-hidden bg-white p-8 rounded-xl shadow-sm border border-purple-100 flex flex-col items-center">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-primary p-8 rounded-xl shadow-sm text-white">
                      <h3 className="text-xl font-semibold mb-3">Our Expertise</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>ISO 27001 Certification</li>
                        <li>GDPR Compliance</li>
                        <li>Security Audits</li>
                        <li>Risk Assessment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full bg-white p-8 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
