import { useNavigate, useParams } from "react-router";
import useSeason from "../hooks/useSeason";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import PageHeading from "../components/ui/PageHeading";
import ButtonIcon from "../components/ui/ButtonIcon";
// icons
import {
  MdDeleteForever as IconDelete,
  MdCancel as IconCancel,
} from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { deleteSeason } from "../lib/api";

const SeasonDelete = () => {
  const { seasonId } = useParams() as { seasonId: string };
  const navigate = useNavigate();

  const { season, isLoading, isError, isSuccess } = useSeason(seasonId);
  const {
    mutate,
    isPending,
    isError: isDeleteError,
  } = useMutation({
    mutationFn: () => deleteSeason(seasonId),
    onSuccess: () => navigate("/dashboard/seasons", { replace: true }),
  });

  return (
    <div className="w-full flex flex-col items-center gap-8">
      {isLoading && <LoadingSpinner />}
      {isError && <p>error fetching season data...</p>}

      {isSuccess && season && (
        <>
          <header className="">
            <h2 className="font-source-code-pro font-bold text-xl text-main-300">
              delete options for
            </h2>
            <PageHeading>{season.title}</PageHeading>
          </header>
          <section>
            {season?.tournaments.length > 0 ? (
              <>
                <p>Season already have tournaments</p>
              </>
            ) : (
              <>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    mutate();
                  }}
                  className="font-inter border border-error p-8 flex flex-col items-center justify-center gap-4 rounded-md text-main-100"
                >
                  <h3 className="font-bold text-2xl uppercase">
                    delete season
                  </h3>
                  {isDeleteError && (
                    <p className="text-error">
                      could not delete season, please try again later!
                    </p>
                  )}
                  <p className="text-lg text-main-300">
                    Are you about to delete this season. This process in
                    permanent! are you sure?
                  </p>
                  <div className="flex items-center gap-4">
                    <ButtonIcon
                      label="cancel"
                      icon={<IconCancel className="text-sec-green-300" />}
                      clickHandler={() =>
                        navigate(`/dashboard/seasons/${seasonId}`)
                      }
                    />
                    <ButtonIcon
                      label="delete"
                      type="submit"
                      icon={<IconDelete className="text-error" />}
                      isLoading={isPending}
                    />
                  </div>
                </form>
              </>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default SeasonDelete;
