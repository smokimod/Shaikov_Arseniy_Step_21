import React from "react";

const styles={
    ul:{
        listStyle:"none",
        fontSize: 18,
    }
}

 function Eat(){
    return(
        <div className="disc">
            <h2>Стейки из красной рыбы</h2>
        <ul style={styles.ul}>
             <li>Рыба красная - 4 стейка</li>
             <li>Соль крупная</li>
             <li>Имбирь сушеный молотый - 1 щепотка</li>
             <li>Масло оливковое или подсолнечное</li>
             <li>Зелень - для подачи</li>
        </ul>
        <div className="descriptionOFMeal">Добавить в сковороду немного масла, обжарить на нем до мягкости предварительно отжатые от лишней жидкости кубики баклажанов. Обжаренные баклажаны откинуть на дуршлаг. Теперь осталось обжарить все на том же масле кубики перца и тоже откинуть их на дуршлаг.</div>
        <div><img src="https://img1.russianfood.com/dycontent/images_upl/170/sm_169814.jpg" alt="1" /></div>
        </div>
    )
}
    // function Recipe(){
    //     return(
    //    ''
    //     )
    // }

export default Eat