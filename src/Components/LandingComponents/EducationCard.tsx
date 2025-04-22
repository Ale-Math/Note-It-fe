import { Card } from "../UI/Card";

export function EducationCard() {
  return (
    <div className="grid-cols-2 grid md:flex-row md:flex justify-center md:space-x-4 md:py-10 py-5 ">
      <Card
        src="/Class-Planning.png"
        alt="Class Planning"
        title="Class Planning"
        description="Keep all the many details of your class plans organized and in one place."
      ></Card>
      <Card
        src="/Lang-Learning.png"
        alt="Language Learning"
        title="Language Learning"
        description="Set a goal, pick a method, and create a habit of learning a new language."
      ></Card>
      <Card
        src="/Student-Planning.png"
        alt="Student Planning"
        title="Student Planning"
        description="Never forget a single assignment with this handy checklist for organizing each course."
      ></Card>
      <Card
        src="/Student-Project.png"
        alt="Student Project"
        title="Student Project"
        description="Share this project with your classmates and make your way towards an A."
      ></Card>
    </div>
  );
}
