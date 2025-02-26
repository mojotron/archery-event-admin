type Props = {
  regular: string;
  highlighted: string;
};

const SeasonInfoRecord = ({ regular, highlighted }: Props) => {
  return (
    <p className="text-lg space-x-1 font-inter text-main-300">
      <span>{regular}</span>
      <span className="font-bold text-main-100">{highlighted}</span>
    </p>
  );
};

export default SeasonInfoRecord;
