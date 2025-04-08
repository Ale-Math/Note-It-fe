import { ReactElement } from "react";

interface ButtonProps {
  text: ReactElement;
  onClick: () => void;
}

export function IconButton(props: ButtonProps) {
  return (
    <button
      className="font-sans text-black rounded-2xl hover:bg-orange-200 focus:bg-cyan-100 font-semibold text-lg p-3"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
