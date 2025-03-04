import { ReactNode } from "react";
import LoadingSpinnerBtn from "./LoadingSpinnerBtn";

type Params = {
  label: string;
  icon: ReactNode;
  isLoading?: boolean;
  type?: "button" | "submit";
  clickHandler?: () => void;
};

const ButtonIcon = ({
  label,
  icon,
  isLoading = false,
  type = "button",
  clickHandler = undefined,
}: Params) => {
  return (
    <button
      type={type}
      onClick={clickHandler}
      className="flex items-center gap-1 cursor-pointer py-2.5 px-5 me-2 mb-2 text-md font-inter focus:outline-none rounded-lg border border-main-300 focus:z-10 focus:ring-2 bg-main-500 text-main-300 hover:text-main-100 hover:border-main-100 hover:bg-main-700 disabled:border-main-700 disabled:hover:bg-main-500 disabled:text-main-300 disabled:hover:text-main-300"
    >
      {isLoading ? <LoadingSpinnerBtn /> : icon} <span>{label}</span>
    </button>
  );
};

export default ButtonIcon;
