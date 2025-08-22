import "./index.css";

function Resizable_div({ bgColor, children }) {
  const colorObj = {
    RED: "bg-red-600",
    GREEN: "bg-green-500",
    BLUE: "bg-blue-500",
    BLACK: "bg-stone-950",
    YELLOW: "bg-yellow-500",
    BROWN: "bg-orange-950",
    INDIGO: "bg-indigo-500",
    PURPLE: "bg-purple-500",
    GOLD: "bg-amber-600",
    ORANGE: "bg-orange-500",
  };

  return (
    <div className={`mydiv ${colorObj[bgColor]}`}>
      {children}
    </div>
  );
}

export default Resizable_div;
