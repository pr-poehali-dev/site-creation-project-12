import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-leather-brown via-leather-brown to-leather-brown/90 text-cream py-16 leather-texture">
      <div className="absolute inset-0 bg-gradient-to-t from-leather-brown/50 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-gold-accent">A</span>ura Leather
            </div>
            <p className="text-cream/80 mb-6 max-w-md">
              Создаем сумки премиум-класса из натуральной кожи с 2010 года.
              Каждое изделие — произведение искусства, созданное с любовью к
              деталям.
            </p>

            {/* Социальные сети */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gold-accent transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gold-accent transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gold-accent transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="font-medium mb-4 text-gold-accent">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  Коллекции
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  Мастерская
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-medium mb-4 text-gold-accent">Контакты</h3>
            <div className="space-y-3 text-cream/80">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span className="text-sm">Москва, ул. Петровка, 25</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span className="text-sm">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span className="text-sm">info@auraleather.ru</span>
              </div>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/60">
          <p>&copy; 2024 Aura Leather. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
