
import { Shield, Cloud, Globe, Lock, Server } from "lucide-react";

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
              className="bg-white p-8 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
