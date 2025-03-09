import FormRadio from "../ui/FormRadio";
import {
  SCANDINAVIAN3D_ARROWS_PER_TARGET_FORM_OPTIONS,
  SCANDINAVIAN3D_HIT_FORM_OPTIONS,
} from "../../constants/score";
import { ChangeEvent } from "react";

type Props = {
  label: string;
  selectedHit: string;
  selectedArrow: string;
  onChangeHit: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeArrow: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Scandinavian3DTargetOptions = ({
  label,
  selectedHit,
  selectedArrow,
  onChangeHit,
  onChangeArrow,
}: Props) => {
  return (
    <div className="border-t border-t-main-500 py-1">
      <h3 className="text-main-100 font-bold mb-1">{label}</h3>
      <div className="flex gap-8">
        <FormRadio
          name={label + "hit"}
          selected={selectedHit}
          handleChange={onChangeHit}
          options={SCANDINAVIAN3D_HIT_FORM_OPTIONS}
        />

        <FormRadio
          name={label + "arrow"}
          selected={selectedArrow}
          handleChange={onChangeArrow}
          options={SCANDINAVIAN3D_ARROWS_PER_TARGET_FORM_OPTIONS}
        />
      </div>
    </div>
  );
};

export default Scandinavian3DTargetOptions;
