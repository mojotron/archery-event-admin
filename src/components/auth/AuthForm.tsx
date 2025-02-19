import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  handler: () => void;
};

const AuthForm = ({ handler, children }: Props) => {
  return (
    <form
      className="w-full sm:w-96 flex flex-col items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        handler();
      }}
    >
      {children}
    </form>
  );
};

export default AuthForm;
