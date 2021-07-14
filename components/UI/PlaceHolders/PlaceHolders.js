const PlaceHolders = (props) => {
  return (
    <div className={`place-holder ${props.type}`}>
      <h3 className="place-holder__title">{props.title}</h3>
      <div className="place-holder__thumbnails">
        <div className="place-holder__thumbnail-skeleton">
          <div className="place-holder__thumbnail-skeleton-img"></div>
        </div>
        <div className="place-holder__thumbnail-skeleton">
          <div className="place-holder__thumbnail-skeleton-img"></div>
        </div>
        <div className="place-holder__thumbnail-skeleton">
          <div className="place-holder__thumbnail-skeleton-img"></div>
        </div>
        <div className="place-holder__thumbnail-skeleton">
          <div className="place-holder__thumbnail-skeleton-img"></div>
        </div>
        <div className="place-holder__thumbnail-skeleton">
          <div className="place-holder__thumbnail-skeleton-img"></div>
        </div>
        <div className="place-holder__thumbnail-skeleton">
          <div className="place-holder__thumbnail-skeleton-img"></div>
        </div>
        <div className="place-holder__thumbnail-skeleton">
          <div className="place-holder__thumbnail-skeleton-img"></div>
        </div>
        <div className="place-holder__thumbnail-skeleton">
          <div className="place-holder__thumbnail-skeleton-img"></div>
        </div>
        <div className="place-holder__thumbnail-skeleton">
          <div className="place-holder__thumbnail-skeleton-img"></div>
        </div>
      </div>
    </div>
  );
};

export default PlaceHolders;
