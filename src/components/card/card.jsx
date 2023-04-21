import React from "react";
import "./card.scss";
import chip from "../../assets 3/chip-dark.svg";
import bitcoin from "../../assets 3/vendor-bitcoin.svg";

export const Card = () => {
  return (
    <section className="card">
      <div className="card__card-image">
        <img src={chip} alt="chip-icon" />
        <img src={bitcoin} alt="biticon" />
      </div>
      <div className="card__card-number">XXXX XXXX XXXX XXXX </div>
      <div className="card__card-name-valid-holder">
        <div className="card__cardHolderName">
          <p>CARDHOLDER NAME</p>
          <p>Firstname LastName</p>
        </div>
        <div className="card__cardValidThru">
          <p>VALID THRU</p>
          <p>MM/YY</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
