import { useNavigate } from "react-router-dom";
import { Logo } from "../Components/Icons/Logo";
import { Button } from "../Components/UI/Button";
import { InfoCard } from "../Components/UI/InfoCard";
import { useRef } from "react";
import axios from "axios";
import "dotenv/config";

export function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signin() {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(`http://localhost:3000/api/v1/signin`, {
      email,
      password,
    });
    console.log(import.meta.env.VITE_BACKEND_URL);
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  }

  return (
    <div className="w-screen h-screen flex justify-center font-mono">
      <div className="w-4/5 p-5 space-y-24">
        <a href="/">
          <Logo />
        </a>
        <div className="w-full flex items-center">
          <div className="w-1/2 space-y-10">
            <p className="lg:text-3xl md:text-xl text-md font-extrabold">
              Log in
            </p>
            <div className="w-5/6 space-y-5 flex flex-col items-center">
              <div className="border-t border-solid w-full"></div>
              <InfoCard
                ref={emailRef}
                heading="Email"
                placeholder="Enter your email..."
                type="text"
              ></InfoCard>
              <InfoCard
                ref={passwordRef}
                heading="Password"
                placeholder="Enter your password..."
                type="password"
              ></InfoCard>
              <Button
                variant="primary"
                text="Log in"
                onClick={signin}
                size="xl"
                width="w-full"
              ></Button>
            </div>
            <div className="space-y-6 flex-col flex w-5/6">
              <p className="text-xs">
                <a className="underline text-orange-500 cursor-pointer">
                  Forgot your password?
                </a>
              </p>
              <p className="text-xs">
                By continuing with Google, or Email, you agree to NoteIt's{" "}
                <a className="underline text-orange-500 cursor-pointer">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="underline text-orange-500 cursor-pointer">
                  Privacy Policy
                </a>
                .
              </p>
              <p className="text-xs flex justify-center">
                Don't have an account?&nbsp;
                <a
                  href="/signup"
                  className="underline text-orange-500 cursor-pointer"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
          <div
            className="w-1/2
"
          >
            <img src="/Signup.jpg" alt="picture" />
          </div>
        </div>
      </div>
    </div>
  );
}
