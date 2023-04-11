import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

import { INVALID_ID } from "@/constants/strings";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    await serverAuth(req, res);

    const { movieId } = req.query;

    if (typeof movieId !== "string") {
      throw new Error(INVALID_ID);
    }

    if (!movieId) {
      throw new Error(INVALID_ID);
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      throw new Error(INVALID_ID);
    }

    return res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
