import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// function SearchOrder() {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();
//   function handelSubmit(e) {
//     e.preventDefault();
//     if (!query) return;

//     navigate(`/order/${query}`);
//     setQuery("");
//   }
//   return (
//     <form onSubmit={handelSubmit}>
//       <input
//         placeholder="search order number ..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="focus:ring-opacity-50 w-48 rounded-full bg-yellow-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-center placeholder:text-stone-400 focus:ring focus:ring-yellow-600 focus:outline-none sm:focus:w-72 md:w-64"
//       ></input>
//     </form>
//   );
// }

// export default SearchOrder;
function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handelSubmit} className="relative">
      <input
        placeholder="Search order #..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-full bg-yellow-100 px-4 py-2 text-sm text-stone-700 placeholder-stone-400 shadow-inner transition-all duration-300 focus:w-full focus:bg-yellow-50 focus:ring-2 focus:ring-yellow-500 focus:outline-none sm:w-64"
      />
      <button
        type="submit"
        className="absolute top-1/2 right-2 -translate-y-1/2 text-stone-500 hover:text-yellow-600"
        aria-label="Search"
      >
        🔍
      </button>
    </form>
  );
}
export default SearchOrder;
