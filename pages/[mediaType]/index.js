import { useEffect } from "react";
import { useRouter } from "next/router";
import { useStateContext } from "../../components/HBOProvider";
import MainLayout from "../../components/Layouts/MainLayout";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import AuthCheck from "../../components/AuthCheck";
import LazyLoad from "react-lazyload";
import PlaceHolders from "../../components/UI/PlaceHolders/PlaceHolders";
import GenreNav from "../../components/UI/GenreNav/GenreNav";
import { shuffleArray } from "../../components/util/utilities";
import axios from "axios";

export default function MediaTypeView(props) {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {}, []);
  return AuthCheck(
    <MainLayout>
      {/* <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/RyTqAemkPWo?autoplay=1&loop=1&start=6"
        title="Mortal Kombat"
        location="In cinemas and HBO MAX. Streaming throughout August 4."
        linkUrl="/movie/460465"
        type="front"
      /> */}
      <GenreNav
        mediaType={props.query.mediaType}
        genresData={props.genresData}
      />
      <LazyLoad
        offset={-400}
        placeholder={<PlaceHolders title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Movies"
          mediaType="movie"
          type="large-v"
          endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
        />
      </LazyLoad>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let genresData;
  let featuredData;
  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=8e36ebdb3d86e880fffd99dbe59dffb1&language=en-US`
    );
    featuredData = await axios.get(
      `https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2021&api_key=8e36ebdb3d86e880fffd99dbe59dffb1&language=en-US`
    );

    console.log("genresData", genresData.data);
  } catch (error) {
    console.log("error", error);
  }
  console.log(genresData);

  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleArray(featuredData.data.results)[0],
      query: context.query,
    }, // will be passed to the page component as props
  };
}
