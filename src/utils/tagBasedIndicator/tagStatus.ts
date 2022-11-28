import { off } from 'process';
import { colors } from '../../style/Color';
import { tagBasedIndicator } from '../Constants';

export const checkTagStatus = (value: string) => {
  let result = {
    bgColor: '#fff',
    color: '#000',
  };
  if (value === tagBasedIndicator.ACTIVE || value.includes('Approved')) {
    result.color = '#32A64D';
    result.bgColor = colors.lightGreen;
    return result;
  }
  if (value === tagBasedIndicator.PAUSED || value.includes('Pending')) {
    result.color = '#F37B21';
    result.bgColor = '';
    return result;
  }
  if (value === tagBasedIndicator.DEACTIVATE) {
    result.color = '#D02127';
    result.bgColor = '';
    return result;
  }
  if (value === tagBasedIndicator.SAVED) {
    result.color = '#F37B21';
    result.bgColor = '';
    return result;
  }
  if (value === tagBasedIndicator.PAUSED_SCHEDULED) {
    result.color = '#992D26';
    result.bgColor = colors.lightBrown;
    return result;
  }
  if (value === tagBasedIndicator.INACTIVE) {
    result.color = '#E63946';
    return result;
  }
  if (value.includes('Rejected')) {
    result.color = '#992D26';
  }
  return result;
};
