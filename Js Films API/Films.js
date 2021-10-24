let title = document.querySelector('#title');
let type = document.querySelector('#type');
let button = document.querySelector('.button');

let array = [];
button.addEventListener('click', async function () {
    let url = await fetch(`http://www.omdbapi.com/?apikey=6c457b54&s=${title.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let nameValue = data['Search'][0]['Year']
            console.log(nameValue)
            let obj = {
                name: data['Search'][1]['Year'],
            }
            console.log(obj)

        })
        .catch(err => alert('Movie not found!'));
})