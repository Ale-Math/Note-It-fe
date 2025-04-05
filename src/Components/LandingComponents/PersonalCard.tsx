import { Card } from "../UI/Card";

export function PersonalCard() {
  return (
    <div className="flex justify-center space-x-4 py-10">
      <Card
        src="/Goal-Tracker.png"
        alt="Goal Tracker"
        title="Goal Tracker"
        description="Build a system that connects your high-level goals to your daily actions."
      ></Card>
      <Card
        src="/Appointments.png"
        alt="Appointments"
        title="Appointments"
        description="Never forget (or forget to prepare for) another meeting or appointment."
      ></Card>
      <Card
        src="/Fitness.png"
        alt="Fitness"
        title="Fitness"
        description="make fitness a habit by adding your favorite exercises to your to-do list."
      ></Card>
      <Card
        src="/Grocery-List.png"
        alt="Grocery List"
        title="Grocery List"
        description="Keep your grocery list wherever you go by adding it all to your Noteit!"
      ></Card>
    </div>
  );
}
