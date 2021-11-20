export const ColorChange = (e) => {
  let answers = [
    "Бесспорно",
    "Предрешено",
    "Никаких сомнений",
    "Определённо да",
    "Можешь быть уверен в этом",
    "Мне кажется — «да»",
    "Вероятнее всего",
    "Хорошие перспективы",
    "Знаки говорят — «да»",
    "Да",
    "Пока не ясно, попробуй снова",
    "Спроси позже",
    "Лучше не рассказывать",
    "Сейчас нельзя предсказать",
    "Сконцентрируйся и спроси опять",
    "Даже не думай",
    "Мой ответ — «нет»",
    "По моим данным — «нет»",
    "Перспективы не очень хорошие",
    "Весьма сомнительн",
  ];
  let bb = document.querySelector(".ball_main");
  let button = document.querySelector("button");
  let radndomAnswer = Math.floor(Math.random() * answers.length);

  if (radndomAnswer <= 4) {
    bb.style.backgroundColor = "blue";
    let result = answers.filter((resm, index) => index <= 4);
    let randomBlue = Math.floor(Math.random() * result.length);
    button.textContent = result[randomBlue];
  } else if (radndomAnswer <= 9) {
    bb.style.backgroundColor = "green";
    let resultGreen = answers.filter((resm, index) => index > 4 && index <= 9);
    let randomBGreen = Math.floor(Math.random() * resultGreen.length);
    button.innerHTML = resultGreen[randomBGreen];
  } else if (radndomAnswer <= 14) {
    bb.style.backgroundColor = "yellow";
    let resultYellow = answers.filter(
      (resm, index) => index > 9 && index <= 14
    );
    let randomYellow = Math.floor(Math.random() * resultYellow.length);
    button.innerHTML = resultYellow[randomYellow];
  } else if (radndomAnswer <= 19) {
    bb.style.backgroundColor = "red";
    let resultRed = answers.filter((resm, index) => index > 14 && index <= 19);
    let randomRed = Math.floor(Math.random() * resultRed.length);
    button.innerHTML = resultRed[randomRed];
  }

  return console.log(radndomAnswer);
};
