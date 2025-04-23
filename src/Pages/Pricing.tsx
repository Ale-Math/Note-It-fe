import { useNavigate } from "react-router-dom";
import { Android } from "../assets/Android";
import { Apple } from "../assets/Apple";
import { OliveLeft } from "../Components/Icons/OliveLeft";
import { OliveRight } from "../Components/Icons/OliveRight";
import { Telegraph } from "../Components/Icons/Telegraph";
import { Footer } from "../Components/LandingComponents/Footer";
import { Header } from "../Components/LandingComponents/Header";
import { Button } from "../Components/UI/Button";
import { PriceCard } from "../Components/UI/PriceCard";

export function Pricing() {
  const navigate = useNavigate();

  return (
    <div className="lg:max-w-7xl md:max-w-5xl sm:max-w-3xl max-w-xl mx-auto bg-slate-50 font-mono relative">
      <Header></Header>
      <div className="flex justify-center">
        <div className="flex-col flex w-3/5 text-center items-center space-y-4">
          <p className="lg:text-6xl md:text-4xl text-2xl font-bold ">
            Choose your path to productivity
          </p>
          <p className="lg:text-xl md:text-lg sm:text-sm text-xs text-gray-600 text-center">
            Use Todoist for free forever or upgrade to unlock our most powerful
            features for work and collaboration.
          </p>
          <div className="py-10 flex justify-center">
            <Button
              variant="shadow"
              size="md"
              text="Start for free"
              onClick={() => {
                navigate("/loader");
              }}
            ></Button>
          </div>
          <div className="flex items-center pt-10">
            <p className="text-gray-600 font-semibold lg:text-lg md:text-sm text-xs">
              500K+ ★★★★★ reviews from
            </p>
            <div className="flex items-center">
              <Apple width="13" height="13"></Apple>
              <Android width="16" height="16"></Android>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-24">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
      <div className="bg-gradient-to-b from-slate-50 via-orange-50 to-orange-100 pt-48">
        <div className="flex flex-wrap justify-center items-stretch py-10 text-gray-600 gap-12">
          <div className="flex md:self-end items-center">
            <OliveLeft></OliveLeft>
            <div className="flex-col items-center flex">
              <p className="md:text-lg pb-3 text-sm text-center">
                App of the day
              </p>
              <Apple width="20" height="20"></Apple>
            </div>
            <OliveRight></OliveRight>
          </div>
          <div className="flex md:pb-5 items-center">
            <OliveLeft></OliveLeft>
            <div className="flex-col items-center flex">
              <p className="md:text-lg pb-3 text-sm text-center">
                Best To-<br></br>Do List App
              </p>
              <Telegraph width="24  " height="24"></Telegraph>
            </div>
            <OliveRight></OliveRight>
          </div>
          <div className="flex md:self-end items-center">
            <OliveLeft></OliveLeft>
            <div className="flex-col items-center flex">
              <p className="md:text-lg pb-3 text-sm text-center">
                Best Wear OS
              </p>
              <Android width="24" height="24"></Android>
            </div>
            <OliveRight></OliveRight>
          </div>
        </div>
        <div className="relative flex-col flex items-center pb-48 space-y-5">
          <p className="lg:text-4xl md:text-2xl text-lg font-bold w-3/5 text-center">
            Join 30 million+ people who rely on Todoist to manage work and life
          </p>
          <p className="lg:text-xl md:text-lg sm:text-sm text-xs text-gray-600 text-center">
            Plus tens of thousands of teams from companies of all sizes.
          </p>
          <div className="py-10 flex justify-center">
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
        <Footer />
      </div>
    </div>
  );
}
