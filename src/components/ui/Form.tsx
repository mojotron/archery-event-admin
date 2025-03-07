import { ReactNode } from "react";

type FormParams = {
  children: ReactNode;
  handler: () => void;
};

const Form = ({ handler, children }: FormParams) => {
  return (
    <form
      className="w-full py-4 sm:w-[600px] flex flex-col gap-2"
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
