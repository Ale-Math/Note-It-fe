import { PlusIcon } from "../Components/Icons/PlusIcon";
import { Button } from "../Components/UI/Button";

export function Dashboard() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/5 bg-orange-50"></div>
      <div className="w-4/5 bg-slate-50 p-20 space-y-5">
        <p className="text-2xl font-bold">To-Do's</p>
        <div className="">
          <Button
            variant="footer"
            size="sm"
            text="Add task"
            onClick={() => {}}
            icon={<PlusIcon />}
            space="&nbsp;"
            width="w-4/5"
            decoration="text-gray-600"
          ></Button>
        </div>
      </div>
    </div>
  );
}
