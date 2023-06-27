/**
 * Retrieves a list of characters from the characters.json file.
 * @returns {Promise<Object>} A promise that resolves to an object containing the characters data.
 */

import characters from "@/data/characters";
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ characters: characters.data });
};
