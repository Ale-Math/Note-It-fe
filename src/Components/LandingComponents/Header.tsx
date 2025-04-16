import { useNavigate } from "react-router-dom";
import { Logo } from "../Icons/Logo";
import { Button } from "../UI/Button";

export function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex lg:max-w-7xl md:max-w-5xl sm:max-w-3xl max-w-xl justify-between p-5 items-center sticky top-0 bg-slate-50 mb-24 mx-auto z-30">
      <a href="/">
        <Logo />
      </a>
      <div>
        <Button
          variant="secondary"
          size="lg"
          text="Pricing"
          onClick={() => {}}
        ></Button>
        |
        <Button
          variant="secondary"
          size="lg"
          text="Log in"
          onClick={() => {}}
        ></Button>
        <Button
          variant="primary"
          size="lg"
          text="Start for free"
          onClick={() => {
            navigate("/loader");
          }}
        ></Button>
      </div>
    </div>
  );
}
