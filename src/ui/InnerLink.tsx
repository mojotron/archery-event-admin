import { ReactNode } from "react";
import { Link } from "react-router";

type Params = {
  path: string;
  children: ReactNode;
};

const InnerLink = ({ path, children }: Params) => {
  return (
    <Link className="" to={path}>
      {children}
    </Link>
  );
};

export default InnerLink;
