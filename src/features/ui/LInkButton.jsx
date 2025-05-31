import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function LInkButton({ children, to }) {
  const navigate = useNavigate();
  const classes =
    "text-sm text-blue-500 hover:text-blue-700 hover:cursor-pointer";
  if (to === "-1")
    return (
      <button className={classes} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
}

export default LInkButton;
