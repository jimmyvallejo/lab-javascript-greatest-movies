// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   let newArray = moviesArray.map(element => element.director)
   return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesAmount = moviesArray.filter(obj => obj.genre.includes('Drama') && obj.director == "Steven Spielberg")
    
    return moviesAmount.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    let newArray = moviesArray.map(element => element.score);
    let average = newArray.reduce(function(accumulator, currentValue){
        if (!currentValue) {
            return accumulator + 0
        } else {
         return accumulator + currentValue};
    })/moviesArray.length;
    return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let filtered = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if (filtered.length === 0){
        return 0;
    } 
    
    let average = filtered.map(element => element.score)
    let final = average.reduce(function(accumulator, currentValue){
        if(!currentValue){
            return accumulator + 0;
        } else {
            return accumulator + currentValue;
        }
        
        
    })/filtered.length;
    return Number(final.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let yearDate = moviesArray.map(element => element)
  yearDate.sort(function(a, b){
     if(a.year === b.year){
        return a.title.localeCompare(b.title);
     } else { 
        return a.year - b.year;
     }
  });
  return yearDate;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let yearDate = moviesArray.map(element => element.title)
    return yearDate.sort(function(a, b){
        return a.localeCompare(b);
    }).slice(0, 20);
   

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
