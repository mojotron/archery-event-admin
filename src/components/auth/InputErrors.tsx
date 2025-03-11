import { ResponseInputErrorsType } from "../../types/errorTypes";

type Props = {
  response: ResponseInputErrorsType;
};

const InputErrors = ({ response }: Props) => {
  const { message, inputErrors } = response;

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
