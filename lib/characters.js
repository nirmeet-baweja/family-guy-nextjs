import { endpoint } from "@/utils/endpoint";

const getAllCharacters = async () => {
  const data = await fetch(`${endpoint}/characters`);
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  return data.json();
};

export { getAllCharacters };
