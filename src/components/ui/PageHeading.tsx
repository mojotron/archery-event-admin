import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PageHeading = ({ children }: Props) => {
  return (
    <h1 className="py-4 font-passion-one font-bold text-3xl uppercase text-main-100">
      {children}
    </h1>
  );
};

export default PageHeading;
