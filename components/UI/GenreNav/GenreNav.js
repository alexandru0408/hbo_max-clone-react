import { useState } from "react";
import { useStateContext } from "../../HBOProvider";
import Link from "next/link";

const GenreNav = (props) => {
  const [activeNav, setActiveNav] = useState(false);
  setTimeout(() => setActiveNav(true), 100);
  return (
    <ul className={`genre-nav ${activeNav ? "genre-nav--active" : ""}`}>
      <GenreList genresData={props.genresData} mediaType={props.mediaType} />
    </ul>
  );
};

const GenreList = (props) => {
  return props.genresData.map((item) => {
    return (
      <li key={item.id}>
        <Link href="/">
          <a>{item.name}</a>
        </Link>
      </li>
    );
  });
};

export default GenreNav;
