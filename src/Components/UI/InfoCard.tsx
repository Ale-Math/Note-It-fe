interface InfoCardProps {
  heading: String;
  placeholder: string;
  type: string;
  ref?: any;
  message?: string;
}

export function InfoCard(props: InfoCardProps) {
  return (
    <div className="border border-solid rounded-xl w-full  h-14 p-2 hover:bg-orange-50 group text-xs md:text-md">
      <div className="">
        <p className="absolute top-68 px-5 border rounded-2xl bg-red-100 text-red-600 font-bold">
          Incorrect email.
        </p>
        <p>{props.heading}</p>
      </div>
      <div>
        <input
          ref={props.ref}
          type={props.type}
          className="w-full focus:outline-none group-hover:bg-orange-50 md:text-lg text-xs"
          placeholder={props.placeholder}
        ></input>
      </div>
    </div>
  );
}
