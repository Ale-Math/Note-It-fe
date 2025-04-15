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
    <div className="lg:max-w-7xl md:max-w-5xl sm:max-w-3xl max-w-xl mx-auto bg-slate-50 font-mono relative">
      <Header></Header>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row justify-between p-5 pl-24 space-x-5">
          <div className="space-y-5 w-1/3">
            <p className="lg:text-6xl md:text-4xl sm:text-2xl text-xl font-bold pb-3 ">
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
            <img src="/appbg.avif" className=" bg-orange-50 rounded-2xl"></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-36">
        <div className="w-11/12 flex justify-center">
          <div className=" flex-col items-center w-1/2 space-y-48">
            <div className="space-y-7">
              <p className="lg:text-lg md:text-md text-sm font-bold text-orange-700">
                Clear your mind
              </p>
              <p className="lg:text-5xl md:text-3xl text-xl font-bold">
                Capture tasks at the speed of thought
              </p>
              <p className="lg:text-xl md:text-lg text-md text-gray-600">
                We've spent over a decade refining Noteit!<br></br> to be an
                extension of your mind. Capture<br></br> and organize tasks
                instantly using<br></br> easy-flowing, natural language.
              </p>
            </div>
            <div className="space-y-7">
              <p className="lg:text-lg md:text-md text-sm font-bold text-cyan-800 ">
                Focus on what's important
              </p>
              <p className="lg:text-5xl md:text-3xl text-xl font-bold">
                Stay organized and<br></br> focused
              </p>
              <p className="lg:text-xl md:text-lg text-md text-gray-600">
                Achieve mental clarity by sorting tasks into Today, Upcoming, or
                using custom<br></br> filters. See only what you need,<br></br>{" "}
                when you need it.
              </p>
            </div>
          </div>
          <div className=" w-1/2 space-y-20">
            <img src="/appbg.avif" className=" bg-orange-50 rounded-2xl"></img>
            <br></br>
            <img src="/appbg.avif" className=" bg-orange-50 rounded-2xl"></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-20 pb-52">
        <div className="w-5/6 static">
          <div className="flex-col flex items-center">
            <p className="text-4xl font-bold pb-10">
              Kickstart your next project with NoteIt! Templates
            </p>
            <p className="text-xl text-gray-600">
              No need to create projects or setups from scratch when we have
            </p>
            <p className="text-xl text-gray-600">50+ templates made for you.</p>
          </div>
          <div className="flex justify-center pt-20">
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
          <div className="w-1/2 space-y-8">
            <p className="text-orange-600 font-bold text-xl">
              In it for the long haul
            </p>
            <p className="font-extrabold text-4xl">
              A task manager you can<br></br> trust for life
            </p>
            <p className="text-gray-600 text-2xl">
              We've been building Note it! for 18<br></br> years and 68 days.
              Rest assuorange that<br></br> we'll never sell out to the highest
              <br></br>
              bidder.
            </p>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
      <div className=" bg-gradient-to-b from-slate-50 via-orange-50 to-orange-100 pt-48 relative">
        <div className="flex-col flex items-center space-y-10 pb-36">
          <p className="text-5xl font-bold">
            &nbsp;Gain calmness and clarity with the<br></br> world's most
            beloved productivity app
          </p>
          <p className="text-gray-600 text-2xl">
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
        <div className="border-t border-solid border-gray-300 p-5 pt-14 flex space-x-10 pb-44 relative">
          <div className="space-y-5 w-2/5 ">
            <a href="/">
              <ColorlessLogo></ColorlessLogo>
            </a>
            <p className="text-lg">
              Join millions of people who organize<br></br> work and life with
              Note it!
            </p>
            <div className="flex items-center text-gray-600 bottom-2 absolute font-sans">
              <Button
                variant="footer"
                size="sm"
                text="Security"
                onClick={() => {}}
              ></Button>
              |
              <Button
                variant="footer"
                size="sm"
                text="Privacy"
                onClick={() => {}}
              ></Button>
              |
              <Button
                variant="footer"
                size="sm"
                text="Terms"
                onClick={() => {}}
              ></Button>
              <div className="pl-3 flex items-center">
                <Copyright></Copyright>
                <p className="text-sm pb-1">&nbsp;alexandermathew.co.in</p>
              </div>
            </div>
          </div>
          <div className="flex-col flex items-start space-y-2">
            <p className="font-bold text-lg pb-4">Features</p>
            <Button
              variant="secondary"
              size="sm"
              text="How It Works"
              onClick={() => {}}
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="For Teams"
              onClick={() => {}}
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Pricing"
              onClick={() => {}}
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Templates"
              onClick={() => {}}
            ></Button>
          </div>
          <div className="flex-col flex items-start space-y-2">
            <p className="font-bold text-lg pb-4">Resources</p>
            <Button
              variant="secondary"
              size="sm"
              text="Download Apps"
              onClick={() => {}}
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Help Center"
              onClick={() => {}}
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Productivity Methods"
              onClick={() => {}}
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Integrations"
              onClick={() => {}}
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Developer API"
              onClick={() => {}}
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Status"
              onClick={() => {}}
            ></Button>
          </div>
          <div className="flex-col flex items-start space-y-2">
            <p className="font-bold text-lg pb-4">Company</p>
            <Button
              variant="secondary"
              size="sm"
              text="About Us"
              onClick={() => {}}
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Careers"
              onClick={() => {}}
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Inspiration Hub"
              onClick={() => {}}
            ></Button>
            <Button
              variant="secondary"
              size="sm"
              text="Press"
              onClick={() => {}}
            ></Button>
          </div>
          <div className="pl-14">
            <div className="flex-col flex items-end space-y-2">
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
