import { Spinner } from "../Components/Icons/Spinner";

export function Loader() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <img className="max-w-20 max-h-20 pb-5" src="\Noteit.png" />
        <Spinner></Spinner>
      </div>
    </div>
  );
}
