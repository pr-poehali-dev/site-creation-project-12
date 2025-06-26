import { Button } from "@/components/ui/button";

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Классика",
      description: "Вневременные модели для ценителей элегантности",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80",
      price: "от 15 000 ₽",
    },
    {
      id: 2,
      title: "Современность",
      description: "Актуальные формы для динамичной жизни",
      image:
        "https://images.unsplash.com/photo-1506629905607-d2b1a2bb4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80",
      price: "от 18 000 ₽",
    },
    {
      id: 3,
      title: "Эксклюзив",
      description: "Лимитированные модели ручной работы",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80",
      price: "от 25 000 ₽",
    },
  ];

  return (
    <section className="py-20 bg-background subtle-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-leather-brown mb-4">
            Избранные коллекции
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Каждая сумка — это история о качестве, стиле и внимании к деталям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/5]">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-medium text-leather-brown mb-2">
                  {collection.title}
                </h3>
                <p className="text-warm-gray mb-3">{collection.description}</p>
                <p className="text-gold-accent font-medium text-lg mb-4">
                  {collection.price}
                </p>
                <Button
                  variant="outline"
                  className="border-leather-brown text-leather-brown hover:bg-leather-brown hover:text-cream"
                >
                  Посмотреть
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
