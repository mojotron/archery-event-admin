import IconEdit from "../ui/IconEdit";

type Props = {
  label: string;
  field: string;
  handleClick: () => void;
};

const ChangeDataField = ({ label, field, handleClick }: Props) => {
  return (
    <div className="p-4 flex gap-8 justify-between w-full sm:w-120 border border-main-500 rounded-md">
      <div className="flex flex-col">
        <span className="text-main-300 font-source-code-pro">{label}</span>
        <span className="text-main-100 font-inter font-bold">{field}</span>
      </div>
      <IconEdit onEdit={handleClick} />
    </div>
  );
};

export default ChangeDataField;
