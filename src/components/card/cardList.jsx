import React from "react";
import { useSelector } from "react-redux";
import chip from "../../assets 3/chip-dark.svg";
import "./card.scss";
import colors from "../../sass/colors";

export const CardList = ({ activeDiv }) => {
  const creditCards = useSelector((state) => state.creditCards);
  return (
    <div>
      <ul
        style={{
          maxHeight: 400,
          overflowY: "scroll",
          padding: 5,
        }}
      >
        {creditCards.map((creditCard) => {
          return (
            <section
              style={{
                width: 382,
                height: 241,
                padding: 8,

                borderRadius: 10,
                backgroundColor: creditCard.vendor.color,
              }}
            >
              <div className="card__card-image">
                <img src={chip} alt="chip-icon" />
                <img src={activeDiv.activeObject.vendor.svg} alt="vendor" />
              </div>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 32,
                  fontFamily: "monospace",
                  color:
                    creditCard.vendor.color === colors.black
                      ? "white"
                      : "black",
                }}
              >
                {creditCard.cardNumber}
              </div>
              <div className="card__card-name-valid-holder">
                <div className="card__cardHolderName">
                  <p
                    style={{
                      color:
                        creditCard.vendor.color === colors.black
                          ? "white"
                          : "black",
                    }}
                  >
                    Cardholder Name
                  </p>
                  <p
                    style={{
                      color:
                        creditCard.vendor.color === colors.black
                          ? "white"
                          : "black",
                    }}
                  >
                    {activeDiv.activeObject.cardHolderName}
                  </p>
                </div>
                <div className="card__cardValidThru">
                  <p
                    style={{
                      color:
                        creditCard.vendor.color === colors.black
                          ? "white"
                          : "black",
                    }}
                  >
                    Valid Thru
                  </p>
                  <p
                    style={{
                      color:
                        creditCard.vendor.color === colors.black
                          ? "white"
                          : "black",
                    }}
                  >
                    {activeDiv.activeObject.validThru}
                  </p>
                </div>
              </div>
            </section>
            // </li>
          );
        })}
      </ul>
    </div>
  );
};
