import { ReactNode } from "react";

type FormParams = {
  children: ReactNode;
  onSubmit: () => void;
};

const Form = ({ onSubmit, children }: FormParams) => {
  return (
    <form
      className="w-full py-2 sm:w-[600px] flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
