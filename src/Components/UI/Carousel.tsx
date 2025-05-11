import Marquee from "react-fast-marquee";

export const Carousel = () => {
  return (
    <div>
      <section className="flex justify-center items-center ">
        <div className="rounded-2xl w-11/12 bg-slate-50">
          <Marquee
            speed={45}
            gradientColor="slate-50"
            className=" overflow-hidden flex justify-center items-center bg-slate-50"
          >
            <div className=" flex pr-10 flex-col justify-center items-center mx-5 space-y-3 h-4/5 ">
              <img src="./Scroll-1.avif" className="w-full h-[275px]" alt="" />
              <div className="text-center">
                <p className="text-2xl font-bold">30+ million</p>
                <p className="text-gray-600 text-lg">app downloads</p>
              </div>
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center mx-5 space-y-3 h-4/5  ">
              <img src="./Scroll-2.avif" className="w-full h-[275px] " alt="" />
              <div className="text-center">
                <p className="text-2xl font-bold">1+ million</p>
                <p className="text-gray-600 text-lg">Pro users</p>
              </div>
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center mx-5 space-y-3 h-4/5  ">
              <img src="./Scroll-3.avif" className="w-full h-[275px]" alt="" />
              <div className="text-center">
                <p className="text-2xl font-bold">160+ countries</p>
                <p className="text-gray-600 text-lg">worldwide</p>
              </div>
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center mx-5 space-y-3 h-4/5  ">
              <img src="./Scroll-4.avif" className="w-full h-[275px]" alt="" />
              <div className="text-center">
                <p className="text-2xl font-bold">2+ billion</p>
                <p className="text-gray-600 text-lg">tasks completed</p>
              </div>
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
};
