// console.log("hello world");

// iteration 1: All directors? Get the array of all directors.
// Bonus: it seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors

function getAllDirectors(moviesArray) {
    const directorArray = moviesArray.map((value) =>
        value.director);

    console.log([...new set(directorArray)]);
    return directorArray;
}
const getAllDirectors1 = (moviesArray) =>
    moviesArray.map((value) => value.director);


// itiration 2: Steven Spielberg. the best? how many drama did Steven Spielberg direct?

function howManyMovies(moviesArray) {
    const filteredMovies = moviesArray.filter((value) =>
        value.director === "Steven Spielberg" &&
        value.genre.includes("Drama"));
    return filteredMovies.length;
}


// itiration 3: All scores average - get the average of all scores with 2 descimals

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const sum = moviesArray.reduce((prev, value) => {
        if (value.score !== undefined) {
            return value.score + prev;
        }
        return prev;
    }, 0);
    return parseFloat((sum / moviesArray.length).toFixed(2));
}

// iteration 4: Drama movies - get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) =>
        movie.genre.includes("Drama"));
    if (dramaMovies.length === 0) {
        return 0;
    }
    const sum = dramaMovies.reduce((prev, movie) => {
        if (movie.score !== undefined) {
            return prev + movie.score;
        }
        return prev;
    }, 0);
    const averageScore = sum / dramaMovies.length;
    return parseFloat(averageScore.toFixed(2));
}

// itiration 5:  Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    // create a shallow copy of the original array to avoid mutation

    const sortedMovies = [...moviesArray];
    sortedMovies.sort((movieA, movieB) => {
        if (movieA.year !== movieB.year) {
            return movieA.year - movieB.year;
            // sorted by year in ascending order
        } else {
            // if the movies have the same year, sort by title in alphabetical order 
            return movieA.title.lovalecompare(movieB.title);
        }
    });
    return sortedMovies;
}


// itiration 6:

function orderAlphabetically(moviesArray) {
    const sortedMovies = [...moviesArray];
    sortedMovies.sort((movieA, movieB) => {
        return movieA.tittle.localeCompare(movieB.title);
    })
    const tittles = sortedMovies.map((movie) => movie.title);
    return tittles.slice(0, 20);
}