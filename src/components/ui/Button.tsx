import LoadingSpinnerBtn from "./LoadingSpinnerBtn";

type Props = {
  label: string;
  type?: "button" | "submit";
  isDisabled?: boolean;
  isLoading?: boolean;
  clickHandler?: () => void;
};

const Button = ({
  label,
  type = "button",
  isDisabled = false,
  isLoading = false,
  clickHandler,
}: Props) => {
  return (
    <button
      type={type}
      disabled={isLoading || isDisabled}
      onClick={clickHandler}
      className="cursor-pointer py-2.5 px-5 me-2 mb-2 text-sm font-inter focus:outline-none rounded-lg border border-gray-500 focus:z-10 focus:ring-2 focus:ring-sec-blue-500 bg-main-500 text-main-300 hover:text-sec-green-500 hover:border-sec-green-500 hover:bg-main-700 disabled:border-main-700 disabled:hover:bg-main-500 disabled:text-main-300 disabled:hover:text-main-300"
    >
      {isLoading ? <LoadingSpinnerBtn /> : label}
    </button>
  );
};

export default Button;
