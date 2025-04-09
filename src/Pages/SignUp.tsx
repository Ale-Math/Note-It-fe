import { Logo } from "../Components/Icons/Logo";
import { Button } from "../Components/UI/Button";
import { InfoCard } from "../Components/UI/InfoCard";

export function SignUp() {
  return (
    <div className="w-screen h-screen bg-slate-50 flex justify-center font-mono">
      <div className="w-4/5 p-5 space-y-24">
        <Logo></Logo>
        <div className="w-full">
          <div className="w-1/2 space-y-5">
            <p className="text-3xl font-bold">Sign up</p>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
            <Button
              variant="primary"
              text="Sign up with Email"
              onClick={() => {}}
              size="xl"
            ></Button>
            <div className="space-y-6 flex-col flex items-center w-5/6">
              <p className="text-xs">
                By continuing with Google, Apple, or Email, you agree to
                <br></br> NoteIt's{" "}
                <a className="underline text-orange-500">Terms of Service</a>{" "}
                and <a className="underline text-orange-500">Privacy Policy</a>.
              </p>
              <p className="text-xs">
                Already signed up?{" "}
                <a className="underline text-orange-500">Go to login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
