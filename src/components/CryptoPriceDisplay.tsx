import { useMemo } from "react";
import { useCryptoStore } from "../store";

export default function CryptoPriceDisplay() {
  const cryptoPrice = useCryptoStore((state) => state.cryptoPrice);

  const hasResult = useMemo(
    () => Object.keys(cryptoPrice).length !== 0,
    [cryptoPrice]
  );

  return (
    <div>
      {hasResult && (
        <>
          <h2>Exchange Rate</h2>
          <div className="crypto-price">
            <div>
              <p>
                The price is: <span>{cryptoPrice.PRICE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
