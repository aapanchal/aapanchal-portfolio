import React from "react";
import Head from "next/head";
import ContainerBlock from "./ContainerBlock";
import FavouriteProjects from "./FavouriteProjects";
import LatestCode from "./LatestCode";
import Hero from "./Hero";

export default function Home() {
  return (
    <ContainerBlock>
      <Hero />
      <FavouriteProjects />
      <LatestCode />
    </ContainerBlock>
  );
}
