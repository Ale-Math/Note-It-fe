import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary" | "shadow" | "footer" | "auth";
  size: "sm" | "md" | "lg" | "xl" | "xl2";
  text?: String;
  onClick: () => void;
  width?: String;
  icon?: ReactElement;
  postIcon?: ReactElement;
  space?: string;
  spacePost?: string;
  decoration?: string;
  disabled?: boolean;
  autoFocus?: any;
}

const variantStyles = {
  primary:
    "bg-orange-500 text-white rounded-lg px-2 shadow-md hover:bg-orange-600 font-bold font-mono active:bg-orange-800 ",
  secondary:
    "text-black rounded-md px-2 hover:bg-orange-200 font-sans  lg:text-lg md:text-md text-xs",
  tertiary:
    "bg-orange-100 text-black rounded-lg hover:bg-orange-200 font-mono focus:bg-orange-300",
  shadow:
    "lg:text-lg md:text-md text-sm lg:absolute bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 text-white rounded-2xl font-bold font-mono border-b-8 border-orange-300 duration-300 ease-in-out  hover:border-b-4 hover:bg-gradient-to-br hover:translate-y-1 active:border-b-0 active:translate-y-2",
  footer:
    " text-gray-600 font-mono md:text-sm text-xs flex items-center hover:text-orange-600 ",
  auth: "text-black rounded-xl border border-solid flex lg:py-3 items-center px-4 justify-center font-extrabold lg:text-lg md:text-md text-sm font-mono hover:bg-orange-50",
};

const sizeStyles = {
  sm: "md:px-1 md:py-0.5",
  md: "md:px-4 md:py-4 px-2 py-2",
  lg: "md:py-2 md:px-4 md:mx-2 py-1 px-2 mx-1",
  xl: "md:py-3 md:px-5 md:mx-2 py-1 px-2 mx-1",
  xl2: "",
};

export function Button(props: ButtonProps) {
  return (
    <button
      autoFocus={props.autoFocus}
      disabled={props.disabled}
      className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${
        props.width
      } ${props.decoration}`}
      onClick={props.onClick}
    >
      {props.icon}
      {props.space}
      {props.text}
      {props.spacePost}
      {props.postIcon}
    </button>
  );
}
