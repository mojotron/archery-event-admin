type Props = {
  isActive: boolean;
  label: string;
};

const IsActiveStatus = ({ isActive, label }: Props) => {
  return (
    <div className="text-2xl text-main-300 flex items-baseline gap-1">
      <span>{label} status</span>
      <span
        className={`${
          isActive ? "text-sec-blue-500" : "text-sec-green-500"
        } uppercase font-bold`}
      >
        {isActive ? "finished" : "ongoing"}
      </span>
    </div>
  );
};

export default IsActiveStatus;
