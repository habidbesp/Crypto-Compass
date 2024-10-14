import { z } from "zod";
import {
  CryptoCurrencyResponseSchema,
  CryptoPiceSchema,
  CurrencySchema,
  PairSchema,
} from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;

export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>;

export type Pair = z.infer<typeof PairSchema>;

export type CryptoPice = z.infer<typeof CryptoPiceSchema>;
