import { useParams } from "react-router";
import useScandinavian3DScorecardList from "../../hooks/useScandinavian3DScorecardList";

const Scandinavian3DScores = () => {
  const { tournamentId } = useParams() as { tournamentId: string };

  const { scorecards } = useScandinavian3DScorecardList(tournamentId);
  return (
    <div>
      {scorecards && (
        <ul>
          {scorecards.map((sc) => (
            <li key={sc.id}>{JSON.stringify(sc)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Scandinavian3DScores;
