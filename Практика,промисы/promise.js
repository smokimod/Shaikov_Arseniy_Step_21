let button = document.querySelector('.button');
let value = document.querySelector('.value');
let nameP = document.querySelector('.name');
let description = document.querySelector('.desc');
let temp = document.querySelector('.temp');

button.addEventListener('click', async function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value.value + '&appid=ae09a6ba18cea78447f0d69c11e811ea')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let nameValue = data['name'];
            let tempValue = data['main']['temp'];
            let descriptionValue = data['weather'][0]['description'];

            nameP.innerHTML = nameValue;
            temp.innerHTML = descriptionValue;
            description.innerHTML = tempValue;
        })
        .catch(err => alert('wrong city name'))
})
