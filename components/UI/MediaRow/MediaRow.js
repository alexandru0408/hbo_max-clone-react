import { useState, useEffect } from "react";
import { shuffleArray } from "../../util/utilities";
import axios from "axios";
import Link from "next/link";

const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${props.endpoint}&api_key=8e36ebdb3d86e880fffd99dbe59dffb1&language=en-US`
        );
        setMoviesData(shuffleArray(response.data.results));
        setLoadingData(false);
        console.log("Success Response For " + props.title);
        console.log(response);
      } catch (error) {
        console.log("Error Response For " + props.title);

        console.error(error);
      }
    }
    getMovies();
  }, [props]);

  const loopComp = (comp, digit) => {
    let thumbnails = [
      <Skeleton key={"a"} />,
      <Skeleton key={"b"} />,
      <Skeleton key={"c"} />,
      <Skeleton key={"d"} />,
      <Skeleton key={"e"} />,
      <Skeleton key={"f"} />,
      <Skeleton key={"g"} />,
      <Skeleton key={"h"} />,
      <Skeleton key={"i"} />,
    ];
    // for (let index = 0; index <= digit; index++) {
    //   thumbnails.push(comp);
    // }
    return thumbnails;
  };

  const showThumbnails = (type) => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
          return (
            <Thumbnail
              key={movie.id}
              movieData={movie}
              type={type}
              mediaType={props.mediaType}
            />
          );
        });
  };

  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">
        {showThumbnails(props.type)}
        {/* {loopComp(<Thumbnail />, 10)} */}
      </div>
    </div>
  );
};

const Thumbnail = (props) => {
  const thumbnailSize = (type) => {
    if (props.type === "large-v") {
      return "400";
    }
    if (props.type === "small-v") {
      return "185";
    }
    if (props.type === "large-h") {
      return "500";
    }
    if (props.type === "small-h") {
      return "342";
    }
  };

  return (
    <Link
      href={`/${props.mediaType === "movie" ? "movie" : "tv"}/${
        props.movieData.id
      }`}
    >
      <a>
        <div className="media-row__thumbnail">
          <img
            src={`https://image.tmdb.org/t/p/w${thumbnailSize(props.type)}/${
              props.movieData.poster_path
            }`}
            alt=""
          />
          <div className="media-row__top-layer">
            <i className="fas fa-play" />
          </div>
        </div>
      </a>
    </Link>
  );
};

const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  );
};

MediaRow.defaultProps = {
  mediaType: "movie",
};

export default MediaRow;
