import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prismadb from "@/lib/prismadb";
import { NOT_SIGNED_IN } from "@/constants/strings";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    throw new Error(NOT_SIGNED_IN);
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error(NOT_SIGNED_IN);
  }

  return { currentUser };
};

export default serverAuth;
