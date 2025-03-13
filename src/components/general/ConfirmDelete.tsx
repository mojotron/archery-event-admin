import Form from "../ui/Form";
import ButtonIcon from "../ui/ButtonIcon";
// icons
import {
  MdDeleteForever as IconDelete,
  MdCancel as IconCancel,
} from "react-icons/md";
import LoadingError from "./LoadingError";

type Props = {
  heading: string;
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
  isPending?: boolean;
  isError?: boolean;
  errorMessage?: string;
};

const ConfirmDelete = ({
  heading,
  text,
  onConfirm,
  onCancel,
  isPending,
  isError,
  errorMessage = "Failed to delete, please try again later?",
}: Props) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Form onSubmit={onConfirm}>
        <h3 className=" text-center mb-4 font-bold font-inter text-main-100 text-2xl uppercase">
          {heading}
        </h3>

        {isError && <LoadingError message={errorMessage} />}

        <p className="text-lg text-main-300 text-center">{text}</p>

        <div className="w-full flex justify-center items-center gap-4 my-4">
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
    </div>
  );
};

export default ConfirmDelete;
