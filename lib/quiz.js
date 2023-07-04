import { endpoint } from "@/utils/endpoint";
import path from "path";

export const getRandomQuizQuestion = async () => {
  const response = await fetch(path.join(endpoint, `quiz`, `random`), {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }
  return response.json();
};
