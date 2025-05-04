
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [shake, setShake] = useState(false);
  
  // Случайно трясти страницу для большего эффекта
  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-yellow-300 to-orange-400 p-4 font-bold relative overflow-hidden ${shake ? 'animate-shake' : ''}`}>
      {/* Фоновые элементы в стиле "говно" - больше их! */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-brown-500 opacity-40 rotate-12 animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-36 h-36 rounded-full bg-brown-700 opacity-30 -rotate-12"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-brown-400 opacity-20"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-brown-600 opacity-25 animate-bounce"></div>
      <div className="absolute bottom-1/3 left-1/5 w-28 h-28 rounded-full bg-brown-300 opacity-30 animate-pulse"></div>
      
      {/* Мухи летают вокруг */}
      <div className="absolute top-1/3 right-1/3 text-2xl animate-fly-1">💩</div>
      <div className="absolute top-2/3 left-1/4 text-2xl animate-fly-2">💩</div>
      <div className="absolute bottom-1/4 right-1/5 text-2xl animate-fly-3">💩</div>
      
      <header className="sticky top-0 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl mb-8 border-4 border-brown-600 shadow-xl z-10">
        <h1 className="text-4xl md:text-6xl text-center font-black text-yellow-200 px-4 animate-pulse">
          ЯНДЕКС - ЭТО ГОВНО! 💩
        </h1>
      </header>

      <main className="max-w-4xl mx-auto">
        <Card className="p-6 mb-8 bg-brown-200 border-4 border-brown-600 transform -rotate-1 shadow-xl hover:rotate-0 transition-all">
          <p className="text-xl md:text-2xl font-bold text-red-600 mb-6">
            Яндекс это говно, потому что не потому, а просто говно убогое! Убогая поисковая система не дающая вам и вашему бизнесу никакого шанса!
          </p>
          
          <div className="flex justify-center mb-6">
            <Button className="bg-red-600 hover:bg-red-700 text-white text-xl py-6 px-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all">
              <Icon name="Trash2" className="mr-2" />
              Яндекс - МУСОР!
            </Button>
          </div>
        </Card>

        <Card className="p-6 mb-8 bg-purple-200 border-4 border-purple-600 transform rotate-1 shadow-xl hover:rotate-0 transition-all">
          <h2 className="text-2xl md:text-3xl font-black text-purple-800 mb-4 animate-pulse">НЕ ИСПОЛЬЗУЙТЕ ЯНДЕКС ВЕБМАСТЕР! ⚠️</h2>
          <p className="text-lg md:text-xl font-bold text-purple-700">
            Если вы пользуетесь Яндексом от скуки и имеете свой бизнес, то никогда не пользуйтесь разделом Яндекс вебмастер не добавляйте никогда и ни при каких обстоятельствах эту гниду под названием Яндекс в свой бизнес!
          </p>
        </Card>

        <Card className="p-6 mb-8 bg-green-200 border-4 border-green-600 transform -rotate-1 shadow-xl hover:rotate-0 transition-all">
          <h2 className="text-2xl md:text-3xl font-black text-green-800 mb-4 animate-pulse">ОПАСНОСТЬ ДЛЯ ВАШЕГО САЙТА! ⚠️</h2>
          <p className="text-lg md:text-xl font-bold text-green-700 mb-4">
            Не подтверждайте сайт и не подключайте Яндекс метрику к вашему сайту. Все эти манипуляции приведут к искусственному понижению ИКС вашего сайта и занижение ранжирования в поисковой выдаче!
          </p>
          <div className="flex justify-center">
            <Icon name="AlertTriangle" size={60} className="text-red-600 animate-pulse" />
          </div>
        </Card>

        <Card className="p-6 mb-8 bg-blue-200 border-4 border-blue-600 transform rotate-1 shadow-xl hover:rotate-0 transition-all">
          <h2 className="text-2xl md:text-3xl font-black text-blue-800 mb-4 animate-pulse">ЯНДЕКС БИЗНЕС - ВЫМОГАТЕЛЬСТВО! 💰</h2>
          <p className="text-lg md:text-xl font-bold text-blue-700">
            Гнида под названием Яндекс, со своим отрыгным проектом как Яндекс Бизнес также задвинет ваш сайт в самый низ и будет вымогать деньги на платные подписки и рекламные компании которые якобы повысят рейтинг вашего сайта и соответственно выдачу в поиске!
          </p>
          <Separator className="my-4 bg-blue-600" />
          <p className="text-xl font-black text-red-600 text-center animate-pulse">
            Всё это ни что иное как хорошо спланированная манипулятивная тактика по вымоганию денег у лохов.
          </p>
        </Card>

        <Card className="p-6 mb-8 bg-red-200 border-4 border-red-600 transform -rotate-1 shadow-xl hover:rotate-0 transition-all">
          <h2 className="text-2xl md:text-3xl font-black text-red-800 mb-4 animate-pulse">ЯНДЕКС КАРТЫ - КРИМИНАЛ? 🕵️‍♂️</h2>
          <p className="text-lg md:text-xl font-bold text-red-700 mb-4">
            Гнида под названием Яндекс карты это зеркальная фича всё того же Яндекса, альтернатива Яндекс бизнесу. Новшество от гниды под названием Яндекс карты и Яндекс бизнес в данный момент сводится к тому что если вы хотите отображаться на Яндекс картах и в Яндекс бизнесе иметь подтвержденный профиль компании, вы должны, ВНИМАНИЕ, предоставить видео на котором будет видна вывеска с названием фирмы, вход в здание где расположена ваша фирма, видна расположенная со зданием инфраструктура, внутри вы должны снять на видео оборудование и обстановку внутри компании, и всё это надо сделать одним файлом без склеек!
          </p>
          <div className="bg-yellow-300 p-4 rounded-lg border-2 border-dashed border-red-600 animate-pulse">
            <p className="text-xl font-black text-red-800">
              Вопрос, кто заказчик этого всего, кто собирает эти стратегические сведения в которых содержится информация о материальных ценностях той или иной организации??? Попахивает криминалом, вам так не кажется?
            </p>
          </div>
        </Card>
      </main>

      <footer className="mt-12 p-4 bg-black text-center rounded-xl">
        <p className="text-yellow-300 font-bold text-lg">© 2025 Анти-Яндекс Движение</p>
        <p className="text-yellow-200 text-sm mt-2">Разработано в знак протеста! 💩</p>
      </footer>
    </div>
  );
};

export default Index;
