import { useNavigate } from "react-router";
import HighlightRecord from "../../../components/ui/HighlightRecord";
import { ArcherType } from "../../../types/archerTypes";
import ButtonIcon from "../../../components/ui/ButtonIcon";
// icons
import { GiArrowCluster } from "react-icons/gi";

type Props = {
  archer: ArcherType;
};

const ArcherCard = ({ archer }: Props) => {
  const navigate = useNavigate();
  return (
    <li className="bg-main-500 px-6 py-4 flex gap-8 justify-between rounded-md">
      <div>
        <HighlightRecord regular="first name" highlighted={archer.firstName} />
        <HighlightRecord regular="last name" highlighted={archer.lastName} />
        <HighlightRecord regular="username" highlighted={archer.username} />
      </div>
      <div>
        <ButtonIcon
          label="manage archer"
          icon={<GiArrowCluster className="text-2xl text-sec-blue-500" />}
          clickHandler={() => navigate(`${archer.id}`)}
        />
      </div>
    </li>
  );
};

export default ArcherCard;
