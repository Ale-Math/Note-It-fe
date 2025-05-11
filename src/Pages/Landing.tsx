import { Android } from "../assets/Android";
import { Apple } from "../assets/Apple";
import { Header } from "../Components/LandingComponents/Header";
import { WorkCard } from "../Components/LandingComponents/WorkCard";
import { PersonalCard } from "../Components/LandingComponents/PersonalCard";
import { EducationCard } from "../Components/LandingComponents/EducationCard";
import { Button } from "../Components/UI/Button";
import { useEffect, useRef, useState } from "react";
import { ManagementCard } from "../Components/LandingComponents/ManagementCard";
import { MarketingCard } from "../Components/LandingComponents/MarketingCard";
import { CustomerSupportCard } from "../Components/LandingComponents/CustomerSupportCard";
import { Footer } from "../Components/LandingComponents/Footer";
import { useNavigate } from "react-router-dom";
import { Carousel } from "../Components/UI/Carousel";

export function Landing() {
  const [cards, setCards] = useState(<WorkCard />);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  if (videoRef.current) {
    videoRef.current.playbackRate = 2.5;
  }

  return (
    <div className="lg:max-w-7xl md:max-w-5xl sm:max-w-3xl max-w-xl mx-auto bg-slate-50 font-mono relative">
      <Header></Header>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row justify-between p-5 w-11/12 items-center gap-10">
          <div className="space-y-5 md:w-2/5 w-full">
            <p className="md:text-6xl text-4xl font-bold pb-3 ">
              Organize your work and life, finally.
            </p>
            <p className="lg:text-xl md:text-lg text-md text-gray-600">
              Simplify life for you and your team with the world's #1 task
              manager and to-do list app.
            </p>
            <div className="flex items-center">
              <p className="text-gray-600 font-semibold md:text-lg text-sm">
                500K+ ★★★★★ reviews from
              </p>
              <div className="flex items-center">
                <Apple width="13" height="13"></Apple>
                <Android width="16" height="16"></Android>
              </div>
            </div>
            <div className="py-10 flex justify-start">
              <Button
                variant="shadow"
                size="md"
                text="Start for free"
                onClick={() => {
                  navigate("/loader");
                }}
              ></Button>
            </div>
          </div>
          <div className="outline-orange-600 outline-double md:w-3/5 w-full p-5 bg-red-50 shadow rounded-2xl bg-gradient-to-br from-yellow-100 via-orange-200 to-red-300">
            <img src="/Dashboard.png" className="rounded-md  shadow"></img>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[url(/bg-image.avif)] py-20 mt-20 bg-cover md:bg-cover ">
        <div className="italic md:space-y-0 flex-col flex  md:flex-row justify-around md:text-xl text-lg font-serif w-5/6 text-center items-center space-y-10">
          <div className="md:pb-0 pb-3 flex-col flex items-center space-y-5 md:space-y-10 md:w-1/3 ">
            <h1>
              “Simple, straightforward,<br></br> and super powerful”
            </h1>
            <img src="/verge.png" className=" w-28 h-5"></img>
          </div>
          <div className=" md:py-0 py-10 px-20 md:px-0 md:w-1/3 flex-col flex items-center space-y-5 md:space-y-8 border-gray-300 border-y-2 md:border-y-0 md:border-x-2 border-x-0">
            <h1>
              “The best to-do list app <br></br> on the market”
            </h1>
            <img src="/pcmag.png" className=" w-8 h-11"></img>
          </div>
          <div className=" md:w-1/3 flex-col flex items-center md:space-y-12 space-y-5">
            <h1>“Nothing short of stellar”</h1>
            <img src="/techradar.png" className=" w-32 h-5"></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-36">
        <div className="w-11/12  flex flex-col md:flex-row space-y-20 md:space-y-0">
          <div className="md:w-1/2 w-full space-y-28 ">
            <div className="space-y-7">
              <p className="lg:text-lg md:text-md text-sm font-bold text-green-800">
                Clear your mind
              </p>
              <p className="lg:text-5xl md:text-3xl text-xl font-bold">
                Capture tasks at the speed of thought
              </p>
              <p className="lg:text-xl md:text-lg text-sm text-gray-600 w-4/5">
                We've spent over a decade refining Noteit! to be an extension of
                your mind. Capture and organize tasks instantly using
                easy-flowing, natural language.
              </p>
            </div>
            <div className="space-y-7">
              <p className="lg:text-lg md:text-md text-sm font-bold text-cyan-800 ">
                Focus on what's important
              </p>
              <p className="lg:text-5xl md:text-3xl text-xl font-bold">
                Stay organized and focused
              </p>
              <p className="lg:text-xl md:text-lg text-md text-gray-600 w-4/5">
                Achieve mental clarity by sorting tasks into Today, Upcoming, or
                using custom filters. See only what you need, when you need it.
              </p>
            </div>
          </div>
          <div className=" md:w-1/2 w-full space-y-28 ">
            <div className="sticky top-48">
              <div className="w-full md:p-10 p-5 bg-red-50 shadow rounded-2xl bg-gradient-to-br from-green-800 via-red-300 to-red-200">
                <video
                  ref={videoRef}
                  src="./src/assets/AddTaskVideo.mp4"
                  autoPlay
                  loop
                  muted
                  className="rounded-md"
                />
              </div>
            </div>

            <div className="sticky top-48">
              <div className="w-full md:p-10 p-5 bg-red-50 shadow rounded-2xl bg-gradient-to-br from-cyan-800 via-red-300 to-red-200">
                <video
                  src="./src/assets/AddTaskVideo.mp4"
                  autoPlay
                  loop
                  muted
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-20 pb-52">
        <div className="w-5/6 static space-y-10 md:space-y-0">
          <div className="flex-col flex items-center space-y-5">
            <p className="md:text-4xl text-2xl font-bold pb-10 text-center">
              Kickstart your next project with NoteIt! Templates
            </p>
            <p className="lg:text-xl md:text-lg text-md text-gray-600 text-center">
              No need to create projects or setups from scratch when we have
              <br></br> 50+ templates made for you.
            </p>
          </div>
          <div className="flex-col flex md:flex-row justify-center md:pt-20 space-y-3 md:space-y-0">
            <Button
              variant="tertiary"
              size="xl"
              text="Work"
              decoration="lg:text-lg md:text-md text-sm font-semibold"
              onClick={() => {
                setCards(<WorkCard />);
              }}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Personal"
              decoration="lg:text-lg md:text-md text-sm font-semibold"
              onClick={() => {
                setCards(<PersonalCard />);
              }}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Education"
              decoration="lg:text-lg md:text-md text-sm font-semibold"
              onClick={() => {
                setCards(<EducationCard />);
              }}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Management"
              decoration="lg:text-lg md:text-md text-sm font-semibold"
              onClick={() => {
                setCards(<ManagementCard />);
              }}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Marketing & Sales"
              decoration="lg:text-lg md:text-md text-sm font-semibold"
              onClick={() => {
                setCards(<MarketingCard />);
              }}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Customer Support"
              decoration="lg:text-lg md:text-md text-sm font-semibold"
              onClick={() => {
                setCards(<CustomerSupportCard />);
              }}
            ></Button>
          </div>
          {cards}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-11/12 flex-col md:flex-row flex items-center">
          <div className="md:w-1/2 w-4/5 space-y-8">
            <p className="text-orange-600 font-bold lg:text-xl md:text-lg text-md text-center md:text-start ">
              In it for the long haul
            </p>
            <p className="font-extrabold lg:text-4xl md:text-2xl text-xl text-center md:text-start">
              A task manager you can trust for life
            </p>
            <p className="text-gray-600 lg:text-2xl md:text-xl text-lg text-center md:text-start">
              We've been building Note it! for 18 years and 68 days. Rest
              assuorange that we'll never sell out to the highest bidder.
            </p>
          </div>
          <div className="md:w-1/2 w-4/5 pt-10 md:pt-0">
            <Carousel />
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-b from-slate-50 via-orange-50 to-orange-100 pt-48">
        <div className="flex-col flex items-center space-y-10 pb-36">
          <p className="lg:text-5xl md:text-3xl text-2xl font-bold w-4/5 text-center">
            Gain calmness and clarity with the world's most beloved productivity
            app
          </p>
          <p className="text-gray-600 lg:text-2xl md:text-xl text-lg w-3/5">
            500000+ ★★★★★ reviews on Google Play and App Store
          </p>
          <div className="flex justify-center">
            <Button
              variant="shadow"
              text="Start for free"
              size="md"
              onClick={() => {
                navigate("/loader");
              }}
            ></Button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
