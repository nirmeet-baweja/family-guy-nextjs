import { endpoint } from "@/utils/endpoint";

export const getAllCharacters = async () => {
  const data = await fetch(`${endpoint}/characters`);
  if (!data.ok) {
    throw new Error("Failed to fetch data.");
  }
  return data.json();
};

export const getCharacterBySlug = async (slug) => {
  const data = await fetch(`${endpoint}/characters/${slug}`);
  if (!data.ok) {
    throw new Error("Failed to fetch data.");
  }
  return data.json();
};
