import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
  const cryptoPrice = useCryptoStore((state) => state.cryptoPrice);
  const loading = useCryptoStore((state) => state.loading);

  const hasResult = useMemo(
    () => Object.keys(cryptoPrice).length !== 0,
    [cryptoPrice]
  );

  return (
    <div className="crypto-price-wrapper">
      {loading ? (
        <Spinner />
      ) : (
        hasResult && (
          <>
            <h2>Exchange Rate</h2>
            <div className="crypto-price">
              <img
                src={`https://cryptocompare.com${cryptoPrice.IMAGEURL}`}
                alt="Cryptocurrency Icon"
              />
              <div>
                <p>
                  The price is: <span>{cryptoPrice.PRICE}</span>
                </p>
                <p>
                  Highest daily price: <span>{cryptoPrice.HIGHDAY}</span>
                </p>
                <p>
                  Lowest daily price: <span>{cryptoPrice.LOWDAY}</span>
                </p>
                <p>
                  Variation in the last 24 hours:{" "}
                  <span>{cryptoPrice.CHANGEPCT24HOUR}</span>
                </p>
                <p>
                  Last update: <span>{cryptoPrice.LASTUPDATE}</span>
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
