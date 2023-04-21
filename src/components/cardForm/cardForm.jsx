import React from "react";
import Select from "react-select";
import "./cardForm.scss";
import bitcoin from "../../assets 3/vendor-bitcoin.svg";
import ninja from "../../assets 3/vendor-ninja.svg";
import blockChain from "../../assets 3/vendor-blockchain.svg";
import evil from "../../assets 3/vendor-evil.svg";
import colors from "../../sass/colors";

import { addCreditCard } from "../../redux/creditCardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const options = [
  {
    value: "bitcoinInc",
    label: "BITCOIN INC",
    svg: bitcoin,
    color: colors.orange,
  },
  {
    value: "ninjaBank",
    label: "NINJA BANK",
    svg: ninja,
    color: colors.black,
  },
  {
    value: "blockChain",
    label: "BLOCK CHAIN INC",
    svg: blockChain,
    color: colors.purple,
  },
  {
    value: "evilCorp",
    label: "EVIL CORP",
    svg: evil,
    color: colors.red,
  },
];

export const CardForm = () => {
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardHolderName, setCardHolderName] = React.useState("");
  const [validThru, setValidThru] = React.useState("");
  const [ccv, setCCV] = React.useState("");
  const [vendor, setVendor] = React.useState(options);
  const crediteCards = useSelector((state) => state.creditCards);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addCreditCard({ cardNumber, cardHolderName, validThru, ccv, vendor })
    );
    setCardNumber("");
    setCardHolderName("");
    setValidThru("");
    setCCV("");
    setVendor({});
    goBack();
  };
  console.log(crediteCards);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        CARD NUMBER
        <input
          className="form__input"
          type="text"
          placeholder="XXXX XXXX XXXX XXXX"
          maxLength={16}
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
        />
      </label>

      <label className="form__label">
        CARDHOLDER NAME
        <input
          className="form__input"
          type="text"
          required
          placeholder="FIRSTNAME LASTNAME"
          value={cardHolderName}
          onChange={(event) => setCardHolderName(event.target.value)}
        />
      </label>
      <div className="form__valid-ccv-container">
        <label>
          VALID THRU
          <input
            className="form__valid-input"
            type="text"
            value={validThru}
            onChange={(event) => setValidThru(event.target.value)}
          />
        </label>

        <label>
          CCV
          <input
            className="form__ccv-input"
            type="number"
            value={ccv}
            onChange={(event) => setCCV(event.target.value)}
          />
        </label>
      </div>

      <label>
        VENDOR
        <Select
          classname="form__options"
          options={options}
          value={vendor}
          onChange={(newValue) => setVendor(newValue)}
        />
      </label>

      <button type="submit" className="form__button">
        ADD CARD
      </button>
    </form>
  );
};
