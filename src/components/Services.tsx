
import { Shield, Cloud, Globe, Lock, Server, FileCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Enterprise Security",
      description: "Comprehensive security solutions for enterprise-level organizations",
      expertise: ["Access Control", "Network Security", "Threat Detection", "24/7 Monitoring"]
    },
    {
      icon: <Cloud className="w-12 h-12 text-primary" />,
      title: "Cloud Security",
      description: "Protecting your cloud infrastructure and applications",
      expertise: ["Cloud Migration", "AWS/Azure Security", "Data Protection", "Cloud Monitoring"]
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Web Security",
      description: "Securing your web applications and online presence",
      expertise: ["WAF Implementation", "DDoS Protection", "SSL/TLS Management", "Security Testing"]
    },
    {
      icon: <Lock className="w-12 h-12 text-primary" />,
      title: "Vulnerability Management",
      description: "Continuous monitoring and remediation of security vulnerabilities",
      expertise: ["Vulnerability Scanning", "Risk Assessment", "Patch Management", "Security Updates"]
    },
    {
      icon: <Server className="w-12 h-12 text-primary" />,
      title: "IT Managed & Migration Services",
      description: "Expert management and seamless migration of IT infrastructure",
      expertise: ["Infrastructure Setup", "System Migration", "24/7 Support", "Performance Monitoring"]
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      title: "Compliance & Audit",
      description: "Comprehensive compliance assessments and audit solutions",
      expertise: ["ISO 27001 Certification", "GDPR Compliance", "Security Audits", "Risk Assessment"]
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
            <div key={index} className="h-[280px]">
              <div className="flip-card h-full">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer">
                  {/* Front of card */}
                  <div className="absolute w-full h-full backface-hidden bg-white p-8 rounded-xl shadow-sm border border-purple-100 flex flex-col items-center">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-center">{service.description}</p>
                  </div>
                  {/* Back of card */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-primary p-8 rounded-xl shadow-sm text-white">
                    <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {service.expertise.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
