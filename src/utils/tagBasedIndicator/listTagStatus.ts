import { colors } from '../../style/Color';
import { tagBasedIndicator } from '../Constants';
export const ListTagStatus = (value: string) => {
  let result = {
    bgColor: '#fff',
    color: '#000',
  };
  if (value === tagBasedIndicator.ACTIVE) {
    result.color = colors.ActiveStatusTextColor;
    result.bgColor = colors.ActiveStatusBGColor;
    return result;
  }
  if (
    value === tagBasedIndicator.PAUSED ||
    value === tagBasedIndicator.WAITING_FOR_APPROVAL
  ) {
    result.color = colors.PausedStatusTextColor;
    result.bgColor = colors.PauseStatusBGColor;
    return result;
  }
  if (
    value === tagBasedIndicator.PAUSED_SCHEDULED ||
    value === tagBasedIndicator.CLOSED
  ) {
    result.color = colors.ScheduledPauseTextColor;
    result.bgColor = colors.ScheduledPausedBgColor;
    return result;
  }
  return result;
};
