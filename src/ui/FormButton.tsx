import React from "react";

type Params = {
  isDisabled: boolean;
  isLoading: boolean;
  text: string;
};

const FormButton = ({ isDisabled, isLoading, text }: Params) => {
  return (
    <button type="submit" disabled={disabled}>
      {isLoading ? "Loading" : text}
    </button>
  );
};

export default FormButton;
