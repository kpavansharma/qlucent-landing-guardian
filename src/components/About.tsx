
import { Shield, Users, Building } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive cybersecurity solutions to protect your business
            from evolving digital threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Proactive Protection</h3>
            <p className="text-gray-600">
              Advanced threat detection and prevention systems to safeguard your digital assets.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
            <p className="text-gray-600">
              Certified security professionals dedicated to your organization's safety.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
            <Building className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Enterprise Solutions</h3>
            <p className="text-gray-600">
              Tailored security strategies for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
