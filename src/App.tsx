import { useEffect } from "react";
import CryptoSearchForm from "./components/CryptoSearchForm";
import { useCryptoStore } from "./store";
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          <span className="">Crypto Compass</span>A Cryptocurrency Price Tracker
        </h1>

        <div className="content">
          <CryptoSearchForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  );
}

export default App;
