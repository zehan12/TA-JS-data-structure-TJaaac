let movies = [
  {
    id: '1',
    title: 'Game Night',
    year: '2018',
    genres: ['Action', 'Comedy', 'Crime'],
    releaseDate: '2018-02-28',
    actors: ['Rachel McAdams', 'Jesse Plemons', 'Jason Bateman'],
  },
  {
    id: '2',
    title: 'Area X: Annihilation',
    year: '2018',
    genres: ['Adventure', 'Drama', 'Fantasy'],
    releaseDate: '2018-02-23',
    actors: ['Tessa Thompson', 'Jennifer Jason Leigh', 'Natalie Portman'],
  },
  {
    id: '3',
    title: 'Hannah',
    year: '2017',
    genres: ['Drama'],
    releaseDate: '2018-01-24',
    actors: ['Charlotte Rampling', 'Andr Wilms', 'Phanie Van Vyve'],
  },
];

/*
Go through the variable named movies properly before solvinf the exercises.
Use the variable named movies to solve the requirement below.
*/

// 1. Log the value of the title key in the first movie of the array named `movies`

movies[0].title; //'Game Night'

// 2. Log the value of the title key in the last movie of the array named `movies`

movies[2].title //'hannah'

// 3. Log the value of the title key in the second movie (index 1) of the array named `movies`



// 4. Log the value of the year key in the first movie of the array named `movies`

movies[0].year //'2018'

// 5. Log all the named of actors (key named actors) of the first movie

movies[0].actors //'Rachel McAdams', 'Jesse Plemons', 'Jason Bateman'

// 6. Log the name of the first actor of the first movie

movies[0].actors[0] //'Rachel McAdams'

// 7. Log the name of the last actor of the first movie

movies[0].actors[2] //'Jesse Plemons'

// 8. Log the name of the second actor (index 1) of the first movie

movies[0].actors[1] //'Jesse Plemons'

// 9. Log the name of the second actor (index 1) of the second movie

movies[1].actors[1] //'Jennifer Jason Leigh'

// 10. Log the name of the last actor of the thrid movie

movies[2].actors[2] //'Phanie Van Vyve'

// 11. Log the name of the second actor (index 1) of the third movie

movies[2].actors[1] //'Andr Wilms'

// 12. Log all the genres of the third movie

movies[2].genres //'Drama'

// 13. Log all the genres of the first movie

movies[0].genres //'Action', 'Comedy', 'Crime'

// 14. Log the first genres of the first movie

movies[0].genres[0] //'Action'

// 15. Log the first genres of the second movie

movies[2].genres[0] //'Drama'

// 16. Log the last genres of the first movie (using the length property of array)

movies[0].genres[length]

// 17. Log the first genres of the second movie (using the length property of array)

movies[length-1].genres[0] //'Adventure'

// 18. Log all the genres of the first movie one by one


for ( genre of movies[0].genres){
  console.log(genre);
}

//Action
//Comedy
//Crime

// 19. Log all the genres of the second movie one by one

function genreOf(array){
  for ( genre of array ) { 
      console.log(genre);
  }
 }

 genreOf(movies[1].genres);

//Adventure
//Drama
//Fantasy

// 20. Log if the first actor of the first movie is `Rachel McAdams` or not (You have to log true or false)


function rachel(array){
  return array == `Rachel McAdams` 
}

rachel(movies[0].actors[0]);

//true

// 21. Log if the second actor (index 1) of the second movie is `Natalie Portman` or not (You have to log true or false)


function natalie(array){
  if ( array == `Natalie Portman` ){
    return true ; 
  } else {
    return false ;
  }
}

natalie(movies[1].actors[1]);

//false 

// 22. Log if the year of all three movies is greater than `2017` or not one by one. (Log true or false)


function compareYear( array1 , array2 , array3 ){
  if ( array1 > 2017 && array2 > 2017 && array3 > 2017 ) {
    return true;
  } else {
    return false;
  }

}

compareYear( movies[0].year, movies[1].year, movies[2].year );


// 23. Log the title of all three movies one by one.

for(i=0;i<=movies.length;i++){
  console.log(movies[i].title)
}

// 24. Log if the title of the first movie is `Hannah` or not

// movies.forEach(element => {
//   console.log(movies[0].actors,movies[1].actors,movies[2].actors);
 
// });

for(i=0;i<movies.length;i++){
  console.log(movies[i].actors)
}

// 25. Log the number of actors in all three movies one by one

for ( m of movies ){
  for ( a of m.actors ){
    console.log(a)
  }
}

// 26. Log the number of genres in all three movies one by one

for ( m of movies ){
  for ( g of m.genres){
    console.log(g)
  }
}

// 27. Log the name of all the movies with more than 1 genre

for ( m of movies ){
  if ( m.genres.length > 1 ){
    console.log(m.title)
  }
}

// 28. Log the name of all the movies with more than 1 actors

for ( m of movies ){
  if ( m.actors.length > 1 ){
    console.log(m.title)
  }
}

// 29. Log the name of all the movies with exactly 3 actors

for ( m of movies ){
  if ( m.actors.length == 3 ){
    console.log(m.title)
  }
}

// 30. Log the name of all the movies with year `2018`

if ( movies[0].year == '2018' ){
  console.log(movies[0].title)
} if ( movies[1] == '2018' ){
  console.log(movies[1].title)
} if ( movies[2].year == '2018'){
  console.log ( movies[2].title)
}
  

