/* eslint-disable react/prop-types */

import { formatCurrency } from "../../utils/helpers";
// function OrderItem({ item, isLoadingIngredients, ingredients }) {
//   const { quantity, name, totalPrice } = item;

//   return (
//     <li className="space-y-1 py-2">
//       <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
//         <p>
//           <span className="font-bold">{quantity}&times;</span> {name}
//         </p>
//         <p className="font-bond">{formatCurrency(totalPrice)}</p>
//       </div>
//       <p className="text-sm text-stone-500 uppercase italic">
//         {isLoadingIngredients ? "loading...." : ingredients.join(", ")}
//       </p>
//     </li>
//   );
// }

// export default OrderItem;
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="px-3 py-3 transition-colors hover:bg-stone-50">
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
        <p className="font-medium">
          <span className="font-bold text-yellow-600">{quantity}&times;</span>{" "}
          {name}
        </p>
        <p className="font-bold text-stone-700">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm text-stone-500 italic">
        {isLoadingIngredients ? (
          <span className="inline-block h-4 w-full animate-pulse bg-stone-200"></span>
        ) : (
          ingredients.join(", ")
        )}
      </p>
    </li>
  );
}
export default OrderItem;
