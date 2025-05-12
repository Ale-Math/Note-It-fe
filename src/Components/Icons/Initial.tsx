import { useFindName } from "../../Hooks/useFindName";

export function Initial() {
  const name = useFindName();

  const initial = name.charAt(0);
  const picture = localStorage.getItem("picture") as "";

  return (
    <div>
      {picture ? (
        <img
          className="bg-orange-300 border border-orange-500 text-white font-bold md:w-7 md:h-7 w-5 h-5 rounded-full"
          src={picture}
          referrerPolicy="no-referrer"
        ></img>
      ) : (
        <p className="bg-orange-300 border border-orange-500 text-white font-bold md:w-7 md:h-7 w-5 h-5 md:pt-0.5 text-center rounded-full md:text-sm text-xs">
          {initial}
        </p>
      )}
    </div>
  );
}
