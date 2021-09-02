function appendContent(to, content) {
  const el = document.querySelector(`.${to}`);
  const fragment = createFragmentTemplate(content);
  el.appendChild(fragment);
}

function createFragmentTemplate(str){
  const template = document.createElement("template");
  template.innerHTML = str;
  return template.content;
}

function createMovieCard(movie) {
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

function createNavigation() {
  return `Сортувати: <a href="${location.origin + location.pathname + '?sort=name'}">Назва</a>
    <a href="${location.origin + location.pathname + '?sort=date'}">Дата</a>`;
}