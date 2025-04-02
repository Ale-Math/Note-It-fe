import { Android } from "../assets/Android";
import { Apple } from "../assets/Apple";
import { Logo } from "../Components/Icons/Logo";
import { Button } from "../Components/UI/Button";

export function Landing() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-stone-50">
      <div className="flex justify-between p-5 items-center w-screen sticky -top-0 bg-stone-50 mb-24">
        <a href="/">
          <Logo />
        </a>
        <div>
          <Button
            variant="secondary"
            size="lg"
            text="Log in"
            onClick={() => {}}
          ></Button>
          <Button
            variant="primary"
            size="lg"
            text="Start for free"
            onClick={() => {}}
          ></Button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-between p-5 pl-24 space-x-5">
          <div className="space-y-5 w-1/3">
            <p className="text-5xl font-mono font-bold pb-3 ">
              Organize your work and life,finally.
            </p>
            <p className="text-2xl text-gray-600 font-sans">
              Simplify life for both you and your team with the world's #1 task
              manager and to-do list app.
            </p>
            <div className="flex items-center">
              <p className="text-gray-600 font-semibold font-mono">
                500K+ ★★★★★ reviews from{" "}
              </p>
              <div className="flex items-center">
                <Apple></Apple>
                <Android></Android>
              </div>
            </div>
            <div className="pt-5">
              <Button
                variant="primary"
                size="lg"
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
      <div className="flex justify-center bg-[url(/bg-image.avif)] bg-transparent">
        <div className=" flex justify-around p-20 text-xl italic font-serif w-5/6 items-center">
          <div className=" flex-col flex items-center space-y-10">
            <h1>
              “Simple, straightforward,<br></br> and super powerful”
            </h1>
            <img src="/verge.png" className="w-15 h-5"></img>
          </div>
          <div className="flex-col flex items-center space-y-10 border-gray-400 border-y-0 border-x-2 px-8">
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
    </div>
  );
}
