type Props = {
  message?: string;
};

const LoadingError = ({
  message = "Failed to load data, please try again later!",
}: Props) => {
  return (
    <div className="text-center text-error text-lg font-inter">
      <span>{message}</span>
    </div>
  );
};

export default LoadingError;
