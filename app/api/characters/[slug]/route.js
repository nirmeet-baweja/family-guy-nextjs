/**
 * Retrieves a character and their associated quotes based on the provided slug.
 *
 * @param {Object} req - The request object.
 * @param {Object} params - The route parameters.
 * @param {string} params.slug - The slug of the character.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the character and their quotes, or an error response.
 */

import characters from "@/data/characters";
import quotes from "@/data/quotes";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const character = characters.data.find((item) => item.slug === params.slug);
    if (!character) {
      return new NextResponse("not found", { status: 404 });
    }
    const character_quotes = quotes.data.filter(
      (quote) => quote.character_id === character.id
    );

    return NextResponse.json({
      character,
      character_quotes: character_quotes.length > 0 ? character_quotes : null,
    });
  } catch (error) {
    return new NextResponse("Internal server error", { status: 500 });
  }
};
