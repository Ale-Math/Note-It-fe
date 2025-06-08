import { SideBar } from "../Components/UI/SideBar";
import { PageNotFound } from "./PageNotFound";
import { InfoCard } from "../Components/UI/InfoCard";
import { Button } from "../Components/UI/Button";
import { useRef, useState } from "react";
import axios from "axios";

export function CreateProject() {
  const token = localStorage.getItem("token");
  const [loadProject, setLoadProject] = useState(false);

  const projectRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  async function addProject() {
    const project = projectRef.current?.value.trim();
    const sharedEmail = emailRef.current?.value.trim();

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/newproject`,
        {
          project: project,
          sharedemail: sharedEmail,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (projectRef.current !== null) {
        projectRef.current.value = "";
      }
      if (emailRef.current !== null) {
        emailRef.current.value = "";
      }
      setLoadProject(!loadProject);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      {token ? (
        <div className="lg:max-w-screen md:max-w-5xl sm:max-w-3xl max-w-xl  font-mono ">
          <div className="flex">
            <SideBar
              loadProject={loadProject}
              disabled={true}
              sharedFocus="bg-orange-100"
            ></SideBar>
            <div className="w-4/5 md:p-20 p-10 space-y-5">
              <p className="md:text-2xl text-xl font-bold">Create Project </p>
              <div className="border"></div>

              <div className="space-y-5 pt-10 pl-5 flex flex-col w-4/5 items-center  p-10 ">
                <InfoCard
                  ref={projectRef}
                  heading="Enter Project Name"
                  placeholder="What would you like to name your project?"
                  type="text"
                />
                <InfoCard
                  ref={emailRef}
                  heading="Enter Full Email"
                  placeholder="Who would you like to collaborate with?"
                  type="text"
                />
                <Button
                  variant="primary"
                  size="lg"
                  text="Create Project"
                  decoration="md:text-md text-sm"
                  onClick={addProject}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}
