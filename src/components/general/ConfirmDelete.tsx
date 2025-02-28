import Form from "../ui/Form";
import ButtonIcon from "../ui/ButtonIcon";
// icons
import {
  MdDeleteForever as IconDelete,
  MdCancel as IconCancel,
} from "react-icons/md";

type Props = {
  heading: string;
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
  isPending?: boolean;
  isError?: boolean;
};

const ConfirmDelete = ({
  heading,
  text,
  onConfirm,
  onCancel,
  isPending,
  isError,
}: Props) => {
  return (
    <Form handler={onConfirm}>
      <h3 className="mb-4 font-bold font-inter text-main-100 text-2xl uppercase">
        {heading}
      </h3>

      {isError && (
        <p className="text-error">
          could not delete season, please try again later!
        </p>
      )}

      <p className="text-lg text-main-300">{text}</p>

      <div className="flex items-center gap-4 my-4">
        <ButtonIcon
          label="cancel"
          icon={<IconCancel className="text-sec-green-300" />}
          clickHandler={onCancel}
        />
        <ButtonIcon
          label="delete"
          type="submit"
          icon={<IconDelete className="text-error" />}
          isLoading={isPending}
        />
      </div>
    </Form>
  );
};

export default ConfirmDelete;
