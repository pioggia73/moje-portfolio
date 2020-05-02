import React from "react";
import {Link} from 'react-router-dom';
import Hero from "../globals/Hero";
import homeImg from "../../images/3.jpg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";
const Header = () => {
  return (
    <Hero img={homeImg} max>
      <Banner
        title="I am a web developer"
        subtitle="I make beautiful things"
      >
        <Link to="/contact"><PrimaryBtn t="1rem">contact me</PrimaryBtn></Link>
        {/* <PrimaryBtn as="a" href="https://www.google.com">
          view details
        </PrimaryBtn> */}
      </Banner>
    </Hero>
  );
};

export default Header;
