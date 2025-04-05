import { Android } from "../assets/Android";
import { Apple } from "../assets/Apple";
import { Header } from "../Components/LandingComponents/Header";
import { WorkCard } from "../Components/LandingComponents/WorkCard";
import { PersonalCard } from "../Components/LandingComponents/PersonalCard";
import { EducationCard } from "../Components/LandingComponents/EducationCard";
import { Button } from "../Components/UI/Button";

export function Landing() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-stone-50 font-mono relative">
      <Header></Header>
      <div className="flex justify-center">
        <div className="flex justify-between p-5 pl-24 space-x-5">
          <div className="space-y-5 w-1/3">
            <p className="text-5xl font-bold pb-3 ">
              Organize your work and life,finally.
            </p>
            <p className="text-2xl/7 text-gray-600">
              Simplify life for both you and your team with the world's #1 task
              manager and to-do list app.
            </p>
            <div className="flex items-center">
              <p className="text-gray-600 font-semibold">
                500K+ ★★★★★ reviews from
              </p>
              <div className="flex items-center">
                <Apple></Apple>
                <Android></Android>
              </div>
            </div>
            <div>
              <Button
                variant="shadow"
                size="md"
                text="Start for free"
                onClick={() => {}}
              ></Button>
            </div>
          </div>
          <div className="w-2/3 pl-2">
            <img src="/appbg.avif" className=" bg-red-100 rounded-2xl"></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[url(/bg-image.avif)] my-10">
        <div className=" flex justify-around p-20 text-xl/9 italic font-serif w-5/6 items-center">
          <div className=" flex-col flex items-center space-y-10">
            <h1>
              “Simple, straightforward,<br></br> and super powerful”
            </h1>
            <img src="/verge.png" className="w-15 h-5"></img>
          </div>
          <div className="flex-col flex items-center space-y-10 border-gray-400 border-y-0 border-x-2 px-12">
            <h1>
              “The best to-do list app <br></br> on the market”
            </h1>
            <img src="/pcmag.png" className="w-15 h-10"></img>
          </div>
          <div className="flex-col flex items-center space-y-10">
            <h1>“Nothing short of stellar”</h1>
            <img src="/techradar.png" className="w-15 h-5"></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-20">
        <div className="w-11/12 flex justify-center">
          <div className=" flex-col items-center w-1/2 space-y-48">
            <div className="space-y-7">
              <p className="text-lg font-bold text-orange-700">
                Clear your mind
              </p>
              <p className="text-4xl font-bold">
                Capture tasks at the speed<br></br> of thought
              </p>
              <p className="text-xl text-gray-600">
                We've spent over a decade refining Noteit!<br></br> to be an
                extension of your mind. Capture<br></br> and organize tasks
                instantly using<br></br> easy-flowing, natural language.
              </p>
            </div>
            <div className="space-y-7">
              <p className="text-lg font-bold text-cyan-800 ">
                Focus on what's important
              </p>
              <p className="text-4xl font-bold">
                Stay organized and<br></br> focused
              </p>
              <p className="text-xl text-gray-600">
                Achieve mental clarity by sorting tasks<br></br> into Today,
                Upcoming, or using custom<br></br> filters. See only what you
                need,<br></br> when you need it.
              </p>
            </div>
          </div>
          <div className=" w-1/2 space-y-20">
            <img src="/appbg.avif" className=" bg-red-100 rounded-2xl"></img>
            <br></br>
            <img src="/appbg.avif" className=" bg-red-100 rounded-2xl"></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-20">
        <div className="w-5/6 space-y-10">
          <div className="flex-col flex items-center">
            <p className="text-4xl font-bold pb-10">
              Kickstart your next project with NoteIt! Templates
            </p>
            <p className="text-xl text-gray-600">
              No need to create projects or setups from scratch when we have
            </p>
            <p className="text-xl text-gray-600">50+ templates made for you.</p>
          </div>
          <div className="flex justify-center pt-10">
            <Button
              variant="tertiary"
              size="xl"
              text="Work"
              onClick={() => {}}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Personal"
              onClick={() => {}}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Education"
              onClick={() => {}}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Management"
              onClick={() => {}}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Marketing & Sales"
              onClick={() => {}}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Customer Support"
              onClick={() => {}}
            ></Button>
          </div>
        </div>
      </div>
      <WorkCard></WorkCard>
      <PersonalCard></PersonalCard>
      <EducationCard></EducationCard>
    </div>
  );
}
