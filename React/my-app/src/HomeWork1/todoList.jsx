import React from "react";

const styles = {
  ul: {
    listStyle: "none",
    fontSize: 18,
  },
};

function Band() {
  return (
    <ul style={styles.ul}>
      <li>Nirvana</li>
      <li>Учасники: Курт Кобейн, Крист Новоселич, Дэйв Грол</li>
      <li>Альбомы: 1989 — Bleach, 1991 — Nevermind, 1993 — In Utero</li>
      <li>
        <img
          src="https://www.cdjournal.com/image/jacket/large/412006/4120061124.jpg"
          alt="1"></img>{" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/ru/b/b7/NirvanaNevermindalbumcover.jpg"
          alt="2"></img>{" "}
        <img
          src="http://3.bp.blogspot.com/-aawZd8vElSQ/VDH_JSNqtEI/AAAAAAAAD3w/0dwA5rQaefg/s1600/Nirvana--In%2BUtero%2BAlbum.jpg"
          alt="3"></img>
      </li>
    </ul>
  );
}

export default Band;
