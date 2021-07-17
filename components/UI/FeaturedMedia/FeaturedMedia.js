import { useRouter } from "next/router";
import { useStateContext } from "../../HBOProvider";

export const FeaturedMedia = (props) => {
  const router = useRouter();
  const globalState = useStateContext();

  const handleClickPlay = () => {
    router.push(props.linkUrl);
    console.log("Send user to media page " + props.mediaUrl);
  };
  const handleClickAdd = (props) => {
    globalState.addToList({
      mediaId: props.mediaId,
      mediaType: props.mediaType,
      mediaUrl: props.mediaUrl,
    });
    console.log("Click to add Movie");
  };
  const showMedia = () => {
    if (props.type === "front") {
      return (
        <iframe
          className="featured-media__video"
          width="100%"
          height="100%"
          src={props.mediaUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    } else {
      return (
        <img className="featured-media__img" src={props.mediaUrl} alt="" />
      );
    }
  };

  return (
    <div
      className={`featured-media ${
        props.type === "single" ? "featured-media--single" : ""
      }`}
    >
      {showMedia()}
      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div className="featured-media__title" onClick={handleClickPlay}>
            {props.title}
          </div>
          <div
            className={`featured-media__playing ${
              props.type === "single" ? "hide-comp" : ""
            }`}
          >
            NOW PLAYING
          </div>
          <div
            className={`featured-media__location ${
              props.type === "single" ? "hide-comp" : ""
            }`}
          >
            {props.location}
          </div>
          <div className="featured-media__buttons">
            <div className="featured-media__play-btn" onClick={handleClickPlay}>
              <i className="fas fa-play" />
            </div>
            <div
              className={`featured-media__add-btn ${
                props.type === "front" ? "hide-comp" : ""
              }`}
              onClick={() => handleClickAdd(props)}
            >
              <i className="fas fa-plus" />
            </div>

            <div
              className={`featured-media__info-btn ${
                props.type === "single" ? "hide-comp" : ""
              }`}
              onClick={handleClickPlay}
            >
              MORE INFO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMedia;
