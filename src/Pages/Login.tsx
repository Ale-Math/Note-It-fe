import { useNavigate } from "react-router-dom";
import { Logo } from "../Components/Icons/Logo";
import { Button } from "../Components/UI/Button";
import { InfoCard } from "../Components/UI/InfoCard";
import { useRef, useState } from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleIcon } from "../Components/Icons/Google";
import { zodSigninSchema } from "../Components/ZodSchema";
import { ErrorMessage } from "../Components/UI/ErrorMessage";

export function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const auth = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`
      );
      localStorage.setItem("picture", response.data.picture);
      try {
        const signinResponse = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/signin`,
          {
            email: response.data.email,
            password: response.data.email,
          }
        );
        const jwt = signinResponse.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboardLoader");
      } catch (e) {
        // @ts-ignore
        setErrorMessage("Please Signup First!");
      }
    },
  });

  async function signin() {
    const data = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    try {
      zodSigninSchema.parse(data);
    } catch (error) {
      setErrorMessage(error.issues[0].message.toString());
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/signin`,
        {
          email: data.email,
          password: data.password,
        }
      );
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/dashboardLoader");
    } catch (error) {
      setErrorMessage(error.message.toString());
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center font-mono">
      <div className="w-4/5 p-5 space-y-24">
        <a href="/">
          <Logo />
        </a>
        <div className="w-full flex items-start md:items-center pb-10">
          <div className="w-4/5 md:w-1/2 space-y-5 md:space-y-5">
            <p className="lg:text-3xl md:text-xl text-md font-extrabold">
              Log in
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
                  decoration="flex items-center font-bold w-full justify-center border rounded-xl"
                ></Button>
              </div>
              {errorMessage && <ErrorMessage message={errorMessage} />}
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
                decoration="lg:text-lg md:text-md text-sm"
                onClick={signin}
                size="xl"
                width="w-full"
              ></Button>
            </div>
            <div className="space-y-6 flex-col flex w-full md:w-5/6 pb-10 md:pb-0">
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
                  href="/loader"
                  className="underline text-orange-500 cursor-pointer"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <img src="/Signup.jpg" alt="picture" />
          </div>
        </div>
      </div>
    </div>
  );
}
