import { List } from "../Icons/List";

interface CardProps {
  src: string;
  alt: string;
  title: String;
  description: String;
}

export function Card(props: CardProps) {
  return (
    <div
      className="md:w-64 md:h-80 w-40 h-56 border-slate-300 border border-solid rounded-xl flex flex-col hover:border-slate-600 whitespace-pre-wrap
 relative hover:cursor-pointer z-0"
    >
      <div className="h-2/5">
        <img
          className="object-contain rounded-t-xl border-b border-solid border-slate-300"
          src={props.src}
          alt={props.alt}
        ></img>
      </div>
      <div className="h-3/5 md:space-y-4 md:p-4 p-1 space-y-2  z-10">
        <p className="font-bold md:text-lg text-xs">{props.title}</p>
        <p className="text-gray-600 md:text-md text-xs">{props.description}</p>
        <div className="flex items-center space-x-2 absolute bottom-2 z-20">
          <List></List>
          <p className="text-gray-600 md:text-sm text-xs">List</p>
        </div>
      </div>
    </div>
  );
}
