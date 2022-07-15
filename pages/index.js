import Head from 'next/head';
import Image from 'next/image';
import ContainerBlock from '../components/ContainerBlock';
// import FavouriteProjects from '../components/FavouriteProjects';
import Hero from '../components/Hero';
// import LatestCode from '../components/LatestCode';
// import styles from '../styles/Home.module.css';
// import userData from '../constant/data';

export default function Home() {
  return (
    <ContainerBlock
    title="Aniket Panchal - Developer, Creator"
    description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
  >
    <Hero />
    {/* <FavouriteProjects />
    <LatestCode  /> */}
  </ContainerBlock>
  )
}
