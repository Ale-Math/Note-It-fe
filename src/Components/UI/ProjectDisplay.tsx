import { HashIcon } from "../Icons/HashIcon";
import { Button } from "./Button";

interface ProjectDisplayProps {
  project: String;
  sharedUser?: String;
}

export function ProjectDisplay(props: ProjectDisplayProps) {
  return (
    <div className="pl-6 p-1 hover:bg-orange-100 group w-full">
      <Button
        variant="footer"
        size="sm"
        text={props.project}
        onClick={() => {}}
        icon={<HashIcon />}
        space="&nbsp;"
        width="w-4/5"
        decoration="text-gray-600 w-full"
      ></Button>
    </div>
  );
}
