import React from "react";
import TravellerInfo from "../../Shared/TravellerInfo";
import TravellersInfo from "../../Shared/TravellersInfo";

const About = () => {
  return (
    <div>
      <h1 className=" fw-bold text-center">
        <span className="primaryColor">About </span> Us
      </h1>
      <div className="tourInfo">
        <TravellerInfo></TravellerInfo>
      </div>
      <div className="needyInfo"></div>
    </div>
  );
};

export default About;
