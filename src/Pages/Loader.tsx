import { Spinner } from "../Components/Icons/Spinner";

export function Loader() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-stone-50">
      <div>
        <img className="max-w-24 max-h-24 pb-5" src="\Noteit.png" />
        <Spinner></Spinner>
      </div>
    </div>
  );
}
