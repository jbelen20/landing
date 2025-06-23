import React from "react";
import tarta from "../assets/image/tarta_card.jpg";

import {ContentCardDetails, NameCard, ValueCard} from "../style/CardHighlightsSc";

const CardHighlights = () => {
  return (
    <>
      <div>
        <img src={tarta} alt="x" />
      </div>
      <ContentCardDetails>
        <NameCard>nombre</NameCard>
        <ValueCard>valor</ValueCard>
      </ContentCardDetails>
    </>
  );
};


export default CardHighlights;