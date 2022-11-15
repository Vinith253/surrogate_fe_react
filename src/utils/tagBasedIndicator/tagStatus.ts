import { colors } from "../../style/Color";
import { tagBasedIndicator } from "../Constants";

export const checkTagStatus = (value: string) => {
  let result = {
    bgColor: "#fff",
    color: "#000",
  };
  if (value === tagBasedIndicator.ACTIVE) {
    result.color = "#2D9A3E";
    result.bgColor = colors.lightGreen;
    return result;
  }
  if (value === tagBasedIndicator.PAUSED) {
    result.color = "#ED651A";
    result.bgColor = colors.lightYellow;
    return result;
  }
  if (value === tagBasedIndicator.PAUSED_SCHEDULED) {
    result.color = "#841F1F";
    result.bgColor = colors.lightBrown;
    return result;
  }
  return result;
};
