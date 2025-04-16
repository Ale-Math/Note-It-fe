interface InfoCardProps {
  heading: String;
  placeholder: string;
  type: string;
}

export function InfoCard(props: InfoCardProps) {
  return (
    <div className="border border-solid rounded-xl w-full  h-14 p-2 hover:bg-orange-50">
      <div className="text-xs pb-1">
        <p>{props.heading}</p>
      </div>
      <div className="">
        <input
          type={props.type}
          className="w-full focus:outline-none hover:bg-orange-50"
          placeholder={props.placeholder}
        ></input>
      </div>
    </div>
  );
}
