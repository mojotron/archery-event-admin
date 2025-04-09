type Props = {
  label: string;
  isFinished: boolean;
};

const ActiveStatus = ({ label, isFinished }: Props) => {
  return (
    <div className="space-x-2 font-inter text-lg">
      <span className="text-main-300">{label}</span>
      {isFinished ? (
        <span className="uppercase font-bold text-sec-blue-500">finished</span>
      ) : (
        <span className="uppercase font-bold text-sec-green-500">active</span>
      )}
    </div>
  );
};

export default ActiveStatus;
