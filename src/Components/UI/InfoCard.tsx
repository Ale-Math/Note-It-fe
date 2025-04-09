export function InfoCard() {
  return (
    <div className="border border-solid rounded-xl w-5/6 h-14 p-2">
      <div className="text-xs">
        <p>Email</p>
      </div>
      <div className="">
        <input
          className="w-full bg-stone-50 focus:border-none"
          placeholder="Enter your personal or work email..."
        ></input>
      </div>
    </div>
  );
}
