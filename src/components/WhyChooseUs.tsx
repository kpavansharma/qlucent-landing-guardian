
import { Award, CheckCircle, Shield, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-12 h-12 text-primary mb-4" />,
      title: "Industry Expertise",
      description: "Over a decade of experience in cybersecurity",
      stat: "10+",
      statText: "Years Experience",
    },
    {
      icon: <Users className="w-12 h-12 text-primary mb-4" />,
      title: "Dedicated Team",
      description: "Certified security professionals at your service",
      stat: "50+",
      statText: "Security Experts",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-primary mb-4" />,
      title: "Proven Track Record",
      description: "Successfully protected numerous enterprises",
      stat: "99.9%",
      statText: "Success Rate",
    },
    {
      icon: <Award className="w-12 h-12 text-primary mb-4" />,
      title: "Industry Recognition",
      description: "Award-winning security solutions",
      stat: "20+",
      statText: "Awards Won",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600">
            Leading the way in cybersecurity excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {reason.stat}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{reason.statText}</p>
              <h4 className="text-xl font-semibold mb-2">{reason.title}</h4>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
