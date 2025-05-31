import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, type, onClick }) {
  const baseClasses =
    "inline-block rounded-lg bg-yellow-500 font-bold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-amber-50";

  const sizeClasses = {
    primary: baseClasses + " px-4 py-3 text-sm",
    small: baseClasses + " px-3 py-2 text-xs",
    round: baseClasses + " px-2.5 py-1 text-sm font-bold",
    secondary:
      "inline-block rounded-lg bg-stone-500 font-bold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:ring focus:ring-stone-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-amber-50 border-1 text-white px-4 py-3 text-sm hover:text-stone-800 text-sm",
  };

  // const className = `${baseClasses} ${sizeClasses[type]}`;

  if (to)
    return (
      <Link to={to} className={sizeClasses[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        className={sizeClasses[type]}
        disabled={disabled}
      >
        {children}
      </button>
    );

  return (
    <button className={sizeClasses[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
