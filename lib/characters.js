import { endpoint } from "@/utils/endpoint";
import path from "path";

export const getAllCharacters = async () => {
  const data = await fetch(path.join(endpoint, `characters`));
  if (!data.ok) {
    throw new Error("Failed to fetch data.");
  }
  return data.json();
};

export const getCharacterBySlug = async (slug) => {
  const data = await fetch(path.join(endpoint, `characters`, slug));
  if (!data.ok) {
    throw new Error("Failed to fetch data.");
  }
  return data.json();
};
