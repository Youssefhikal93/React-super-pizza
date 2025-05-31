import { useNavigate, useRouteError } from "react-router-dom";
import LInkButton from "./LInkButton";
import { useEffect } from "react";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  // Optional: Auto-redirect after delay
  // useEffect(() => {
  //   const timer = setTimeout(() => navigate(-1), 8000);
  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-stone-50 p-8 text-center">
      <div className="animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-16 w-16 text-yellow-500"
        >
          <path
            fillRule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <h1 className="animate-pulse text-3xl font-bold text-stone-800">
        Something went wrong{" "}
        <span className="inline-block animate-pulse">😢</span>
      </h1>

      <p className="animate-fade-in max-w-md rounded-lg bg-stone-100 p-4 text-stone-700 shadow-inner">
        {error.data || error.message}
      </p>

      <LInkButton
        to="-1"
        className="group relative overflow-hidden rounded-lg bg-yellow-500 px-6 py-3 font-medium text-stone-800 shadow-lg transition-all hover:bg-yellow-400 hover:shadow-yellow-500/30"
      >
        <span className="relative z-10 flex items-center gap-2 text-lg">
          <span className="inline-block transition-transform group-hover:-translate-x-1">
            &larr;
          </span>
          Go back
        </span>
        <span className="group-hover:animate-pulse-slow absolute inset-0 -z-0 bg-yellow-400 opacity-0 transition-all group-hover:opacity-100"></span>
      </LInkButton>
    </div>
  );
}

export default Error;
