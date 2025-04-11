import { ReactNode } from "react";

type Props = {
  label: string;
  icon?: ReactNode;
  onClick: () => void;
};

const MenuOption = ({ label, icon, onClick }: Props) => {
  return (
    <li
      onClick={onClick}
      className="px-4 py-0.5 flex items-center gap-1 font-bold text-lg text-main-100 cursor-pointer hover:bg-main-500 hover:text-sec-blue-300"
    >
      {icon && icon}
      <span>{label}</span>
    </li>
  );
};

export default MenuOption;
