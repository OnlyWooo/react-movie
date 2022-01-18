import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../components/Details";
import Loading from "../components/Loading";
import Details from "../components/Details";
// import { useEffect } from "react/cjs/react.development";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json"?movie_id=${id}`)
    ).json();
    setDatas(json.data.movie);
    setLoading(false);
  };
  // console.log(datas);
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <Details
            background_img={datas.background_image_original}
            cover_img={datas.medium_cover_image}
            rating={datas.rating}
            runtime={datas.runtime}
            year={datas.year}
            title={datas.title}
            genres={datas.genres}
            description={datas.description_full}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
