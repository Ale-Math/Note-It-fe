interface ErrorProp {
  message: string;
}

export function ErrorMessage(prop: ErrorProp) {
  return (
    <div>
      <p className="absolute top-36 py-2 text-lg right-96 px-5 border rounded-2xl bg-red-100 text-red-600 font-bold">
        {prop.message}
      </p>
    </div>
  );
}
