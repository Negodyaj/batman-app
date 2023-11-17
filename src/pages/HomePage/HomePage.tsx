import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Movie } from "../../models/movie";
import "./HomePage.scss";

export function HomePage() {
  const movies: Movie[] = [
    {
      name: "Batman Begins",
      imdb: 8.2,
      tags: ["action", "adventure"],
      description: `Batman Begins explores the origins of the Batman legend and the Dark Knight's emergence as a force...`,
      watchLink: "https://google.com",
      detailsLink: "https://ya.ru",
      imageUrl: "./images/movie1.png",
    },
    {
      name: "The Dark Knight",
      imdb: 9.0,
      tags: ["action", "crime", "drama"],
      description: `Christian Bale and director Christopher Nolan reunite following their blockbuster success with...`,
      watchLink: "https://google.com",
      detailsLink: "https://ya.ru",
      imageUrl: "./images/movie2.png",
    },
    {
      name: "The Dark Knight Rises",
      imdb: 8.4,
      tags: ["action", "adventure"],
      description: `Directing one of the most anticipated films of the year, Christopher Nolan returns to Gotham to complete his...`,
      watchLink: "https://google.com",
      detailsLink: "https://ya.ru",
      imageUrl: "./images/movie3.png",
    },
    {
      name: "Batman Begins 2",
      imdb: 8.2,
      tags: ["action", "adventure"],
      description: `Batman Begins explores the origins of the Batman legend and the Dark Knight's emergence as a force...`,
      watchLink: "https://google.com",
      detailsLink: "https://ya.ru",
      imageUrl: "./images/movie1.png",
    },
    {
      name: "The Dark Knight 2",
      imdb: 9.0,
      tags: ["action", "crime", "drama"],
      description: `Christian Bale and director Christopher Nolan reunite following their blockbuster success with...`,
      watchLink: "https://google.com",
      detailsLink: "https://ya.ru",
      imageUrl: "./images/movie2.png",
    },
  ];

  function handleButtonCLick() {
    alert("clicked");
  }

  function handleMouseEnter() {
    console.log("enter");
  }

  return (
    <section className="home-page">
      <p>HomePage works!</p>
      {movies.map((movie, index) => (
        <MovieCard key={`movie-${index}`} movie={movie} secretNumber={index} />
      ))}
      <button onClick={handleButtonCLick} onMouseEnter={handleMouseEnter}>
        HomePage Press me
      </button>
    </section>
  );
}
