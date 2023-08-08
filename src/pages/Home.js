import React from "react";
import CharacterContainer from "../components/CharacterContainer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <NavBar/>
      <CharacterContainer />
      <Footer />
    </div>
  );
};

export default Home;
