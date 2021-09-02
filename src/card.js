export function createMovieCard(movie) {
  return `<article class="card">
    <header>
      <h2>${movie.name}</h2>      
    </header>
    <section class="card__content">
      <img src="${movie.thumb}" alt="${movie.name}">
      <section>
        <p>${movie.date}</p>
        <hr>
        <p>${movie.description}</p>
        <hr>
        <p>Director: ${movie.director}</p>
      </section>
    </section>
  </article>`;
}