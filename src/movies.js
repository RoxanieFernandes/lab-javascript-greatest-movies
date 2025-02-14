// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((movie) => movie.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  const dramaStevenSpielberg = moviesArray.filter(
    (movie) =>
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
  );
  return dramaStevenSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length){
        return 0
    }
    let sum = moviesArray.reduce((acc,movie) => {
        if(!movie.score){
            movie.score = 0
        }
        return acc + movie.score
    }, 0)
    let average = Number ((sum/moviesArray.length).toFixed(2))
    return average
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let allDrama = moviesArray.filter(movie => movie.genre.includes('Drama'))
    return scoresAverage(allDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newMoviesArray = [...moviesArray]
    newMoviesArray.sort((a, b) => {
        if(a.year > b.year){
            return 1;
        } else if (b.year > a.year){
            return -1;
        } else {
            if(a.title > b.title){
                return 1;
            } else if (b.title > a.title){
                return -1;
            } 
            return 0
        }
    })
    return newMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles 
function orderAlphabetically(moviesArray) {
    const titlesArray = moviesArray.map(movie => movie.title)
    titlesArray.sort();
    return titlesArray.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
