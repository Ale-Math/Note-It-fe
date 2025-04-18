import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary" | "shadow" | "footer" | "auth";
  size: "sm" | "md" | "lg" | "xl" | "xl2";
  text: String;
  onClick: () => void;
  width?: String;
  icon?: ReactElement;
  space?: string;
  decoration?: string;
}

const variantStyles = {
  primary:
    "bg-orange-500 text-white rounded-lg px-2 shadow-md hover:bg-orange-600 font-bold font-mono active:bg-orange-800 lg:text-lg md:text-md text-sm",
  secondary:
    "text-black rounded-md px-2 hover:bg-orange-200 font-sans  lg:text-lg md:text-md text-xs",
  tertiary:
    "bg-orange-100 text-black rounded-2xl hover:bg-orange-200 font-mono focus:bg-orange-300 font-semibold lg:text-lg md:text-md text-sm",
  shadow:
    "lg:text-lg md:text-md text-sm lg:absolute bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white rounded-2xl font-bold font-mono border-b-8 border-orange-300 duration-300 ease-in-out  hover:border-b-4 hover:bg-gradient-to-br hover:translate-y-1 active:border-b-0 active:translate-y-2 ",
  footer:
    " text-gray-600 font-mono text-sm flex items-center hover:text-orange-600 ",
  auth: "text-black rounded-xl border border-solid flex lg:py-3 items-center px-4 justify-center font-extrabold lg:text-lg md:text-md text-sm font-mono hover:bg-orange-50",
};

const sizeStyles = {
  sm: "px-1 py-1",
  md: "px-4 py-4",
  lg: "py-2 px-4 mx-2",
  xl: "py-3 px-5 mx-2",
  xl2: "",
};

export function Button(props: ButtonProps) {
  return (
    <button
      className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${
        props.width
      } ${props.decoration}`}
      onClick={props.onClick}
    >
      {props.icon}
      {props.space}
      {props.text}
    </button>
  );
}
