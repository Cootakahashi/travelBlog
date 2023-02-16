import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "travelblog88",
  apiKey: process.env.API_KEY,
});
