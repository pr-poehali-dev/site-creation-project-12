import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Логотип */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-leather-brown font-serif">
            <span className="text-gold-accent">A</span>ura Leather
          </div>
        </div>

        {/* Навигация */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-leather-brown hover:text-gold-accent transition-colors"
          >
            Главная
          </a>
          <a
            href="#"
            className="text-leather-brown hover:text-gold-accent transition-colors"
          >
            Коллекции
          </a>
          <a
            href="#"
            className="text-leather-brown hover:text-gold-accent transition-colors"
          >
            О нас
          </a>
          <a
            href="#"
            className="text-leather-brown hover:text-gold-accent transition-colors"
          >
            Мастерская
          </a>
          <a
            href="#"
            className="text-leather-brown hover:text-gold-accent transition-colors"
          >
            Контакты
          </a>
        </nav>

        {/* Иконки */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Icon name="Search" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="Heart" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="ShoppingBag" size={20} />
          </Button>

          {/* Мобильное меню */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
