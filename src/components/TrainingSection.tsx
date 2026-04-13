import { useState, useEffect, useRef } from 'react';

const TrainingSection = () => {
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(50); // Start slightly translated
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const visiblePart = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight * 0.7)));
        
        setOpacity(visiblePart);
        setTranslateY(50 - (visiblePart * 50));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainTrainings = [
    {
      id: 1,
      title: "Microsoft Azure",
      icon: "☁️",
      description: "Master cloud computing with Azure solutions including data factory, data lake, and synapse analytics. Learn to build, deploy, and manage scalable cloud applications.",
      level: "Beginner to Advanced",
      duration: "8 Weeks",
      projects: "5 Live Projects",
      color: "from-blue-500 to-cyan-500",
      tags: ["Azure Data Factory", "Azure Data Lake", "Azure Synapse"]
    },
    {
      id: 2,
      title: "Power BI & Business Intelligence",
      icon: "📊",
      description: "Transform raw data into stunning visualizations and interactive dashboards. Master DAX, Power Query, and data modeling for enterprise-level BI solutions.",
      level: "Beginner to Advanced",
      duration: "6 Weeks",
      projects: "4 Live Projects",
      color: "from-yellow-500 to-orange-500",
      tags: ["Power BI Desktop", "Power Query", "DAX", "Power BI Service"]
    },
    {
      id: 3,
      title: "Python for Data Science",
      icon: "🐍",
      description: "Comprehensive Python training focused on data analysis, machine learning, and automation. Learn pandas, numpy, matplotlib, and scikit-learn.",
      level: "Beginner to Advanced",
      duration: "10 Weeks",
      projects: "6 Live Projects",
      color: "from-green-500 to-teal-500",
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn"]
    },
    {
      id: 4,
      title: "Databricks & Apache Spark",
      icon: "⚡",
      description: "Big data processing and analytics using Databricks unified data analytics platform. Master Spark SQL, streaming, and ML pipelines.",
      level: "Intermediate to Advanced",
      duration: "8 Weeks",
      projects: "4 Live Projects",
      color: "from-red-500 to-pink-500",
      tags: ["Apache Spark", "Databricks", "PySpark", "Delta Lake"]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-5 px-4 sm:px-6 lg:px-8 bg-gray-50 z-10"
      style={{
        opacity: opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12"
          style={{
            transform: opacity > 0.3 ? 'translateY(0)' : 'translateY(20px)',
            opacity: opacity > 0.3 ? 1 : 0,
            transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
          }}
        >
          {/* <h4 className="text-[#00D4FF] font-semibold uppercase tracking-wider text-sm md:text-base mb-2">
            Our Training Programs
          </h4> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Master In-Demand Tech Skills
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0066FF]">
              Industry-Recognized Certifications
            </span>
          </h2>
          {/* <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Get trained by industry experts and advance your career with our comprehensive training programs
          </p> */}
        </div>

        {/* Main Training Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainTrainings.map((training, index) => (
            <div
              key={training.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{
                transform: opacity > 0.2 + (index * 0.1) ? 'translateY(0)' : 'translateY(30px)',
                opacity: opacity > 0.2 + (index * 0.1) ? 1 : 0,
                transition: `transform 0.4s ease-out, opacity 0.4s ease-out`
              }}
            >
              <div className={`bg-gradient-to-r ${training.color} p-6 text-center`}>
                <div className="text-5xl mb-2">{training.icon}</div>
                <h3 className="text-white font-bold text-xl">{training.title}</h3>
              </div>
              
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {training.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {training.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                  {training.tags.length > 2 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      +{training.tags.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;