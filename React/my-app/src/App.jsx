import { BookInfo, Revue } from "./HomeWork1/toDoItem";
import Band from "./HomeWork1/todoList";
import Eat from "./HomeWork1/eat";
import Film from "./HomeWork2/film";
import Info from "./HomeWork2/persomalInfo";
import Time from "./HomeWork2/time";
import Pet from "./HomeWork2/pet";
//#1
function Rat() {
  return (
    <div className="main">
      <div className="block">
        <div className="border">
          <BookInfo></BookInfo>
        </div>
        <div className="Revue">
          <Revue></Revue>
        </div>
      </div>
      <hr></hr>
      {/* #2 */}
      <div className="block">
        <div className="border_two">
          <Band></Band>
        </div>
      </div>
      <hr></hr>
      {/* #3 */}
      <div>
        <div className="border_eat">
          <Eat></Eat>
        </div>
        <div className="recipe"></div>
      </div>
      <hr></hr>
      {/* #1 */}
      <div className="homeWorkTwo">
        <div className="film">
          <Film
            name="Sreck 2"
            year="2004"
            reg="Эндрю Адамсон"
            company="Dream works"
            img="https://upload.wikimedia.org/wikipedia/ru/thumb/f/ff/Shrek_2.jpg/269px-Shrek_2.jpg"></Film>
        </div>
        <div>
          <Info
            name="Shaikov Arseniy Evgenivich"
            phone="+375335281"
            email="sasat@lapu.mail.ru"
            city="Mogilev"
            img="https://icdn.lenta.ru/images/2020/01/28/17/20200128170822958/square_320_9146846fb3b1bfae5672755bc1896214.jpg"></Info>
        </div>
        <div>
          <Time time={new Date()}></Time>
        </div>
        <div>
          <Pet name='Кот' Desc='Он русский' img='https://i.pinimg.com/564x/0d/5d/ce/0d5dce83160e5f83cc488075cd1bdd0d.jpg'></Pet>
        </div>
      </div>
    </div>
  );
}

export default Rat;
