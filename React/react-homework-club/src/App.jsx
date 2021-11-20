import React from "react";
import { InfoField } from "./Components/Information";
import { Magicball } from "./MagicBall/Magicball";

class App extends React.Component {
  common = {
    clubs: [
      {
        name: "Челси",
        city: "Фулем",
        year: 1905,
        herb: "https://chelseanews.ru/templates/chelseanova/images/site_icons/site_logo_128.png",
        goals: 929,
        wins: 1992,
        members: [
          "Глебус Глебус",
          "Даня Кабальеро",
          "Эдуар Менди",
          "Антонио Рюдигер",
          "Даня Алонсо",
          "Курт Зума",
          "Мейсон Маунт",
          "Тимо Вернер",
          "Даня Глебус",
        ],
      },
      {
        name: "Барселона",
        city: "Одесса",
        year: 1909,
        herb: "https://pngimg.com/uploads/fcb_logo/fcb_logo_PNG19.png",
        goals: 729,
        wins: 192,
        members: [
          "КепаГлебус Аррисабалага",
          "Вильфредо Кабальеро",
          "Эдуар Менди",
          "Антонио Рюдигер",
          "Глебус Алонсо",
          "Курт Зума",
          "Мейсон Маунт",
          "Тимо Вернер",
          "Чарли Мусонда",
        ],
      },
      {
        name: "Ливерпуль",
        city: "Минск",
        year: 1922,
        herb: "https://mlteh.com/wp-content/uploads/liverpool.png",
        goals: 659,
        wins: 1292,
        members: [
          "Глебус Аррисабалага",
          "Вильфредо Кабальеро",
          "Эдуар Менди",
          "Антонио Рюдигер",
          "Глебус Алонсо",
          "Курт Зума",
          "Мейсон Маунт",
          "Тимо Вернер",
          "Чарли Мусонда",
        ],
      },
    ],
  };
  render() {
    return (
      <div>
        <div className="main">
          {this.common.clubs.map((item) => {
            return <InfoField item={item} key={item.name + Math.random()} />;
          })}
          <div className="ball_main">
            <Magicball />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
