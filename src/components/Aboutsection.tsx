import { useState } from 'react';

const AboutSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const services = [
    {
      icon: "🎓",
      title: "Expert-Led IT Trainings",
      description: "Industry-focused courses designed by professionals to build real-world skills in data, cloud, and AI."
    },
    {
      icon: "📄",
      title: "CV Marketing & Preparation",
      description: "Get your CV noticed by top UK recruiters with our tailored marketing strategies and professional formatting."
    },
    {
      icon: "🎯",
      title: "End-to-End Placement Support",
      description: "From interview prep to offer negotiation, we support you through every step of your job search journey."
    }
  ];

  return (
    <section className="w-full  py-12 px-4 sm:px-6 lg:px-8 flex justify-center bg-white">
      <div className="w-[80%] mt-8">
        {/* Title and Paragraph - Flex Row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-6">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900">
              Your Gateway to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0066FF]">
                Tech Career Success
              </span>
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-gray-700 text-base leading-relaxed">
              We don't just train; we transform careers. With a proven track record of placing talent in UK's top companies, 
              our holistic approach ensures you're industry-ready from day one.
            </p>
          </div>
        </div>

        {/* 3 Services - Flex Row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-10">
          {services.map((service, index) => (
            <div key={index} className="flex-1 bg-gray-50 rounded-2xl p-3 hover:border-[#00D4FF]/50 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="flex items-start gap-4">
                {/* Logo/Badge - 24% width with center alignment */}
                <div className="w-[24%] flex-shrink-0 flex justify-center">
                  <div className="w-16 h-16 md:w-16 md:h-16 bg-gradient-to-br from-[#00D4FF]/10 to-[#0066FF]/10 rounded-full flex items-center justify-center text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300 border border-[#00D4FF]/30">
                    {service.icon}
                  </div>
                </div>
                {/* Content - 76% width */}
                <div className="w-[76%]">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image and YouTube Video - Image on Left, Video Overlapping from Right */}
        <div className="relative flex justify-start">
          {/* Main Image - 60% width on left */}
          <div className="w-[70%]">
            <img 
              src="/about-img1.png" 
              alt="Data Artisans Team at Work"
              className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
            />
          </div>
          
          {/* YouTube Video with Custom Play Button */}
          <div className="absolute right-0 w-[55%] md:w-[50%] lg:w-[36%] z-10" style={{ top: '10%', bottom: '10%' }}>
            {!isVideoPlaying ? (
              // Thumbnail with custom play button
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-[#00D4FF] h-full cursor-pointer group" onClick={() => setIsVideoPlaying(true)}>
                <img 
                  src="https://img.youtube.com/vi/H8QqGZmG6PY/maxresdefault.jpg" 
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                {/* Custom Red Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <svg 
                      className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              // YouTube iframe (no controls)
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-[#00D4FF] h-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/H8QqGZmG6PY?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
                  title="Unraveling the World of Data: Insights into Data Science & Analysis"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;



