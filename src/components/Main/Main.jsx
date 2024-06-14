import { useState } from 'react';
import Card from '../Card/Card';
import './Main.scss';
import Bullets from '../Bullets/Bullets';

const Main = () => {
  const [currentView, setCurrentView] = useState(0);

  const cardsData = [
    {
      id: 1,
      title: 'Dji Fpv',
      image:
        'https://www.cliftoncameras.co.uk/uploads/Stylish%20and%20powerful%201.jpg',
    },
    {
      id: 2,
      title: 'Dji Mavic 3 Matrice',
      image:
        'https://www.ildrone.net/wp-content/uploads/2022/03/DJI-Matrice-30.jpg',
    },
    { id: 3, title: 'titolo3', image: '' },
    {
      id: 4,
      title: 'Dji Mavic 3',
      image:
        'https://www.dronepilotacademy.co.uk/app/uploads/2022/09/DSC00211-1-scaled-600x400.jpg',
    },
  ];

  const prevClick = () => {
    setCurrentView((prevView) =>
      prevView > 0 ? prevView - 1 : cardsData.length - 1
    );
  };

  const afterClick = () => {
    setCurrentView((prevView) =>
      prevView < cardsData.length - 1 ? prevView + 1 : 0
    );
  };

  return (
    <main className="main">
      <div className="container">
        <Card
          key={cardsData[currentView].id}
          title={cardsData[currentView].title}
          image={cardsData[currentView].image}
          prevClick={prevClick}
          afterClick={afterClick}
        />
      </div>

      <div id="bullets">
        {cardsData.map((data, index) => (
          <Bullets key={index} active={index === currentView} />
        ))}
      </div>
    </main>
  );
};

export default Main;
