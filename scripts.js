function appendContent(content) {
    const el = document.querySelector(".content");
    el.appendChild(content);
  }
  function createFragmentTemplate(str){
    var template = document.createElement("template");
    template.innerHTML = str;
    return template.content;
  }
  function createMovieCard(movie) {
    const article = `<article class="card">
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
    return createFragmentTemplate(article);
  }