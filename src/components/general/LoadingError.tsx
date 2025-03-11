type Props = {
  message?: string;
};

const LoadingError = ({
  message = "Failed to load data, please try again later!",
}: Props) => {
  return (
    <div>
      <span>{message}</span>
    </div>
  );
};

export default LoadingError;
