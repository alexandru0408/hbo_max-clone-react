import MainLayout from "../components/Layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import AuthCheck from "../components/AuthCheck";
import LazyLoad from "react-lazyload";
import PlaceHolders from "../components/UI/PlaceHolders/PlaceHolders";

export default function Home() {
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/RyTqAemkPWo?autoplay=1&loop=1&start=6"
        title="Mortal Kombat"
        location="In cinemas and HBO MAX. Streaming throughout August 4."
        linkUrl="/movie/460465"
        type="front"
        mediaType={"movie"}
        mediaId={460465}
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
      <LazyLoad
        offset={-400}
        placeholder={<PlaceHolders title="Series" type="small-h" />}
      >
        <MediaRow
          title="Series"
          mediaType="series"
          type="small-h"
          endpoint="discover/tv?primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<PlaceHolders title="Action" type="small-v" />}
      >
        <MediaRow
          title="Action"
          mediaType="movie"
          type="small-v"
          endpoint="discover/movie?with_genres=28&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<PlaceHolders title="Horror" type="small-v" />}
      >
        <MediaRow
          title="Horror"
          mediaType="movie"
          type="small-v"
          endpoint="discover/movie?with_genres=27&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<PlaceHolders title="Animations" type="large-h" />}
      >
        <MediaRow
          title="Animations"
          mediaType="movie"
          type="large-h"
          endpoint="discover/movie?with_genres=16&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<PlaceHolders title="Sci-fi" type="small-v" />}
      >
        <MediaRow
          title="Sci-fi"
          mediaType="movie"
          type="small-v"
          endpoint="discover/movie?with_genres=878&primary_release_year=2021"
        />
      </LazyLoad>
    </MainLayout>
  );
}
