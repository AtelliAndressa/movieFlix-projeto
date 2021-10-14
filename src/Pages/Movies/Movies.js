import Navbar from "../../Components/Navbar/Navbar";
import { keyApi } from "../../Components/Data/DataComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import CardMovie from "../../Components/Card/Card";
import { StyledContainerCard } from "../Movies/Movies.styled";
import Carousel from "../../Components/Carousel/Carousel";
import "./Movies.css";

/**
 * listagem filmes,
 * detalhes dos filmes
 * valores
 * botão de comprar
 */

async function getMovies() {
  const listMovies = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${keyApi}&language=en-US&page=1`
  );
  console.log(listMovies);
  return listMovies.data.results;
}

async function filterListMovies(filterOption = "") {
    const genre  = filterOption === "" ? "" : filterOption.target.value;
    const filterGenreMovies = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key="+keyApi +"&language=pr-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2021&with_genres=" +
        genre +"&with_watch_monetization_types=flatrate");
        console.log("https://api.themoviedb.org/3/discover/movie?api_key="+keyApi +"&language=pr-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2021&with_genres=" +
        genre +"&with_watch_monetization_types=flatrate")
    return filterGenreMovies.data.results;
  }

export default function Movies() {
  const [listMovie, setListMovie] = useState([]);
  const [filterGenre, setFilterGenre] = useState();

  useEffect(() => {
    (async () => {
      setListMovie(await getMovies());
      setFilterGenre(await filterListMovies());
    })();
  }, []);

  const renderListGenre = async (props) => {
    setFilterGenre(await filterListMovies(props));
  }

console.log(filterGenre)

  return (
    <div>
      <Navbar />
      <h1>Lançamentos</h1>
      <StyledContainerCard>
        <Carousel show={6}>
          {listMovie.map((movie) => {
            return <CardMovie movie={movie} key={movie.id}/>;
          })}
        </Carousel>
      </StyledContainerCard>

      <div className="selectGenre">
        <h3>Genêro</h3>
        <select name="filterSelect" onChange={renderListGenre}>
          <option value="28">Ação</option>
          <option value="12">Aventura</option>
          <option value="16">Animação</option>
        </select>
      </div>
      <StyledContainerCard>
        <Carousel show={6}>
          {filterGenre === undefined ? "" : filterGenre.map((movie) => {
            return <CardMovie key={"filterGenre" + movie.id} movie={movie} />;
          })}
        </Carousel>
      </StyledContainerCard>
    </div>
  );
}
