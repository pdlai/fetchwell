import { combineReducers } from 'redux';

import modal from './modal_reducer';
import filtersReducer from './filters_reducer';

export default combineReducers({
  modal,
  filters: filtersReducer
});
