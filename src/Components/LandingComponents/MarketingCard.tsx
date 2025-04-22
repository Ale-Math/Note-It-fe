import { Card } from "../UI/Card";

export function MarketingCard() {
  return (
    <div className="grid-cols-2 grid md:flex-row md:flex justify-center md:space-x-4 md:py-10 py-5 gap-4">
      <Card
        src="/Blog-Post.png"
        alt="Blog Post"
        title="Blog Post"
        description="Go from inspiration to publication with this template for your blog."
      ></Card>
      <Card
        src="/Campaign-Tracker.png"
        alt="Campaign Tracker"
        title="Campaign Tracker"
        description="Track ad campaigns and keep a pulse on your marketing initiatives."
      ></Card>
      <Card
        src="/Content-Calender.png"
        alt="Content Calender"
        title="Content Calender"
        description="Strategize, organize, and publish your marketing content on schedule."
      ></Card>
      <Card
        src="/Content-Pipeline.png"
        alt="Content Pipeline"
        title="Content Pipeline"
        description="Keep ideas flowing while making progress on content you're already drafting."
      ></Card>
    </div>
  );
}
