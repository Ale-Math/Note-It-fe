import { useNavigate } from "react-router-dom";
import { Logo } from "../Icons/Logo";
import { Button } from "../UI/Button";

export function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex w-screen lg:max-w-7xl md:max-w-5xl sm:max-w-3xl max-w-xl justify-between p-5 items-center sticky top-0 bg-slate-50 md:mb-24 mx-auto z-30 font-mono">
      <a href="/">
        <Logo />
      </a>
      <div>
        <Button
          variant="secondary"
          size="lg"
          text="Pricing"
          onClick={() => {
            navigate("/pricing");
          }}
        ></Button>
        |
        <Button
          variant="secondary"
          size="lg"
          text="Log in"
          onClick={() => {
            navigate("/loginloader");
          }}
          decoration="outline-none"
        ></Button>
        <Button
          variant="primary"
          size="lg"
          text="Start for free"
          decoration="lg:text-lg md:text-md text-sm"
          onClick={() => {
            navigate("/loader");
          }}
        ></Button>
      </div>
    </div>
  );
}
