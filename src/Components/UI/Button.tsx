interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary" | "shadow";
  size: "sm" | "md" | "lg" | "xl";
  text: String;
  onClick: () => void;
}

const variantStyles = {
  primary:
    "bg-orange-500 text-white rounded-lg px-2 shadow-md hover:bg-orange-600 font-bold font-mono",
  secondary:
    "bg-stone-50 text-black rounded-md px-2 hover:bg-gray-200 font-mono",
  tertiary:
    "bg-gray-100 text-black rounded-md hover:bg-gray-300 font-mono focus:bg-teal-100 font-semibold text-md",
  shadow:
    "bg-orange-500 text-white rounded-2xl font-bold font-mono border-b-8 border-orange-300 duration-300 ease-in-out  hover:border-b-4 hover:translate-y-1 active:border-b-0 active:translate-y-2 ",
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
