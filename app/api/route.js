/**
 * Message to show api server is running correctly.
 * @returns {Promise<Object>} A promise that resolves to an object containing the characters data.
 */

import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    message: `You are running the family guy api server.`,
  });
};
