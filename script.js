import { films } from './starwars/films.js';
import { people } from './starwars/people.js';
import { species } from './starwars/species.js';
import { planets } from './starwars/planets.js';


let movieArray = films.map((movie) => {
    return {
        movieTitle: movie.title,
        movieDirector: movie.director,
        movieRelease: movie.release_date,
        episodeID: movie.episode_id
    }
});

movieArray.sort((a, b) => {
    return a.episodeID - b.episodeID;
})

console.log(movieArray);

function createElement(createString) {
    return document.createElement(createString);
};

function appendElement(baseElement, attachElement) {
    return baseElement.append(attachElement);
};

function textNode(textString) {
    return document.createTextNode(textString)
};

let movieGridDiv = document.querySelector('#movieGridDiv');
let movieTileDiv = document.querySelector('#movieTileDiv')

movieArray.forEach((movie) => {
    let movieTitleH2 = createElement('h2');
    let movieDirectorP = createElement('p');
    let movieReleaseP = createElement('p');
    let movieTitleText = textNode(movie.movieTitle);
    let movieDirectorText = textNode(`Directed by: ${movie.movieDirector}`);
    let movieReleaseText = textNode(`Release Date: ${movie.movieRelease}`);

    appendElement(movieTitleH2, movieTitleText);
    appendElement(movieTileDiv, movieTitleH2);
    appendElement(movieDirectorP, movieDirectorText);
    appendElement(movieTileDiv, movieDirectorP);
    appendElement(movieReleaseP, movieReleaseText);
    appendElement(movieTileDiv, movieReleaseP);

});

let peopleArray = people.map((person) => {
    return {
        personName: person.name,
        personHeight: person.height,
        personMass: person.mass,
        personBirth: person.birth_year
    }
});

console.log(peopleArray);

let peopleGridDiv = document.querySelector('#peopleGridDiv');
let peopleTileDiv = document.querySelector('#peopleTileDiv');

peopleArray.forEach((person) => {
    let peopleName = createElement('h2');
    let peopleHeight = createElement('p');
    let peopleMass = createElement('p');
    let peopleBirth = createElement('p');
    let peopleNameText = textNode(person.personName);
    let peopleHeightText = textNode(`Height: ${person.personHeight}`);
    let peopleMassText = textNode(`Mass: ${person.personMass}`);
    let peopleBirthText = textNode(`Birthday: ${person.personBirth}`)

    appendElement(peopleName, peopleNameText);
    appendElement(peopleTileDiv, peopleName);
    appendElement(peopleHeight, peopleHeightText);
    appendElement(peopleTileDiv, peopleHeight);
    appendElement(peopleMass, peopleMassText);
    appendElement(peopleTileDiv, peopleMass);
    appendElement(peopleBirth, peopleBirthText);
    appendElement(peopleTileDiv, peopleBirth);
});