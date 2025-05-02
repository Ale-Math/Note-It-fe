import { Button } from "./Button";

interface TodoCardProps {
  toggle: () => void;
}

export function TodoCard(props: TodoCardProps) {
  return (
    <div className="flex bg-slate-50">
      <div className="w-5/6 border rounded-xl h-32 focus-within:border-gray-600">
        <div className="flex-col flex p-4 space-y-1">
          <input
            autoFocus
            className=" bg-slate-50 text-sm font-semibold outline-none "
            placeholder="Task name"
            type="text"
          ></input>
          <input
            className=" bg-slate-50 text-sm outline-none"
            placeholder="Description"
            type="text"
          ></input>
        </div>
        <div className="border-t flex justify-end space-x-2 p-3">
          <Button
            variant="tertiary"
            text="Cancel"
            size="xl2"
            onClick={props.toggle}
            decoration="text-xs p-2"
          />
          <Button
            variant="primary"
            text="Add task"
            size="xl2"
            onClick={() => {}}
            decoration="text-xs cursor-not-allowed"
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}
