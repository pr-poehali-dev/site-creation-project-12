import Icon from "@/components/ui/icon";

const Craftsmanship = () => {
  const features = [
    {
      icon: "Scissors",
      title: "Ручная работа",
      description: "Каждая сумка создается мастерами с многолетним опытом",
    },
    {
      icon: "Shield",
      title: "Премиум материалы",
      description:
        "Только натуральная кожа высшего качества от проверенных поставщиков",
    },
    {
      icon: "Clock",
      title: "Внимание к деталям",
      description:
        "До 72 часов на создание одной сумки с проверкой каждого шва",
    },
    {
      icon: "Heart",
      title: "Индивидуальность",
      description: "Возможность персонализации и создания уникальных моделей",
    },
  ];

  return (
    <section className="py-20 bg-muted leather-texture">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Текстовая часть */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-leather-brown mb-6">
              Искусство создания
              <span className="block text-gold-accent">совершенных сумок</span>
            </h2>

            <p className="text-xl text-warm-gray mb-8 leading-relaxed">
              В Aura Leather мы объединяем традиционные техники кожевенного дела
              с современным дизайном. Каждая сумка — это результат кропотливой
              работы наших мастеров, которые вкладывают душу в каждое изделие.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-accent/10 rounded-full flex items-center justify-center">
                    <Icon
                      name={feature.icon}
                      size={24}
                      className="text-gold-accent"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-leather-brown mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-warm-gray">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Изображение */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80"
              alt="Мастерская по изготовлению кожаных изделий"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
