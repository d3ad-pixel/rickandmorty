import React from "react";

const Footer = () => {
  return (
    <div className="mt-14 mb-5 text-xl">
      Powered by{" "}
      <a
        href="http://rickandmortyapi.com/"
        className="hover:text-orange-500 text-3xl text-slate-700"
        target="blank"
      >
        rickandmortyapi
      </a>
    </div>
  );
};

export default Footer;
