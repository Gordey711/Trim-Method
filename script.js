function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
            b = prompt('На сколько оцените его?', '').trim();
    
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
      } else {
        console.log('eror');
        i--;
      }
    }
  }
  
  rememberMyFilms();