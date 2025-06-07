import { useFindName } from "../../Hooks/useFindName";
import { Spinner } from "../Icons/Spinner";

interface LoadingProps {
  image: string;
  title: string;
  message: string;
  showCard?: boolean;
}

export function Loading(props: LoadingProps) {
  const name = useFindName();

  return (
    <div>
      {!props.showCard ? (
        <div>
          {name ? (
            <div className="ml-20 my-10 flex flex-col items-center w-4/5">
              <img className="w-2/5 pb-3" src={props.image}></img>
              <p className="md:text-sm text-xs text-center">
                {props.title}
                {name}
              </p>
              <p className="text-xs text-gray-600 text-center">
                {props.message}
              </p>
            </div>
          ) : (
            <div className="pt-20">
              <Spinner />
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
