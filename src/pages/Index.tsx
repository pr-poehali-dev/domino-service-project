import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" className="text-[#FF6B35]" size={28} />
              <span className="text-xl font-bold text-gray-900">RepairPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Услуги</a>
              <a href="#about" className="text-gray-600 hover:text-[#FF6B35] transition-colors">О нас</a>
              <a href="#contact" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Контакты</a>
              <Button className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                Заказать ремонт
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Профессиональный
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#2563EB] bg-clip-text text-transparent block">
              ремонт электроники
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Качественный ремонт компьютеров, ноутбуков и телефонов с гарантией от 6 месяцев. 
            Быстрая диагностика и честные цены.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-8 py-4 text-lg">
              <Icon name="Phone" className="mr-2" size={20} />
              Вызвать мастера
            </Button>
            <Button size="lg" variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white px-8 py-4 text-lg">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Бесплатная консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Предоставляем полный спектр услуг по ремонту и обслуживанию электроники
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Computer Repair */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#e55a2b] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Monitor" className="text-white" size={36} />
                </div>
                <CardTitle className="text-2xl text-gray-900">Ремонт компьютеров</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6">
                  Диагностика и ремонт настольных компьютеров, замена комплектующих, 
                  чистка от пыли, установка ПО
                </CardDescription>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-green-500 mr-2" size={16} />
                    Диагностика - бесплатно
                  </li>
                  <li className="flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-green-500 mr-2" size={16} />
                    Гарантия до 12 месяцев
                  </li>
                  <li className="flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-green-500 mr-2" size={16} />
                    Выезд на дом
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] text-white hover:opacity-90">
                  от 800 ₽
                </Button>
              </CardContent>
            </Card>

            {/* Laptop Repair */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#1e40af] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Laptop" className="text-white" size={36} />
                </div>
                <CardTitle className="text-2xl text-gray-900">Ремонт ноутбуков</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6">
                  Замена экранов, клавиатур, аккумуляторов. Чистка системы охлаждения, 
                  восстановление после залития
                </CardDescription>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-green-500 mr-2" size={16} />
                    Экспресс-ремонт
                  </li>
                  <li className="flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-green-500 mr-2" size={16} />
                    Оригинальные запчасти
                  </li>
                  <li className="flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-green-500 mr-2" size={16} />
                    Сохранение данных
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-[#2563EB] to-[#1e40af] text-white hover:opacity-90">
                  от 1200 ₽
                </Button>
              </CardContent>
            </Card>

            {/* Phone Repair */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Smartphone" className="text-white" size={36} />
                </div>
                <CardTitle className="text-2xl text-gray-900">Ремонт телефонов</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6">
                  Замена экранов, аккумуляторов, камер. Ремонт разъемов, динамиков. 
                  Работаем с iPhone и Android
                </CardDescription>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-green-500 mr-2" size={16} />
                    Ремонт за 30 минут
                  </li>
                  <li className="flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-green-500 mr-2" size={16} />
                    Качественные дисплеи
                  </li>
                  <li className="flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-green-500 mr-2" size={16} />
                    Гарантия 6 месяцев
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-[#10b981] to-[#059669] text-white hover:opacity-90">
                  от 990 ₽
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Почему выбирают нас
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Clock" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Быстро</h3>
              <p className="text-gray-600">
                Большинство ремонтов выполняем в день обращения
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Shield" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Надёжно</h3>
              <p className="text-gray-600">
                Гарантия на все виды работ от 6 до 12 месяцев
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="DollarSign" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Выгодно</h3>
              <p className="text-gray-600">
                Честные цены без переплат и скрытых комиссий
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#8b5cf6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Users" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Профессионально</h3>
              <p className="text-gray-600">
                Опытные мастера с сертификатами и современным оборудованием
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#FF6B35] to-[#2563EB]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы починить вашу технику?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами прямо сейчас для бесплатной диагностики
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#FF6B35] hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#FF6B35] px-8 py-4 text-lg">
              <Icon name="MapPin" className="mr-2" size={20} />
              Найти нас
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" className="text-[#FF6B35]" size={24} />
                <span className="text-xl font-bold text-white">RepairPro</span>
              </div>
              <p className="text-gray-400">
                Профессиональный ремонт электроники с 2015 года
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Ремонт компьютеров</li>
                <li>Ремонт ноутбуков</li>
                <li>Ремонт телефонов</li>
                <li>Диагностика</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Phone" className="mr-2" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={16} />
                  info@repairpro.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" className="mr-2" size={16} />
                  Москва, ул. Примерная, 123
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Режим работы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Пн-Пт: 9:00 - 20:00</li>
                <li>Сб-Вс: 10:00 - 18:00</li>
                <li className="text-[#FF6B35]">Выезд мастера 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 RepairPro. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;