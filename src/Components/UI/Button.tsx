interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: String;
  onClick: () => void;
}

const variantStyles = {
  primary:
    "bg-orange-500 text-white rounded-lg px-2 shadow-md hover:bg-orange-600 font-bold font-mono",
  secondary:
    "bg-stone-50 text-black rounded-md px-2 hover:bg-gray-200 font-mono",
};

const sizeStyles = {
  sm: "px-1 py-1",
  md: "px-2 py-2",
  lg: "py-2 px-4 mx-2",
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
