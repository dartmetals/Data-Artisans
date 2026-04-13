const StudyAbroadSection = () => {
  const countries = [
    {
      name: "United Kingdom",
      code: "UK",
      icon: "🇬🇧",
      image: "/uk-flag.jpg",
      color: "from-red-600 to-blue-600"
    },
    {
      name: "United States",
      code: "USA",
      icon: "🇺🇸",
      image: "/us-flag.jpg",
      color: "from-red-700 to-blue-700"
    },
    {
      name: "Canada",
      code: "CAN",
      icon: "🇨🇦",
      image: "/canada-flag.jpg",
      color: "from-red-600 to-red-600"
    },
    {
      name: "Germany",
      code: "GER",
      icon: "🇩🇪",
      image: "/germany-flag.jpg",
      color: "from-black to-yellow-600"
    },
    {
      name: "Ireland",
      code: "IRE",
      icon: "🇮🇪",
      image: "/ireland-flag.jpg",
      color: "from-green-600 to-orange-500"
    },
    {
      name: "New Zealand",
      code: "NZ",
      icon: "🇳🇿",
      image: "/newzealand-flag.jpg",
      color: "from-blue-800 to-red-600"
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 flex justify-center">
      <div className="w-[80%]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h4 className="text-[#00D4FF] font-semibold uppercase tracking-wider text-sm md:text-base mb-2">
            Study Abroad
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Global Education Opportunities
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0066FF]">
              Study in Top Destinations
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Explore world-class education opportunities in the world's most sought-after study destinations
          </p>
        </div>

        {/* Countries Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Country Image - Removed fixed height */}
              <div className="relative overflow-hidden">
                <img
                  src={country.image}
                  alt={`Study in ${country.name}`}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${country.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                {/* Country Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {/* Country Icon/Flag Emoji */}
                  <div className="text-5xl mb-2 drop-shadow-lg">
                    {country.icon}
                  </div>
                  {/* Country Name */}
                  <h3 className="text-2xl font-bold mb-1 drop-shadow-lg">
                    {country.name}
                  </h3>
                  {/* Country Code Badge */}
                  <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
                    {country.code}
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-[#00D4FF] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#00D4FF]/10 to-[#0066FF]/10 rounded-2xl p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Ready to Start Your Study Abroad Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Get expert guidance on university selection, application process, and visa assistance
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#00D4FF]/30 transition-all duration-300 transform hover:scale-105">
              Get Free Consultation →
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default StudyAbroadSection;