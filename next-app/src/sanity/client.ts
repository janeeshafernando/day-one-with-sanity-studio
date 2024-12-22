import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "t6a9fzgj",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});