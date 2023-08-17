import "./App.css";
import Calculator from "./components/Calculator";
import titleImage from "./images/money.png";

const App = () => {
  return (
    <section className="section calculator-section">
      <div className="section-title">
        <img src={titleImage} alt="dollar" />
        <h1>Exchange Rate Calculator</h1>
        <p>Choose the currency and the amount to get the exchange rate</p>
      </div>
      <Calculator />
    </section>
  );
};

export default App;
