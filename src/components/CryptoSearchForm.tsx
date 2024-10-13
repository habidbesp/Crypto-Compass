import { currencies } from "../data";
import { useCryptoStore } from "../store";

export default function CryptoSearchForm() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Currency:</label>
        <select name="currency" id="currency">
          <option value=""> -- Select --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Cryptocurrency:</label>
        <select name="cryptocurrency" id="cryptocurrency">
          <option value=""> -- Select --</option>
          {cryptocurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Get Quote" />
    </form>
  );
}
