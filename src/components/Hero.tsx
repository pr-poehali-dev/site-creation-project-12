import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream to-muted leather-texture">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 bg-black/10">
        <img
          src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
          alt="Luxury leather bag"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Контент */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-light text-leather-brown mb-6 leading-tight">
          Откройте для себя
          <span className="block text-gold-accent font-medium">
            совершенство
          </span>
          в каждой детали
        </h1>

        <p className="text-xl md:text-2xl text-warm-gray mb-8 max-w-2xl mx-auto font-light">
          Aura Leather — сумки, созданные с любовью и безупречным вкусом
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-leather-brown hover:bg-leather-brown/90 text-cream px-8 py-3 text-lg"
          >
            Смотреть коллекцию
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-cream px-8 py-3 text-lg"
          >
            О мастерстве
          </Button>
        </div>
      </div>

      {/* Декоративный элемент */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
