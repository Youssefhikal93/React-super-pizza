// import { Link } from "react-router-dom";
// import Button from "../ui/Button";

// function EmptyCart() {
//   return (
//     <div className="mx-2 grid-rows-3 space-y-5">
//       <Button type="secondary" to="/menu">
//         &larr; Back to menu
//       </Button>

//       <p className="mt-20 rounded-2xl bg-stone-200 p-12 text-center text-lg font-semibold">
//         Your cart is still empty. Start adding some pizzas 😁
//       </p>
//     </div>
//   );
// }

// export default EmptyCart;
// EmptyCart.jsx
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function EmptyCart() {
  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
      {/* Floating Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 animate-bounce text-6xl opacity-10">
          🍕
        </div>
        <div className="absolute top-40 right-20 animate-pulse text-4xl opacity-15">
          🛒
        </div>
        <div
          className="absolute bottom-32 left-20 animate-bounce text-5xl opacity-10"
          style={{ animationDelay: "1s" }}
        >
          🍕
        </div>
        <div
          className="absolute top-60 right-1/4 animate-pulse text-3xl opacity-20"
          style={{ animationDelay: "2s" }}
        >
          😋
        </div>
      </div>

      <div className="relative z-10 mx-2 mx-auto max-w-2xl space-y-8 py-12">
        {/* <Button type="secondary" to="/menu">
          &larr; Back to menu
        </Button> */}

        <div className="text-center">
          {/* Large Empty Cart Icon */}
          <div className="mb-8">
            <div className="mb-4 animate-pulse text-8xl">🛒</div>
            <div className="text-5xl opacity-50">📭</div>
          </div>

          {/* Main Message - Enhanced version of original */}
          <div className="mt-20 rounded-2xl border border-white/20 bg-white/80 p-12 text-center shadow-xl backdrop-blur-sm">
            <p className="mb-4 text-lg font-semibold text-gray-800">
              Your cart is still empty. Start adding some pizzas 😁
            </p>

            {/* Additional encouragement */}
            <div className="mt-6">
              <Button
                type="primary"
                to="/menu"
                className="inline-flex items-center space-x-2"
              >
                <span>🍕</span>
                <span>Browse Menu</span>
              </Button>
            </div>
          </div>

          {/* Quick suggestions */}
          {/* <div className="mt-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="cursor-pointer rounded-xl bg-white/60 p-4 transition-colors hover:bg-white/90">
                <div className="mb-2 text-3xl">🍕</div>
                <div className="font-semibold text-gray-800">Margherita</div>
                <div className="text-sm text-gray-600">Classic & Fresh</div>
              </div>
              <div className="cursor-pointer rounded-xl bg-white/60 p-4 transition-colors hover:bg-white/90">
                <div className="mb-2 text-3xl">🌶️</div>
                <div className="font-semibold text-gray-800">Pepperoni</div>
                <div className="text-sm text-gray-600">Spicy & Savory</div>
              </div>
              <div className="cursor-pointer rounded-xl bg-white/60 p-4 transition-colors hover:bg-white/90">
                <div className="mb-2 text-3xl">🥬</div>
                <div className="font-semibold text-gray-800">
                  Veggie Supreme
                </div>
                <div className="text-sm text-gray-600">Fresh & Healthy</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default EmptyCart;
