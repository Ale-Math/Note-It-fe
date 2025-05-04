import { ColorlessLogo } from "../Icons/ColorlessLogo";
import { Copyright } from "../Icons/Copyright";
import { Facebook } from "../Icons/Facebook";
import { Instagram } from "../Icons/Instagram";
import { Twitter } from "../Icons/Twitter";
import { Youtube } from "../Icons/Youtube";
import { Button } from "../UI/Button";
import { IconButton } from "../UI/IconButton";

export function Footer() {
  return (
    <div className="border-t border-solid border-gray-300 p-5 pt-14 flex-col flex md:flex-row space-x-10 pb-44">
      <div className="space-y-5 md:w-2/5 w-4/5 pb-10 pl-10 md:pl-0">
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
        <p className="font-bold lg:text-lg md:text-md text-sm pb-4">Features</p>
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
        <p className="font-bold lg:text-lg md:text-md text-sm pb-4">Company</p>
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
          <IconButton
            icon={<Twitter />}
            onClick={() => window.open("https://x.com/", "_blank")}
          ></IconButton>
          <IconButton
            icon={<Youtube />}
            onClick={() => window.open("https://www.youtube.com/", "_blank")}
          ></IconButton>
          <IconButton
            icon={<Facebook />}
            onClick={() => window.open("https://www.facebook.com/", "_blank")}
          ></IconButton>
          <IconButton
            icon={<Instagram />}
            onClick={() => window.open("https://www.instagram.com/", "_blank")}
          ></IconButton>
        </div>
      </div>
    </div>
  );
}
