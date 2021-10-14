import { useHistory } from "react-router-dom";
import { MyContext } from "../../Context/Context";
import { useContext } from "react";
import "./Card.css";

//pagina principal que mostra todos os filmes

export default function CardMovie(props) {
  const { addMovieCart } = useContext(MyContext);

  const history = useHistory();

  function details(id) {
    history.push(`/movies/${id}`);
  }

  return (
    <div className="card">
      <img
        className="imgPoster"
        src={"http://image.tmdb.org/t/p/w154" + props.movie.poster_path}
        onClick={() => details(props.movie.id)}
      />
      <span className="text-title" onClick={() => details(props.movie.id)}>
        {" "}
        {props.movie.title}
      </span>

      <span>{"R$ " + (Number(props.movie.vote_average) * 10).toFixed(2)}</span>
      <div className="buttonMovies">
        <button onClick={() => addMovieCart(props.movie)}>Comprar</button>
      </div>
    </div>
  );
}
