import { RadioOptionType } from "../components/ui/FormRadio";

export const SCANDINAVIAN3D_HIT = ["center", "vital", "body", "miss"];
export const SCANDINAVIAN3D_ARROWS_PER_TARGET = 3;

export const SCANDINAVIAN3D_HIT_FORM_OPTIONS: RadioOptionType[] =
  SCANDINAVIAN3D_HIT.map((hit) => ({ label: hit, value: hit }));

export const SCANDINAVIAN3D_ARROWS_PER_TARGET_FORM_OPTIONS: RadioOptionType[] =
  [
    { label: "first arrow", value: "1" },
    { label: "second arrow", value: "2" },
    { label: "third arrow", value: "3" },
  ];
