import { colors } from '../../style/Color';
import { tagBasedIndicator } from '../Constants';

export const ListTagStatus = (value: string) => {
  let result = {
    bgColor: '#fff',
    color: '#000',
  };
  if (value === tagBasedIndicator.ACTIVE) {
    result.color = '#1C592A';
    result.bgColor = '#E3F3E6';
    return result;
  }
  if (value === tagBasedIndicator.PAUSED) {
    result.color = '#997F31';
    result.bgColor = '#FBF2D7';
    return result;
  }
  if (value === tagBasedIndicator.PAUSED_SCHEDULED) {
    result.color = '#992D26';
    result.bgColor = '#FCE4E5';
    return result;
  }
  return result;
};
