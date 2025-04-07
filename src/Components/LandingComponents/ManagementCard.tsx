import { Card } from "../UI/Card";

export function ManagementCard() {
  return (
    <div className="flex justify-center space-x-4 py-10">
      <Card
        src="/1-1-Meeting.png"
        alt="1-on-1 Meeting"
        title="1-on-1 Meeting"
        description="Ensure priorities are clear and keep a pulse on how your team's feeling."
      ></Card>
      <Card
        src="/Emp-Onboarding.png"
        alt="Employee Onboarding"
        title="Employee Onboarding"
        description="Make sure newcomers have the information they need to hit the ground running."
      ></Card>
      <Card
        src="/Goal-Meeting.png"
        alt="Goals & Feedback Meeting"
        title="Goals & Feedback Meeting"
        description="Encourage frequent feedback and goal-oriented guidance with this template."
      ></Card>
      <Card
        src="/Hiring-Pipeline.png"
        alt="Hiring Pipeline"
        title="Hiring Pipeline"
        description="Stay organized as candidates progress through your hiring pipeline."
      ></Card>
    </div>
  );
}
