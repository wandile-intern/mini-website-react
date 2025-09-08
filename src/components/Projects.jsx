export default function Projects() {
  return (
    <section id="projects" className="zoom-effect">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>
            <a href="https://github.com/wandile-intern/weather-app-react">Weather App (React):</a>
          </strong>{" "}
          A simple, responsive weather application built with React that fetches real-time weather
          data from OpenWeatherMap. Users can search for any city worldwide and instantly see its
          weather information.
        </li>
        
        <li>
          <strong>
            <a href="https://github.com/wandile-intern/movie-search-react.git">
              Movie Search App (React):
            </a>
          </strong>{" "}
          A simple React application that lets users search for movies using the OMDB API. Search
          results display the movie poster, title, and release year. Built with React, CSS, and
          JavaScript.
        </li>
      </ul>
    </section>
  );
}
