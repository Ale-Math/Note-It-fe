import { Card } from "../UI/Card";

export function WorkCard() {
  return (
    <div className="grid-cols-2 grid md:flex-row md:flex md:justify-center md:space-x-4 md:py-10 py-5 gap-4">
      <Card
        src="/A-Tasks.png"
        alt="Accounting Tasks"
        title="Accounting Tasks"
        description="Create a system to keep your books, receipts, and invoices organized."
      ></Card>
      <Card
        src="/BT-Packing.png"
        alt="Business Travel"
        title="Business Travel Packing"
        description="Never forget your laptop charger, lucky shoes, or passport again."
      ></Card>
      <Card
        src="/Client-Management.png"
        alt="Client Management"
        title="Client Management"
        description="Organize your work with clients from the smallest to largest details."
      ></Card>
      <Card
        src="/Deep-Work.png"
        alt="Deep Work"
        title="Deep Work"
        description="Practice prioritizing focus and eliminating distraction with this template."
      ></Card>
    </div>
  );
}
