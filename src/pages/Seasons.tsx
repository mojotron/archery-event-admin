import { useNavigate } from "react-router";
import Button from "../components/ui/Button";
import SeasonList from "../components/seasons/SeasonList";

const Seasons = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        label="create new season"
        clickHandler={() => navigate("create")}
      />
      <SeasonList title="active seasons" filter="active" />
      <SeasonList title="finished seasons" filter="finished" />
    </div>
  );
};

export default Seasons;
