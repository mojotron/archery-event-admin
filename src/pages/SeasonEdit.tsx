// hooks
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import useSeason from "../hooks/useSeason";
import useSeasonMutate from "../hooks/useSeasonMutate";
// components
import LoadingSpinner from "../components/ui/LoadingSpinner";
import PageHeading from "../components/ui/PageHeading";
import ButtonIcon from "../components/ui/ButtonIcon";
import Form from "../components/ui/Form";
import FormInput from "../components/ui/FormInput";
// icons
import {
  MdArrowBack as IconBack,
  MdEditDocument as IconEdit,
} from "react-icons/md";

const SeasonEdit = () => {
  const { seasonId } = useParams() as { seasonId: string };
  const navigate = useNavigate();

  const { season, isLoading, isError, isSuccess } = useSeason(seasonId);

  const [fieldName, setFieldName] = useState<
    undefined | "title" | "description" | "tournamentCount"
  >(undefined);
  const [value, setValue] = useState("");

  const { updateSeason } = useSeasonMutate(seasonId);

  const handleSubmit = () => {
    updateSeason({
      ...((fieldName === "title" || fieldName === "description") && {
        [fieldName]: value,
      }),
      ...(fieldName === "tournamentCount" && {
        tournamentCount: parseInt(value),
      }),
    });
    setFieldName(undefined);
    setValue("");
  };

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {isError && <p>could not fetch season data</p>}

      {isSuccess && season && (
        <div>
          <header>
            <ButtonIcon
              label="go back"
              icon={<IconBack className="text-sec-blue-500" />}
              clickHandler={() => navigate(`/dashboard/seasons/${seasonId}`)}
            />
            <PageHeading>Edit Season Information</PageHeading>
          </header>

          {fieldName && (
            <Form handler={handleSubmit}>
              <h3 className="font-passion-one text-main-300 text-2xl uppercase">
                Edit Field
              </h3>
              <FormInput
                label={
                  fieldName === "tournamentCount"
                    ? "number of tournaments"
                    : fieldName
                }
                type={
                  fieldName === "title"
                    ? "text"
                    : fieldName === "description"
                    ? "textarea"
                    : "number"
                }
                name={fieldName}
                value={value}
                handleChange={(e) => setValue(e.target.value)}
              />
              <div className="flex">
                <ButtonIcon
                  label="cancel"
                  icon={<IconBack className="text-sec-blue-500" />}
                  clickHandler={() => {
                    setFieldName(undefined);
                    setValue("");
                  }}
                />

                <ButtonIcon
                  label="update"
                  type="submit"
                  icon={<IconEdit className="text-sec-green-500" />}
                />
              </div>
            </Form>
          )}

          <div>
            <h3 className="font-passion-one font-bold text-main-300 text-2xl uppercase tracking-wider">
              title
            </h3>
            <span className="text-main-100 text-xl font-inter">
              {season.title}
            </span>
            <ButtonIcon
              label="edit"
              icon={<IconEdit className="text-main-300" />}
              clickHandler={() => {
                setFieldName("title");
                setValue(season.title);
              }}
            />
          </div>

          <div>
            <h3 className="font-passion-one font-bold text-main-300 text-2xl uppercase tracking-wider">
              description
            </h3>
            <span className="text-main-100 text-xl font-inter">
              {season.description}
            </span>
            <ButtonIcon
              label="edit"
              icon={<IconEdit className="text-main-300" />}
              clickHandler={() => {
                setFieldName("description");
                setValue(season.description);
              }}
            />
          </div>

          <div>
            <h3 className="font-passion-one font-bold text-main-300 text-2xl uppercase tracking-wider">
              number of tournaments
            </h3>
            <span className="text-main-100 text-xl font-inter">
              {season.tournaments.length}/{season.tournamentCount}
            </span>
            <ButtonIcon
              label="edit"
              icon={<IconEdit className="text-main-300" />}
              clickHandler={() => {
                setFieldName("tournamentCount");
                setValue(season.tournamentCount.toString());
              }}
            />
          </div>
          {/*  */}
        </div>
      )}
    </div>
  );
};

export default SeasonEdit;
