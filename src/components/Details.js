import styles from "./Details.module.css";
import { Link } from "react-router-dom";

function Details({
  title,
  background_img,
  cover_img,
  genres,
  rating,
  runtime,
  description,
  year,
}) {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.gohome}></Link>
      <img className={styles.bg} src={background_img} alt={title} />
      <div className={styles.movie_div}>
        <img src={cover_img} alt={title} />
        <div>
          <h1>{title}</h1>
          <ul className={styles.movie_li}>
            <li>Rating: {rating}</li>
            <li>Runtime: {runtime}</li>
            <li>
              Genres:
              {genres.map((genre) => (
                <li>{genre}</li>
              ))}
            </li>
            <li>Year: {year}</li>
          </ul>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Details;
