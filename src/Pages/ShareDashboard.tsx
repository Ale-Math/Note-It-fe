import { PageNotFound } from "./PageNotFound";

export function ShareDashboard() {
  const token = localStorage.getItem("token");

  return (
    <div>
      {token ? (
        <div className="lg:max-w-screen md:max-w-5xl sm:max-w-3xl max-w-xl  font-mono "></div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}
