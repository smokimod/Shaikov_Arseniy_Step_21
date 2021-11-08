let main = document.querySelector('.main_block')
let title = document.querySelector('#title');
let type = document.querySelector('#type');
let button = document.querySelector('.button');
let buttoms = document.querySelector('.buttoms');
let films = document.querySelector('.films');
let infoMovie = document.querySelector('.info');

let allMovies;
let totalPages;
let page = 1;

button.addEventListener('click', () => {
	let url = `http://www.omdbapi.com/?apikey=6c457b54&s=${title.value}&page=${page}&type=${type.value}`
	fetch(url)
		.then(async dataB => await dataB.json())
		.then(async dataB => {
			console.log(dataB);
			let d = Math.ceil(dataB.totalResults / 10);
			totalPages = d;
			allMovies = dataB;
			let bag = document.querySelectorAll('.btn-pag');
			for (let j = 0; j < bag.length; j++) {
				bag[j].remove();
			}
			for (let i = 1; i < totalPages; i++) {
				let btn = document.createElement('button');
				btn.classList.add('btn-pag');
				btn.innerHTML = i;
				buttoms.appendChild(btn);
			}
			showMovies(dataB.Search);
			let filmsMaxLength = films.childNodes.length;
			if (filmsMaxLength > 10) {
				let deleteMovies = document.querySelectorAll('.divMovie');
				for (let i = 10; i < deleteMovies.length; i++) {
					deleteMovies[i].remove();
				}
			}
			if (main.contains(infoMovie.childNodes[1])) {
				console.log(infoMovie.childNodes[1])
				infoMovie.childNodes[1].remove()
			}
		})
		.catch(error => {
			alert('Movie Not Found!')
			let deleteMoviesFromPage = document.querySelectorAll('.divMovie');
			for (let i = 0; i < deleteMoviesFromPage.length; i++) {
				deleteMoviesFromPage[i].remove();
			}
			if (main.contains(infoMovie.childNodes[1])) {
				console.log(infoMovie.childNodes[1])
				infoMovie.childNodes[1].remove()
			}
			page = 1
		})
})

function pageChenger(event) {
	let deleteMoviesFromPage = document.querySelectorAll('.divMovie');
	for (let i = 0; i < deleteMoviesFromPage.length; i++) {
		deleteMoviesFromPage[i].remove();
	}
	page = event.target.textContent;
	console.log(page);
	let getPage = `http://www.omdbapi.com/?apikey=6c457b54&s=${title.value}&page=${page}&type=${type.value}`
	fetch(getPage)
		.then(dataB => dataB.json())
		.then(dataB => {
			showMovies(dataB.Search);
			if (main.contains(infoMovie.childNodes[1])) {
				console.log(infoMovie.childNodes[1])
				infoMovie.childNodes[1].remove()
			}
		})
}
buttoms.addEventListener('click', pageChenger);

function showMovies(dataB) {
	dataB.forEach(movie => {
		let { Poster, Title, Type, Year, imdbID } = movie;
		let divMovie = document.createElement('div');
		divMovie.className = 'divMovie';
		divMovie.innerHTML = `
			<div><img src="${Poster}" alt ="Poster Not Found" class='poster' style='font-size: 20px; font-weight: bolder'></div>
			<div class='films_info'>
			<div >${Title}</div>
			<div>${Type}</div>
			<div>${Year}</div>
			<button  id='${imdbID}' class="details" style="max-width: 80px" onclick="return movieInfo(this)">Details</button>
			</div>
			`
		films.appendChild(divMovie);
	})
}

function movieInfo(event) {
	war = event.id;
	let url2 = `http://www.omdbapi.com/?apikey=6c457b54&i=${war}`
	fetch(url2)
		.then(data => data.json())
		.then(data => {
			showOneMovie(data);
			let desc = document.querySelectorAll('.discription')
			for (let i = 0; i < desc.length; i++) {
				desc[i].remove()
			}
			showOneMovie(data);
		})
}

function showOneMovie(data) {
	let { Poster, Title, Type, Actors, BoxOffice, Genre, Plot, Released } = data;
	let diva = document.createElement('div');
	diva.className = 'discription';
	diva.innerHTML = `
			<div class='posterOne'><img src="${Poster}" alt ="Poster Not Found"  style='font-size: 20px; font-weight: bolder'></div>
			<div class='diva'>
			<div >${Title}</div>
			<div >${Type}</div>
			<div >${Actors}</div>
			<div >${BoxOffice}</div>
			<div>${Genre}</div>
			<div>${Plot}</div>
			<div>${Released}</div>
			</div>
			`
	infoMovie.appendChild(diva);
}

