import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom"; //sempre acrescentar o dom no final
import { keyApi } from "../../Components/Data/DataComponent";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { MyContext } from "../../Context/Context";
import { DetalsMovies, ContainerDetals } from "../Product/Product.styled";
import "./Product.css";
import Youtube from "react-youtube";

//pagina que mostra os detalhes de cada filme

async function getMovies(movie_id) {
  const moviesId = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${keyApi}&language=pt-BR&append_to_response=videos`);
  return moviesId.data;
}

async function getElenco(movie_id) {
  const elencoId = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${keyApi}`
  );
  return elencoId.data.cast;
}

async function getRecommendation(movie_id) {
  const recommendationId = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${keyApi}&language=pt-BR`
  );
  return recommendationId.data.results;
}


export default function Product() {
  const produto = useParams();
  const idMovie = produto.id;
  const [movie, setMovie] = useState();
  const [recommendation, setRecomendation] = useState([]);
  const [elenco, setElenco] = useState([]);
  const { addMovieCart } = useContext(MyContext);

  useEffect(() => {
    (async () => {
      setMovie(await getMovies(idMovie));
      setRecomendation(await getRecommendation(idMovie));
      setElenco(await getElenco(idMovie));
    })();
  }, []);

  if (
    movie === undefined ||
    recommendation === undefined ||
    elenco === undefined
  ) {
    return <></>;
  }

  return (
    <div>
      <Navbar />
      <ContainerDetals>
        <DetalsMovies>
          <img
            className="imgPoster"
            src={"http://image.tmdb.org/t/p/w154" + movie.poster_path}
          />

          <h2>{movie.title}</h2>

          <span>Data Lançamento: {movie.release_date}</span>
          <span>Tempo de duração: {movie.runtime} </span>
          <span>Pontuação: {movie.vote_average}</span>

          <button onClick={() => addMovieCart(movie)}>Comprar</button>
          <div className="textoSessao" >
            Descrição: <br /> <span className="texto">{movie.overview}</span>
          </div>
          <div className="textoSessao" >
          Trailer:
          <span className="youtube">
          {movie.videos.results.length > 0 ? (<Youtube videoId={movie.videos.results[0].key} />) : " "}
          </span>
          </div>

          <div className="textoSessao">
            Elenco:
            <div className="texto">
              {elenco.map((elencos) => {
                return (
                  <div className="cardElencos">
                    <img
                      className="imgElenco"
                      src={
                        elencos.profile_path === null
                          ? "/img/sem-foto.jpg"
                          : "https://image.tmdb.org/t/p/w45" +
                            elencos.profile_path
                      }
                    />
                    <span> {elencos.name} </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="textoSessao">
          Recomendações:
            <div className="texto">
            
              {recommendation.map((recommendations) => {
                return (
                  <div className="cardRecomendacoes">
                    <a href={"/movies/" + recommendations.id}>
                    <img
                      src={
                        recommendations.poster_path === null
                          ? "/img/sem-foto.jpg"
                          : "https://image.tmdb.org/t/p/w45" +
                            recommendations.poster_path
                      } 
                    /> </a>
                    <span> {recommendations.title} </span>
                  </div>
                );
              })}
            </div>
          </div>

          <span></span>
        </DetalsMovies>
      </ContainerDetals>
    </div>
  );
}
