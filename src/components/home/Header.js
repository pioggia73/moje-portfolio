import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";
const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        title="I am a web developer"
        subtitle="I make beautiful things"
      >
        <PrimaryBtn t="1rem">contact me</PrimaryBtn>
        {/* <PrimaryBtn as="a" href="https://www.google.com">
          view details
        </PrimaryBtn> */}
      </Banner>
    </Hero>
  );
};

export default Header;
