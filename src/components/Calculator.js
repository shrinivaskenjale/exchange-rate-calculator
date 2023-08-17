import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import "./Calculator.css";
import CurrencyInput from "./CurrencyInput";

const Calculator = () => {
  const [currencyOne, setCurrencyOne] = useState("USD");
  const [currencyTwo, setCurrencyTwo] = useState("INR");
  const [amountOne, setAmountOne] = useState(1);

  const { data } = useQuery({
    queryKey: [currencyOne],
    queryFn: () => fetchRates(currencyOne),
    // staleTime: 5 * 60 * 1000,
  });

  const handleCurrencyOneChange = (e) => {
    setCurrencyOne(e.target.value);
  };
  const handleCurrencyTwoChange = (e) => {
    setCurrencyTwo(e.target.value);
  };
  const handleAmountOneChange = (e) => {
    setAmountOne(e.target.value);
  };
  const handleSwap = () => {
    setCurrencyOne(currencyTwo);
    setCurrencyTwo(currencyOne);
  };

  let rate = "";
  let amountTwo = "";
  if (data) {
    rate = data[currencyTwo];
    amountTwo = (rate * amountOne).toFixed(2);
  }

  return (
    <div className="section-center calculator-center">
      <CurrencyInput
        currency={currencyOne}
        amount={amountOne}
        onCurrencyChange={handleCurrencyOneChange}
        onAmountChange={handleAmountOneChange}
      />
      <div className="rate">
        <button type="button" onClick={handleSwap}>
          Swap
        </button>
        <div className="rate">
          {rate && `1 ${currencyOne} = ${rate} ${currencyTwo}`}
        </div>
      </div>
      <CurrencyInput
        currency={currencyTwo}
        amount={amountTwo}
        onCurrencyChange={handleCurrencyTwoChange}
        forOutput
      />
    </div>
  );
};

export default Calculator;

const fetchRates = async (currency) => {
  const response = await axios.get(
    "https://open.exchangerate-api.com/v6/latest/" + currency
  );
  return response.data.rates;
};
