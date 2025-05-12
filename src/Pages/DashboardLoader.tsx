import { useEffect } from "react";
import { Spinner } from "../Components/Icons/Spinner";
import { useNavigate } from "react-router-dom";

export function DashboardLoader() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-50">
      <div>
        <img
          className="lg:max-w-24 lg:max-h-24 lg:pb-4 md:max-w-20 md:max-h-20 md:pb-3 sm:pb-2 sm:max-w-12 sm:max-h-12 max-w-8 max-h-8"
          src="\Noteit.png"
        />
        <Spinner></Spinner>
      </div>
    </div>
  );
}
