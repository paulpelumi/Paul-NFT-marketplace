import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection, Video, Slider, AudioLive, Service, FollowerTab, Filter, Collection, Category, BigNFTSilder, Title, Subscribe, NFTCard, Brand} from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title 
        heading="Audio Collection" 
        paragraph="We give you what you desire to acquire without a require"/> 
      <AudioLive />
      <Slider />
      <FollowerTab />
      <Collection />
      <Title 
        heading="Featured NFTs" 
        paragraph="Discover the best of the best NFTS from Paul Pelumi"/> 
      <Filter />
      <NFTCard />
      <Title 
      heading="Browse by Category" 
      paragraph="Explore the NFTs in the most featured categories"/> 
      <Category />
      <Subscribe />
      <Brand />
      <Video />
 
  
    </div>
  );
};

export default Home;
