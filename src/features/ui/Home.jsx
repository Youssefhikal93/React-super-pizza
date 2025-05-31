// import { useSelector } from "react-redux";
// import CreateUser from "../user/CreateUser";
// import Button from "./Button";
// function Home() {
//   const userName = useSelector((state) => state.user.userName);

//   return (
//     <div className="font-display my-10 px-4 text-center">
//       <h1 className="mb-8 text-center text-3xl font-semibold sm:my-16 md:text-3xl">
//         The best pizza.
//         <br />
//         <span className="text-yellow-500">
//           Straight out of the oven, straight to you.
//         </span>
//       </h1>
//       {userName === "" ? (
//         <CreateUser />
//       ) : (
//         <Button to="/menu" type="primary">
//           continue ordeing {userName}
//         </Button>
//       )}
//     </div>
//   );
// }

// export default Home;
import { useSelector } from "react-redux";
import CreateUser from "../user/CreateUser";
import Button from "./Button";

function Home() {
  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="font-display min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Minimal Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-bounce text-4xl opacity-20">
          🍕
        </div>
        <div className="absolute top-40 right-20 animate-pulse text-3xl opacity-30">
          🔥
        </div>
        <div
          className="absolute right-10 bottom-20 animate-bounce text-4xl opacity-30"
          style={{ animationDelay: "0.5s" }}
        >
          🍕
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          {/* Pizza Icon */}
          <div className="mb-6 animate-pulse text-6xl">🍕</div>

          {/* Title */}
          <h1 className="mb-8 text-xl font-bold sm:text-3xl">
            The best pizza.
            <br />
            <span className="text-yellow-500">Straight to you.</span>
          </h1>

          {/* Main Action Card */}
          <div className="rounded-2xl bg-white/90 p-8 shadow-xl backdrop-blur-sm">
            {userName === "" ? (
              <div>
                <div className="mb-4 text-2xl">👋</div>
                <h2 className="mb-6 text-xl font-semibold text-gray-800">
                  {`Welcome! Let's get started`}
                </h2>
                <CreateUser />
              </div>
            ) : (
              <div>
                <div className="mb-4 text-6xl">🎉</div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  Welcome back, {userName}!
                </h2>
                <p className="mb-6 text-gray-600">
                  Ready for some delicious pizza?
                </p>
                <Button
                  to="/menu"
                  type="primary"
                  className="px-8 py-4 text-lg font-semibold"
                >
                  Start Ordering 🛒
                </Button>
              </div>
            )}
          </div>

          {/* Simple tagline */}
          <p className="mt-6 text-gray-600">
            Fresh ingredients, delivered hot in 30 minutes! ⚡
          </p>
          {/* Stats Section */}
          <div className="mx-auto mb-12 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white/70 p-6 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
              <div className="mb-2 text-3xl">⭐</div>
              <div className="text-2xl font-bold text-gray-800">4.9/5</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
            <div className="rounded-lg bg-white/70 p-6 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
              <div className="mb-2 text-3xl">🚀</div>
              <div className="text-2xl font-bold text-gray-800">30 min</div>
              <div className="text-sm text-gray-600">Average Delivery</div>
            </div>
            <div className="rounded-lg bg-white/70 p-6 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
              <div className="mb-2 text-3xl">🍕</div>
              <div className="text-2xl font-bold text-gray-800">50k+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
