import { ReactElement } from "react";

interface ButtonProps {
  icon: ReactElement;
  onClick: () => void;
}

export function IconButton(props: ButtonProps) {
  return (
    <button
      className="font-sans text-black rounded-2xl hover:bg-orange-200 focus:bg-orange-300 font-semibold text-lg p-3"
      onClick={props.onClick}
    >
      {props.icon}
    </button>
  );
}
