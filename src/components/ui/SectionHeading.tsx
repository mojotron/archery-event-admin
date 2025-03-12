import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <h1 className="uppercase text-main-300 text-xl font-bold font-inter">
      {children}
    </h1>
  );
};

export default SectionHeading;
