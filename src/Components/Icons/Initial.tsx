import { useFindName } from "../../Hooks/useFindName";

export function Initial() {
  const name = useFindName();

  const initial = name.charAt(0);

  return (
    <p className="bg-orange-400 text-white font-bold md:w-7 md:h-7 w-5 h-5 md:pt-1 text-center rounded-full md:text-sm text-xs">
      {initial}
    </p>
  );
}
