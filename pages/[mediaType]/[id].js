import { useEffect, useState } from "react";
import AuthCheck from "../../components/AuthCheck";
import MainLayout from "../../components/Layouts/MainLayout";
import CastInfo from "../../components/UI/CastInfo/CastInfo";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import LazyLoad from "react-lazyload";
import PlaceHolders from "../../components/UI/PlaceHolders/PlaceHolders";
import { useRouter } from "next/router";
import axios from "axios";

export default function SingleMovieView(props) {
  const router = useRouter();

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/w1280/${props.mediaData.backdrop_path}`}
        title={
          props.query.mediaType === "movie"
            ? props.mediaData.title
            : props.mediaData.name
        }
        location="In cinemas and HBO MAX. Streaming throughout August 4."
        linkUrl="/movies/id"
        type="single"
        mediaType={props.query.mediaType}
        mediaId={props.mediaData.id}
      />
      <LazyLoad
        offset={-400}
        placeholder={<PlaceHolders title="Similar To This" type="small-v" />}
      >
        <MediaRow
          title="Similar To This"
          updateData={props.query.id}
          type="small-v"
          mediaType={props.query.mediaType}
          endpoint={`${props.query.mediaType === "movie" ? "movie" : "tv"}/${
            props.query.id
          }/similar?`}
        />
      </LazyLoad>
      <CastInfo
        mediaID={props.query.id}
        mediaType={props.query.mediaType}
        updateData={props.mediaData.id}
      />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let mediaData;
  try {
    mediaData = await axios.get(
      `https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?api_key=8e36ebdb3d86e880fffd99dbe59dffb1&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      mediaData: mediaData.data,
      query: context.query,
    }, // will be passed to the page component as props
  };
}
