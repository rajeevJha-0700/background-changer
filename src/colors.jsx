import "./index.css";

function ColorBtn({ colorName, COLOR }) {
  const colorObj = {
    RED: "bg-red-500",
    GREEN: "bg-green-500",
    BLUE: "bg-blue-500",
    BLACK: "bg-cyan-50",
    YELLOW: "bg-yellow-500",
    BROWN: "bg-orange-950",
    INDIGO: "bg-indigo-500",
    PURPLE: "bg-purple-500",
    GOLD: "bg-amber-600",
    ORANGE: "bg-orange-500",
  };

  return (
    <button
      onClick={() => COLOR(colorName)}
      type="button"
      className={`px-5 py-3 mx-5 font-semibold rounded-full ${colorObj[colorName]} dark:text-gray-800`}
    >
      {colorName}
    </button>
  );
}

export default ColorBtn;
