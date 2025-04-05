import { Logo } from "../Icons/Logo";
import { Button } from "../UI/Button";

export function Header() {
  return (
    <div className="flex justify-between p-5 items-center w-screen sticky -top-0 bg-stone-50 mb-24">
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
          onClick={() => {}}
        ></Button>
      </div>
    </div>
  );
}
