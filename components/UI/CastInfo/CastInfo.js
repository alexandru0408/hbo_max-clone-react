import { useState, useEffect } from "react";
import axios from "axios";

const CastInfo = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [credits, setCredits] = useState({});

  useEffect(() => {
    async function getCredits() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${
            props.mediaType === "movie" ? "movie" : "tv"
          }/${
            props.mediaID
          }/credits?api_key=8e36ebdb3d86e880fffd99dbe59dffb1&language=en-US`
        );
        setCredits(response.data);
        setLoadingData(false);
        console.log("Success Response For Cast & Crew ");
        console.log(response);
      } catch (error) {
        console.log("Error Response For Cast & Crew ");

        console.error(error);
      }
    }
    getCredits();
  }, [props]);

  const showCast = () => {
    if (loadingData !== true) {
      return credits.cast.map((item) => {
        return (
          <ul key={item.id} className="cast-info__crew">
            <li>{item.character}</li>
            <li>{item.name}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading Cast</div>;
    }
  };
  const showCrew = () => {
    if (loadingData !== true) {
      return credits.crew.map((item) => {
        return (
          <ul key={item.id} className="cast-info__crew">
            <li>{item.job}</li>
            <li>{item.name}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading Crew</div>;
    }
  };

  return (
    <div className="cast-info">
      <div className="cast-info__group-title">Cast</div>
      <div className="cast-info__list">{showCast()}</div>
      <div className="cast-info__group-title">Crew</div>
      <div className="cast-info__list">{showCrew()}</div>
    </div>
  );
};

export default CastInfo;
