import { useNavigate } from "react-router-dom";
import { Header } from "../Components/LandingComponents/Header";
import { Button } from "../Components/UI/Button";
import { Footer } from "../Components/LandingComponents/Footer";

export function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="lg:max-w-7xl md:max-w-5xl sm:max-w-3xl max-w-xl mx-auto bg-slate-50 font-mono relative">
      <Header></Header>
      <div className="flex-col items-center flex gap-5 pb-20">
        <p className="lg:text-5xl md:text-2xl text-xl font-bold">
          Hmmm,that page doesn't exist.
        </p>
        <p className="text-gray-600 lg:text-lg md:text-md text-xs ">
          Get back to organizing work and life by clicking the below button.
        </p>
        <Button
          size="lg"
          variant="primary"
          decoration="lg:text-lg md:text-md text-sm"
          text="Home"
          onClick={() => {
            navigate("/");
          }}
        ></Button>
        <img className="w-2/5 pt-20" src="/NotFound.avif"></img>
      </div>
      <Footer></Footer>
    </div>
  );
}
