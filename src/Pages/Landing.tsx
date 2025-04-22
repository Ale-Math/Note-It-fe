import { Android } from "../assets/Android";
import { Apple } from "../assets/Apple";
import { Header } from "../Components/LandingComponents/Header";
import { WorkCard } from "../Components/LandingComponents/WorkCard";
import { PersonalCard } from "../Components/LandingComponents/PersonalCard";
import { EducationCard } from "../Components/LandingComponents/EducationCard";
import { Button } from "../Components/UI/Button";
import { useState } from "react";
import { ManagementCard } from "../Components/LandingComponents/ManagementCard";
import { MarketingCard } from "../Components/LandingComponents/MarketingCard";
import { CustomerSupportCard } from "../Components/LandingComponents/CustomerSupportCard";
import { ColorlessLogo } from "../Components/Icons/ColorlessLogo";
import { IconButton } from "../Components/UI/IconButton";
import { Twitter } from "../Components/Icons/Twitter";
import { Youtube } from "../Components/Icons/Youtube";
import { Facebook } from "../Components/Icons/Facebook";
import { Instagram } from "../Components/Icons/Instagram";
import { Copyright } from "../Components/Icons/Copyright";

export function Landing() {
  const [cards, setCards] = useState(<WorkCard />);
  return (
    <div className="lg:max-w-7xl md:max-w-5xl sm:max-w-3xl max-w-xl mx-auto bg-slate-50 font-mono relative overflow-x-hidden">
      <Header></Header>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row justify-between p-5 pl-24 md:space-x-5 space-y-5">
          <div className="space-y-5 md:w-1/3 w-full">
            <p className="lg:text-6xl md:text-4xl text-2xl font-bold pb-3 ">
              Organize your work and life, finally.
            </p>
            <p className="lg:text-xl md:text-lg sm:text-sm text-xs text-gray-600">
              Simplify life for you and your team with the world's #1 task
              manager and to-do list app.
            </p>
            <div className="flex items-center">
              <p className="text-gray-600 font-semibold lg:text-lg md:text-sm text-xs">
                500K+ ★★★★★ reviews from
              </p>
              <div className="flex items-center">
                <Apple></Apple>
                <Android></Android>
              </div>
            </div>
            <div className="p-5 py-10 flex justify-center">
              <Button
                variant="shadow"
                size="md"
                text="Start for free"
                onClick={() => {}}
              ></Button>
            </div>
          </div>
          <div className="md:w-2/3 w-full md:pl-2 flex justify-center">
            <img src="/appbg.avif" className=" bg-orange-50 rounded-2xl"></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-36">
        <div className="w-11/12 flex md:flex-row flex-col justify-center">
          <div className=" flex-col items-center md:w-1/2 w-full space-y-48">
            <div className="space-y-7">
              <p className="lg:text-lg md:text-md text-sm font-bold text-orange-700">
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
          <div className=" md:w-1/2 w-full md:space-y-20 pt-10">
            <img src="/appbg.avif" className=" bg-orange-50 rounded-2xl"></img>
            <br></br>
            <img src="/appbg.avif" className=" bg-orange-50 rounded-2xl"></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-20 pb-52">
        <div className="w-5/6 static">
          <div className="flex-col flex items-center space-y-5">
            <p className="lg:text-4xl md:text-2xl text-xl font-bold pb-10">
              Kickstart your next project with NoteIt! Templates
            </p>
            <p className="lg:text-xl md:text-lg text-md text-gray-600">
              No need to create projects or setups from scratch when we have
            </p>
            <p className="lg:text-xl md:text-lg text-md text-gray-600">
              50+ templates made for you.
            </p>
          </div>
          <div className="flex-col flex md:flex-row justify-center md:pt-20 space-y-3 md:space-y-0">
            <Button
              variant="tertiary"
              size="xl"
              text="Work"
              onClick={() => {
                setCards(<WorkCard />);
              }}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Personal"
              onClick={() => {
                setCards(<PersonalCard />);
              }}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Education"
              onClick={() => {
                setCards(<EducationCard />);
              }}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Management"
              onClick={() => {
                setCards(<ManagementCard />);
              }}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Marketing & Sales"
              onClick={() => {
                setCards(<MarketingCard />);
              }}
            ></Button>
            <Button
              variant="tertiary"
              size="xl"
              text="Customer Support"
              onClick={() => {
                setCards(<CustomerSupportCard />);
              }}
            ></Button>
          </div>
          {cards}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-11/12">
          <div className="md:w-1/2 w-4/5 space-y-8">
            <p className="text-orange-600 font-bold lg:text-xl md:text-lg text-md">
              In it for the long haul
            </p>
            <p className="font-extrabold lg:text-4xl md:text-2xl text-xl">
              A task manager you can trust for life
            </p>
            <p className="text-gray-600 lg:text-2xl md:text-xl text-lg">
              We've been building Note it! for 18 years and 68 days. Rest
              assuorange that we'll never sell out to the highest bidder.
            </p>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
      <div className=" bg-gradient-to-b from-slate-50 via-orange-50 to-orange-100 pt-48 relative">
        <div className="flex-col flex items-center space-y-10 pb-36">
          <p className="lg:text-5xl md:text-3xl text-xl font-bold w-4/5">
            &nbsp;Gain calmness and clarity with the world's most beloved
            productivity app
          </p>
          <p className="text-gray-600 lg:text-2xl md:text-xl text-lg w-3/5">
            500000+ ★★★★★ reviews on Google Play and App Store
          </p>
          <div className="flex justify-center">
            <Button
              variant="shadow"
              text="Start for free"
              size="md"
              onClick={() => {}}
            ></Button>
          </div>
        </div>
        <div className="border-t border-solid border-gray-300 p-5 pt-14 flex-col flex md:flex-row space-x-10 pb-44 relative">
          <div className="space-y-5 md:w-2/5 w-4/5 pb-10">
            <a href="/">
              <ColorlessLogo></ColorlessLogo>
            </a>
            <p className="lg:text-lg md:text-md text-sm w-4/5">
              Join millions of people who organize work and life with Note it!
            </p>
            <div className="flex items-center text-gray-600 sm:bottom-2 md:left-2 bottom-24 left-16 absolute font-sans">
              <Button
                variant="footer"
                size="sm"
                text="Security"
                onClick={() => {}}
                decoration="hover:underline"
              ></Button>
              |
              <Button
                variant="footer"
                size="sm"
                text="Privacy"
                onClick={() => {}}
                decoration="hover:underline"
              ></Button>
              |
              <Button
                variant="footer"
                size="sm"
                text="Terms"
                onClick={() => {}}
                decoration="hover:underline"
              ></Button>
              <div className="pl-3 flex items-center">
                <Copyright></Copyright>
                <p className="md:text-sm text-xs pb-1">
                  &nbsp;alexandermathew.co.in
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col flex items-start space-y-2 pb-5 md:pb-0">
            <p className="font-bold lg:text-lg md:text-md text-sm pb-4">
              Features
            </p>
            <Button
              variant="secondary"
              size="sm"
              text="How It Works"
              onClick={() => {}}
              width="w-full flex"
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="For Teams"
              onClick={() => {}}
              width="w-full flex"
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Pricing"
              onClick={() => {}}
              width="w-full flex"
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Templates"
              onClick={() => {}}
              width="w-full flex"
            ></Button>
          </div>
          <div className="flex-col flex items-start space-y-2 pt-5 md:pt-0 pb-5 md:pb-0 border-gray-300 border-t md:border-t-0">
            <p className="font-bold lg:text-lg md:text-md text-sm pb-4">
              Resources
            </p>
            <Button
              variant="secondary"
              size="sm"
              text="Download Apps"
              onClick={() => {}}
              width="w-full flex"
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Help Center"
              onClick={() => {}}
              width="w-full flex"
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Productivity Methods"
              onClick={() => {}}
              width="w-full flex"
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Integrations"
              onClick={() => {}}
              width="w-full flex"
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Developer API"
              onClick={() => {}}
              width="w-full flex"
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Status"
              onClick={() => {}}
              width="w-full flex"
            ></Button>
          </div>
          <div className="flex-col flex items-start space-y-2 pt-5 md:pt-0  border-t border-gray-300 md:border-t-0 pb-5 md:pb-0">
            <p className="font-bold lg:text-lg md:text-md text-sm pb-4">
              Company
            </p>
            <Button
              variant="secondary"
              size="sm"
              text="About Us"
              onClick={() => {}}
              width="w-full flex"
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Careers"
              onClick={() => {}}
              width="w-full flex"
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Inspiration Hub"
              onClick={() => {}}
              width="w-full flex"
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Press"
              onClick={() => {}}
              width="w-full flex"
            ></Button>
          </div>
          <div className="md:pl-14 pt-5 md:pt-0 md:border-t-0 border-t border-gray-300 ">
            <div className="md:flex-col flex items-end space-y-2">
              <IconButton icon={<Twitter />} onClick={() => {}}></IconButton>
              <IconButton icon={<Youtube />} onClick={() => {}}></IconButton>
              <IconButton icon={<Facebook />} onClick={() => {}}></IconButton>
              <IconButton icon={<Instagram />} onClick={() => {}}></IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
