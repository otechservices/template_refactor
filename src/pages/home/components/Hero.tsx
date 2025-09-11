
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Bienvenue à Dangbo",
      subtitle: "Une commune dynamique au service de ses citoyens",
      description: "Découvrez une administration moderne et transparente, engagée pour le développement de notre territoire",
      image: "https://readdy.ai/api/search-image?query=Beautiful%20modern%20city%20hall%20building%20with%20African%20architectural%20elements%2C%20blue%20sky%2C%20palm%20trees%2C%20clean%20modern%20design%2C%20government%20building%20in%20tropical%20setting%2C%20professional%20architecture%20photography&width=800&height=500&seq=hero1&orientation=landscape"
    },
    {
      id: 2,
      title: "Services Municipaux",
      subtitle: "Des services de qualité pour tous",
      description: "État civil, urbanisme, développement local - nous accompagnons tous vos projets",
      image: "https://readdy.ai/api/search-image?query=Modern%20municipal%20services%20office%20with%20friendly%20staff%20helping%20citizens%2C%20clean%20professional%20environment%2C%20African%20municipal%20workers%2C%20government%20services%2C%20customer%20service%20desk&width=800&height=500&seq=hero2&orientation=landscape"
    },
    {
      id: 3,
      title: "Développement Durable",
      subtitle: "Construisons ensemble l'avenir de Dangbo",
      description: "Projets d'infrastructure, environnement, économie locale - une vision pour demain",
      image: "https://readdy.ai/api/search-image?query=Sustainable%20development%20projects%20in%20African%20town%2C%20solar%20panels%2C%20green%20infrastructure%2C%20modern%20roads%2C%20environmental%20projects%2C%20community%20development%2C%20tropical%20landscape&width=800&height=500&seq=hero3&orientation=landscape"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl text-blue-200 mb-6 font-light">
                  {slide.subtitle}
                </h2>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer">
                    Découvrir nos services
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer">
                    Nous contacter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
      >
        <i className="ri-arrow-left-line text-2xl"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
      >
        <i className="ri-arrow-right-line text-2xl"></i>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
