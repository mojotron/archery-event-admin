import { ReactNode } from "react";

type FormParams = {
  children: ReactNode;
  handler: () => void;
};

const Form = ({ handler, children }: FormParams) => {
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

export default Form;
