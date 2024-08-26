import { CATEGORY_ICONS } from "@/modules/categories/constants";
import { ForwardRefExoticComponent, SVGProps } from "react";

export const findCategoryIcon = (
  name: string
): ForwardRefExoticComponent<SVGProps<SVGSVGElement>> => {
  const entry = Object.entries(CATEGORY_ICONS).find(
    ([, value]) => value.text === name.toLocaleLowerCase()
  );
  return entry ? entry[1].Icon : CATEGORY_ICONS.DEFAULT.Icon;
};
