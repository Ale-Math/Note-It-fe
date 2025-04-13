interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary" | "shadow" | "footer";
  size: "sm" | "md" | "lg" | "xl";
  text: String;
  onClick: () => void;
}

const variantStyles = {
  primary:
    "bg-orange-500 text-white rounded-lg px-2 shadow-md hover:bg-orange-600 font-bold font-mono active:bg-orange-800",
  secondary: "text-black rounded-md px-2 hover:bg-orange-200 font-mono",
  tertiary:
    "bg-orange-100 text-black rounded-2xl hover:bg-orange-200 font-mono focus:bg-orange-300 font-semibold text-lg",
  shadow:
    "lg:absolute bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white rounded-2xl font-bold font-mono border-b-8 border-orange-300 duration-300 ease-in-out  hover:border-b-4 hover:bg-gradient-to-br hover:translate-y-1 active:border-b-0 active:translate-y-2 ",
  footer: " text-gray-600 hover:underline font-mono text-sm",
};

const sizeStyles = {
  sm: "px-1 py-1",
  md: "px-4 py-4",
  lg: "py-2 px-4 mx-2",
  xl: "py-4 px-5 mx-2",
};

export function Button(props: ButtonProps) {
  return (
    <button
      className={`${variantStyles[props.variant]} ${sizeStyles[props.size]}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
