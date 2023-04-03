import Input from "@/components/input";
import { CREATE_ACCOUNT } from "@/constants/strings";
import { SetStateAction, useCallback, useState } from "react";
import { SIGN_UP, ALREADY_HAVE_ACCOUNT } from "../constants/strings";
import {
  FIRST_TIME_USING,
  SIGN_IN,
  REGISTER,
  LOGIN,
} from "../constants/strings";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(
    () =>
      setVariant((currentVariant) =>
        currentVariant === "login" ? "register" : "login"
      ),
    []
  );

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
                  label="Username"
                  onChange={(event: {
                    target: { value: SetStateAction<string> };
                  }) => setUsername(event.target.value)}
                  id="username"
                  value={username}
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
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "login" ? LOGIN : SIGN_UP}
            </button>
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
