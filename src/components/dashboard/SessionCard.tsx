import { formatDistance } from "date-fns";
import { SessionType } from "../../types/sessionTypes";
import { MdDeleteForever as IconDelete } from "react-icons/md";
import useSessionDelete from "../../hooks/useSessionDelete";

type Props = {
  session: SessionType;
};

const SessionCard = ({ session }: Props) => {
  const { sessionDelete } = useSessionDelete(session.id);

  const createdAt = formatDistance(new Date(session.createdAt), new Date(), {
    addSuffix: true,
  });

  return (
    <li className="relative p-4 bg-main-500 text-main-100 rounded-md flex flex-col gap-1">
      {session.isCurrent && (
        <p className="text-sec-green-300 font-bold">CURRENT SESSION</p>
      )}

      <div className="text-main-300 flex flex-col">
        <span className="text-base font-bold">Device</span>
        <span className="text-main-300 text-sm font-source-code-pro">
          {session.userAgent}
        </span>
      </div>

      <div className="text-main-100 flex gap-1 items-center">
        <span>Created</span>
        <span>{createdAt}</span>
      </div>

      {!session.isCurrent && (
        <button
          onClick={() => sessionDelete()}
          className="absolute top-2 right-2 font-bold text-main-100 text-xl cursor-pointer border rounded-full p-0.5 hover:bg-error hover:text-main-500"
        >
          <IconDelete />
        </button>
      )}
    </li>
  );
};

export default SessionCard;
