import questions from "@/data/quiz.json";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const randomIndex = Math.floor(Math.random() * questions.data.length);
    return NextResponse.json({
      randomQuestion: questions.data[randomIndex].id,
    });
  } catch (error) {
    return new NextResponse("Internal Server Error.", { status: 500 });
  }
};
