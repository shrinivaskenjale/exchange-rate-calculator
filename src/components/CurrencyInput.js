import "./CurrencyInput.css";

const CurrencyInput = ({
  currency,
  amount,
  onCurrencyChange,
  onAmountChange,
  forOutput,
}) => {
  const renderedCurrencyOptions = currencyList.map((c) => {
    return (
      <option key={c} value={c}>
        {c}
      </option>
    );
  });
  return (
    <div className="currency">
      <select value={currency} onChange={onCurrencyChange}>
        {renderedCurrencyOptions}
      </select>
      <input
        type="number"
        placeholder="0"
        value={amount}
        onChange={onAmountChange}
        readOnly={forOutput}
      />
    </div>
  );
};

export default CurrencyInput;

const currencyList = [
  "AED",
  "ARS",
  "AUD",
  "BGN",
  "BRL",
  "BSD",
  "CAD",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CZK",
  "DKK",
  "DOP",
  "EGP",
  "EUR",
  "FJD",
  "GBP",
  "GTQ",
  "HKD",
  "HRK",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "ISK",
  "JPY",
  "KRW",
  "KZT",
  "MXN",
  "MYR",
  "NOK",
  "NZD",
  "PAB",
  "PEN",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "RON",
  "RUB",
  "SAR",
  "SEK",
  "SGD",
  "THB",
  "TRY",
  "TWD",
  "UAH",
  "USD",
  "UYU",
  "VND",
  "ZAR",
];
