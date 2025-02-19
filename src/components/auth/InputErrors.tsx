export type InputError = {
  message: string;
  inputErrors: { message: string }[];
};

const InputErrors = ({ error }: { error: InputError }) => {
  const { message, inputErrors } = error;

  if (message === "Form input error") {
    return (
      <ul className="text-error text-sm font-inter space-y-1">
        {inputErrors.map((err, i) => (
          <li key={i}>{err.message}</li>
        ))}
      </ul>
    );
  }

  return <p className="text-error text-sm font-inter">{message}</p>;
};

export default InputErrors;
