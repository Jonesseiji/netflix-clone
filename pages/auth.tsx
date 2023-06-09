import { SetStateAction, useCallback, useState } from "react";
import { signIn } from "next-auth/react";

import { registerUser } from "@/services/user";

import { CREATE_ACCOUNT } from "@/constants/strings";
import { SIGN_UP, ALREADY_HAVE_ACCOUNT } from "../constants/strings";
import {
  FIRST_TIME_USING,
  SIGN_IN,
  REGISTER,
  LOGIN,
} from "../constants/strings";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import Input from "@/components/input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(
    () =>
      setVariant((currentVariant) =>
        currentVariant === "login" ? "register" : "login"
      ),
    []
  );

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await registerUser(email, name, password).then(() => login());
    } catch (err) {
      console.log(err);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? SIGN_IN : REGISTER}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="name"
                  onChange={(event: {
                    target: { value: SetStateAction<string> };
                  }) => setName(event.target.value)}
                  id="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(event: {
                  target: { value: SetStateAction<string> };
                }) => setEmail(event.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(event: {
                  target: { value: SetStateAction<string> };
                }) => setPassword(event.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === "login" ? LOGIN : SIGN_UP}
            </button>
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "/profiles",
                  })
                }
                className="
                  w-10
                  h-10
                  bg-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  hover:opacity-80
                  transition
              "
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "/profiles",
                  })
                }
                className="
                  w-10
                  h-10
                  bg-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  hover:opacity-80
                  transition
              "
              >
                <FaGithub size={30} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12">
              {variant === "login" ? FIRST_TIME_USING : ALREADY_HAVE_ACCOUNT}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? CREATE_ACCOUNT : LOGIN}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
