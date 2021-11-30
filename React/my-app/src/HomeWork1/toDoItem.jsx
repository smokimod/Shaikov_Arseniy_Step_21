import React from "react";

const styles={
    ul:{
        listStyle:"none",
        fontSize: 18,
    }
}

 function BookInfo(){
    return(
        <ul style={styles.ul}>
             <li>Любимая книга: Граф Монте-Кристо</li>
             <li>Автор: Александр Дюма</li>
             <li>Жанр: Роман</li>
             <li>Сколько страниц: 1000+</li>  
        </ul>
    )
}

 function Revue(){
    return(
        <ul style={styles.ul}>
            <li>mariyatomashova</li>
             <li>21 марта 2018</li>
             <li>Потрясающая книга, одна из лучших, какие я только читала!Если задаете себе вопрос ,читать ли эту книгу?
                 Ответ: да,да,да и еще раз да. 
                 Лично мне хотелось после прочтения, еще и еще, несмотря на объём книги.
                 Я готова Дюма читать в любых объёмах . Один из моих любимых писателей.</li>
        </ul>
    )
}
export {BookInfo,Revue}