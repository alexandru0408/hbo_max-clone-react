const CastInfo = (props) => {
  return (
    <div className="cast-info">
      <div className="cast-info__group-title">Cast & Crew</div>
      <div className="cast-info__list">
        <ul className="cast-info__crew">
          <li>Liu Kang</li>
          <li>George Lucas</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Kano</li>
          <li>Arnold Schwarzenegger</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Shao Kahn</li>
          <li>George Lucas</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Sonya</li>
          <li>Jessica Alba</li>
        </ul>
      </div>
      <div className="cast-info__group-title">Director</div>
      <div className="cast-info__list">
        <ul className="cast-info__crew">
          <li>Liu Kang</li>
          <li>George Lucas</li>
        </ul>
      </div>
    </div>
  );
};

export default CastInfo;
