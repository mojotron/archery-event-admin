type InputErrorType = {
  message: string;
};

export type ResponseInputErrorsType = {
  status: number;
  message: string;
  inputErrors: InputErrorType[];
};
