import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const DaisyLogo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="24" fill="#570DF8"/>
    <path d="M24 12l2.83 8.66H35l-7.08 5.14L30.66 36 24 28.92 17.34 36l2.74-10.2L13 20.66h8.17L24 12z" fill="#fff"/>
  </svg>
);

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="flex flex-col items-center mb-6">
        <DaisyLogo />
        <h1 className="text-3xl font-bold text-blue-900 mt-2 mb-1">Currency Converter</h1>
      </div>
      <div className="w-full max-w-md mx-auto card shadow-2xl bg-white/80 border border-blue-200">
        <div className="card-body">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="mb-3">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="flex justify-center my-2">
              <button
                type="button"
                className="btn btn-circle btn-outline btn-primary"
                onClick={swap}
                aria-label="Swap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17v1a3 3 0 003 3h10a3 3 0 003-3v-1M7 7l5-5m0 0l5 5m-5-5v12" /></svg>
              </button>
            </div>
            <div className="mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full text-lg font-bold py-3 rounded-xl bg-gradient-to-b from-blue-500 to-blue-800 text-white shadow-2xl border-b-8 border-blue-900 active:translate-y-1 active:shadow-lg transition-transform duration-100 relative group focus:outline-none"
            >
              <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)] group-active:drop-shadow-none">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </span>
              <span className="absolute left-0 top-0 w-full h-full rounded-xl bg-blue-900 opacity-0 group-active:opacity-10 transition-opacity duration-100" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;