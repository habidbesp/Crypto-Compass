import { create } from "zustand";
import { Cryptocurrency, CryptoPice, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[];
  cryptoPrice: CryptoPice;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    cryptoPrice: {} as CryptoPice,
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },
    fetchData: async (pair) => {
      const cryptoPrice = await fetchCurrentCryptoPrice(pair);
      set(() => ({
        cryptoPrice,
      }));
    },
  }))
);
