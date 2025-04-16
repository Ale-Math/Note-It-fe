import { Logo } from "../Components/Icons/Logo";
import { Button } from "../Components/UI/Button";
import { InfoCard } from "../Components/UI/InfoCard";

export function SignUp() {
  return (
    <div className="w-screen h-screen flex justify-center font-mono">
      <div className="w-4/5 p-5 space-y-18">
        <a href="/">
          <Logo />
        </a>
        <div className="w-full flex items-center">
          <div className="w-1/2 space-y-5">
            <p className="lg:text-3xl md:text-xl text-md font-extrabold">
              Sign up
            </p>
            <div className="w-5/6 space-y-5 flex flex-col items-center">
              <InfoCard
                heading="Email"
                placeholder="Enter your email..."
                type="text"
              ></InfoCard>
              <InfoCard
                heading="Password"
                placeholder="Enter your password..."
                type="password"
              ></InfoCard>
              <Button
                variant="primary"
                text="Sign up with Email"
                onClick={() => {}}
                size="xl"
                width="w-full"
              ></Button>
            </div>
            <div className="space-y-6 flex-col flex w-5/6">
              <p className="text-xs">
                By continuing with Google, Apple, or Email, you agree to
                NoteIt's{" "}
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
                  href="/login"
                  className="underline text-orange-500 cursor-pointer"
                >
                  Go to login
                </a>
              </p>
            </div>
          </div>
          <div
            className="w-1/2 backdrop-blur-xs
"
          >
            <img src="/Signup.jpg" alt="picture" />
          </div>
        </div>
      </div>
    </div>
  );
}
