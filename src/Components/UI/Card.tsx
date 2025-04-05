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
      className="w-64 h-80 border-slate-300 border border-solid rounded-xl flex-col hover:border-slate-600 whitespace-pre-wrap
 relative"
    >
      <div className="h-2/5">
        <img
          className="object-contain rounded-t-xl border-b border-solid border-slate-300"
          src={props.src}
          alt={props.alt}
        ></img>
      </div>
      <div className="h-3/5 space-y-4 p-4">
        <p className="font-bold text-md">{props.title}</p>
        <p className="text-gray-600 text-md">{props.description}</p>
        <div className="flex items-center space-x-2 absolute bottom-2">
          <List></List>
          <p className="text-gray-600 text-sm">List</p>
        </div>
      </div>
    </div>
  );
}
