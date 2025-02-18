
import { ArrowRight } from "lucide-react";

const LatestNews = () => {
  const news = [
    {
      title: "The Future of Cybersecurity in 2024",
      excerpt: "Discover the emerging trends and technologies shaping cybersecurity",
      date: "Mar 15, 2024",
      category: "Trends",
    },
    {
      title: "Understanding Zero Trust Security",
      excerpt: "A comprehensive guide to implementing zero trust architecture",
      date: "Mar 10, 2024",
      category: "Security",
    },
    {
      title: "Cloud Security Best Practices",
      excerpt: "Essential strategies for securing your cloud infrastructure",
      date: "Mar 5, 2024",
      category: "Cloud",
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Insights
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with the latest in cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-purple-100 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <a
                    href="#"
                    className="text-primary hover:text-primary/90 flex items-center gap-2"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
