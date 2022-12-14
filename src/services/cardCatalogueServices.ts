import { secureApi } from './xhr';
import { url } from '../utils/constants/url';

// get Card list
export const getCardList = (payload: any) =>
  secureApi.post(url.baseUrl + url.cardService + 'cardList', payload);

// Get card filter dropdown options
export const getCardDropdownData = (payload: any) =>
  secureApi.post(url.baseUrl + url.cardService + 'cardDropdownList', payload);
