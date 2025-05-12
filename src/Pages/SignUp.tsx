import { useNavigate } from "react-router-dom";
import { Logo } from "../Components/Icons/Logo";
import { Button } from "../Components/UI/Button";
import { InfoCard } from "../Components/UI/InfoCard";
import { useRef } from "react";
import axios from "axios";
import { GoogleIcon } from "../Components/Icons/Google";
import { useGoogleLogin } from "@react-oauth/google";

export function SignUp() {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const auth = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`
      );
      localStorage.setItem("picture", response.data.picture);

      const signupResponse = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/signup`,
        {
          name: response.data.given_name,
          email: response.data.email,
          password: response.data.email,
        }
      );
      const jwt = signupResponse.data.token;
      localStorage.setItem("token", jwt);
      if (jwt == undefined) {
        return console.log("error");
      } else {
        navigate("/dashboardLoader");
      }
    },
  });

  async function signup() {
    function Capitalize(str: string | undefined) {
      if (str == undefined) {
        return null;
      } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    }

    const name = Capitalize(nameRef.current?.value);
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/signup`,
        {
          name,
          email,
          password,
        }
      );
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      if (jwt == undefined) {
        return console.log("error");
      } else {
        navigate("/dashboardLoader");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center font-mono">
      <div className="w-4/5 p-5 space-y-24">
        <a href="/">
          <Logo />
        </a>
        <div className="w-full flex md:items-center items-start pb-10">
          <div className="md:w-1/2 w-5/6 space-y-6">
            <p className="lg:text-3xl md:text-xl text-md font-extrabold">
              Sign up
            </p>
            <div className="w-5/6 space-y-5 flex flex-col items-center">
              <div className="w-full">
                <Button
                  variant="secondary"
                  text="Continue with Google"
                  size="md"
                  onClick={() => auth()}
                  space="&nbsp;&nbsp;"
                  icon={<GoogleIcon />}
                  decoration="flex items-center font-bold w-full justify-center border"
                ></Button>
              </div>
              <div className="border-t border-solid w-full"></div>
              <InfoCard
                ref={nameRef}
                heading="Name"
                placeholder="Enter your name..."
                type="text"
              ></InfoCard>
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
                text="Sign up with Email"
                decoration="lg:text-lg md:text-md text-sm"
                onClick={signup}
                size="xl"
                width="w-full"
              ></Button>
            </div>
            <div className="space-y-6 flex-col flex w-full md:w-5/6">
              <p className="text-xs text-center md:text-left">
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
                Already signed up?&nbsp;
                <a
                  href="/loginloader"
                  className="underline text-orange-500 cursor-pointer"
                >
                  Go to login
                </a>
              </p>
            </div>
          </div>
          <div className="w-1/2 backdrop-blur-xs">
            <img src="/Signup.jpg" alt="picture" />
          </div>
        </div>
      </div>
    </div>
  );
}
