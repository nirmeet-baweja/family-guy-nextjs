import questions from "@/data/quiz.json";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const question = questions.data.find((item) => item.id === params.id);
    if (!question) {
      return new NextResponse("Not found.", { status: 404 });
    }

    const { correct_answer, ...rest } = question;
    return NextResponse.json({
      question: rest,
    });
  } catch (error) {
    return new NextResponse("Internal server error.", { status: 500 });
  }
};
