let title = document.querySelector('#title');
let type = document.querySelector('#type');
let button = document.querySelector('.button');
let films = document.querySelector('.films');

let page = 1
let array = [];

function createMovie() {
    let creatMov = document.querySelector()
}

button.addEventListener('click', async function () {
    let url = `http://www.omdbapi.com/?apikey=6c457b54&s=${title.value}&page=1&type=${type.value}`;
    let response = await fetch(url);
    let dataB = await response.json()
        .then(data => {
            showmovies(data.Search);
            console.log(data);
        })
        .catch(err => alert('Error!'));
})
function showmovies(data) {
    data.forEach(movie => {
        let divMovie = document.createElement('div');
        divMovie.classList.add = 'divMovie';
        divMovie.innerHTML = `
      
        
        `
    });

}