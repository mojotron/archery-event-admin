import { useNavigate, useParams } from "react-router";

import useSeason from "../hooks/useSeason";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import PageHeading from "../components/ui/PageHeading";
import SeasonInfo from "../components/seasons/SeasonInfo";
// icons
import {
  MdDeleteForever as IconDelete,
  MdEditDocument as IconEdit,
  MdDoneAll as IconFinish,
} from "react-icons/md";
import ButtonIcon from "../components/ui/ButtonIcon";

const SeasonDetails = () => {
  const navigate = useNavigate();
  const { seasonId } = useParams() as { seasonId: string };

  const { season, isLoading, isSuccess, isError } = useSeason(seasonId);

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {isError && <p>unable to fetch season details...</p>}

      {isSuccess && season && (
        <>
          <header>
            <PageHeading>{season?.title}</PageHeading>
          </header>

          <div className="flex items-start gap-8">
            <aside className="space-y-4">
              <SeasonInfo
                tournaments={season?.tournaments.length}
                tournamentCount={season?.tournamentCount}
                createdAt={season.createdAt}
                updatedAt={season.updatedAt}
                seasonType={season.type}
              />

              <div className="w-70">
                <ButtonIcon
                  clickHandler={() => navigate(`delete`)}
                  label="delete season"
                  icon={<IconDelete className="text-error" />}
                />
                <ButtonIcon
                  clickHandler={() => navigate(`edit`)}
                  label="edit season info"
                  icon={<IconEdit />}
                />
                <ButtonIcon
                  clickHandler={() => navigate(`finish`)}
                  label="change season status"
                  icon={<IconFinish className="text-sec-green-500" />}
                />
              </div>
            </aside>

            <section className="w-full">
              <h3 className="font-bold text-2xl text-main-300">Tournaments</h3>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default SeasonDetails;
