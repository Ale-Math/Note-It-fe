interface CardProps {
  title: string;
  description: string;
  price: number;
  priceInfo?: string;
  image: string;
}

export function PriceCard(props: CardProps) {
  return (
    <div className="border w-96 bg-white shadow-md rounded-3xl">
      <div className="p-10 flex-col space-y-14">
        <img className="w-28 h-26 rounded-xl" src={props.image} />
        <div className="space-y-3">
          <p className="text-3xl font-extrabold ">{props.title}</p>
          <p className="text-xl text-gray-600">{props.description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-4xl">₹{props.price}</p>
          <p className="text-gray-600 text-xs text-wrap w-5/12">
            {props.priceInfo}
          </p>
        </div>
      </div>
    </div>
  );
}
