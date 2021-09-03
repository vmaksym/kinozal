import { appendContent } from "./scripts.js"
import { createNavigation } from "./navigation.js"
import { createMovieCard } from "./card.js"

const sortMovies = data => {
    const sort = new URLSearchParams(location.search).get('sort');
    switch (sort) {
        case 'name':
            return data.sort((a,b) =>
                a.name.localeCompare(b.name));
        case 'date':
            return data.sort((a,b) =>
                new Date(a.date).getTime() - new Date(b.date).getTime());
        default:
            return data;
    }
}

// create menu
appendContent('navigation', createNavigation());

// get movies list
fetch('https://run.mocky.io/v3/d233f719-e34b-4c0e-bc21-103a931f4bc4')
  .then((response) =>
      response.json())
  .then(sortMovies)
  .then((data) =>
    data.forEach(movie =>
        appendContent('content', createMovieCard(movie))));