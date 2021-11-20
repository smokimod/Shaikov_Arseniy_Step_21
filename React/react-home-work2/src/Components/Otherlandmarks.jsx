import React from "react";
import { useParams } from "react-router";

export const Otherland = () => {
  const { id }= useParams();

  return (
    <div>
      <div>
        <h2>Скульптура Звездочета</h2>
        Скульптура Звездочета и солнечные часы Какая связь между белорусским
        Могилевым и Египтом? Наверняка есть, неспроста в городе установлены
        солнечные часы. Одна из самых любимых местными жителями
        достопримечательностей — скульптура Звездочета на площади Звезд. Рядом
        расположены 12 стульев, соответствующие знакам зодиака. Вся скульптурная
        композиция представляет собой солнечные часы. Причем действующие! По ним
        можно сверять время.
        <h1>{id}</h1>
      </div>
      <div>
        <h2> Этнографическая белорусская деревня </h2>К Могилёвскому зоосаду
        примыкает стилизованная «Этнографическая белорусская деревня» — музей
        под открытым небом. Нельзя сказать, что это на сто процентов
        этнографический музей, т.к. при его создании не были использованы
        старинные материалы. Это, скорее, красивая стилизация, которая
        рассказывает о жизни белорусов в 19 веке. Обряды, ритуалы, культура — в
        общем, все как полагается.
      </div>
      <div>
        <h2> Могилевская ратуша</h2>В Белоруссии всего несколько городских
        ратуш, одна из них находится в Могилеве. Как и в случае с Витебском,
        этот город получил магдебургское право и стал свободным. Возведение
        ратуши началось в 1578 году. Здание ратуши было самым высоким в городе.
        Сюда любили захаживать высокопоставленные гости Могилева. Например, со
        смотровой площадки городом любовалась императрица Екатерина II.
      </div>
    </div>
  );
};
