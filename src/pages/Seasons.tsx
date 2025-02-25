import { useNavigate } from "react-router";
import Button from "../components/ui/Button";

const Seasons = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        label="create new season"
        clickHandler={() => navigate("create")}
      />
    </div>
  );
};

export default Seasons;
