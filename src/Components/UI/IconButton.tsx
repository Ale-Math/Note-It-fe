import { ReactElement } from "react";

interface ButtonProps {
  text: ReactElement;
  onClick: () => void;
}

export function IconButton(props: ButtonProps) {
  return (
    <button
      className="bg-gray-100 text-black rounded-2xl hover:bg-gray-300 font-mono focus:bg-cyan-100 font-semibold text-lg"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
