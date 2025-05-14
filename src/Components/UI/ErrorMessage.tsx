interface ErrorProp {
  message: string;
}

export function ErrorMessage(prop: ErrorProp) {
  return (
    <div>
      <p className="flex justify-center absolute top-60 right-60 text-center py-0.5 px-2 text-sm md:top-36 md:py-2 md:text-lg md:right-96 rounded-xl bg-red-100 text-red-600 font-bold">
        {prop.message}
      </p>
    </div>
  );
}
