import { Card } from "../UI/Card";

export function CustomerSupportCard() {
  return (
    <div className="flex justify-center space-x-4 py-10">
      <Card
        src="/Feature-Reqs.png"
        alt="Feature Requests"
        title="Feature Requests"
        description="Moniter (and act on) the valuable feedback that your Support team receives."
      ></Card>
      <Card
        src="/Help-Center.png"
        alt="Help Center Article"
        title="Help Center Article"
        description="Follow this template to take a help center article from idea to published."
      ></Card>
      <Card
        src="/Issue-Tracking.png"
        alt="Issue-Tracking"
        title="Issue-Tracking"
        description="Stay on top of the bugs and issues (both big and small) in your software."
      ></Card>
    </div>
  );
}
