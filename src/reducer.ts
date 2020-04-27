import { Reducer } from 'redux';

import { Daily } from './services/daily/model';
import {
  DailyAction,
  GetDailiesAction,
  REGISTER_DAILY_START,
  REGISTER_DAILY_SUCCEED,
  REGISTER_DAILY_FAIL,
  GET_DAILIES_START,
  GET_DAILIES_FAIL,
  GET_DAILIES_SUCCEED,
} from './actions/daily';

export interface DailyState {
  dailies: Daily[];
}

export const initialState: DailyState = { dailies: [] };

const counterReducer: Reducer<DailyState, DailyAction | GetDailiesAction> = (
  state: DailyState = initialState,
  action: DailyAction | GetDailiesAction,
): DailyState => {
  switch (action.type) {
    case REGISTER_DAILY_START:
      return {
        ...state,
        dailies: state.dailies,
      };
    case REGISTER_DAILY_SUCCEED:
      return {
        ...state,
        dailies: [action.payload.result, ...state.dailies],
      };
    case REGISTER_DAILY_FAIL:
      return {
        ...state,
      };
    case GET_DAILIES_START:
      return {
        ...state,
        dailies: state.dailies,
      };
    case GET_DAILIES_SUCCEED:
      return {
        ...state,
        dailies: [...state.dailies, ...action.payload.result],
      };
    case GET_DAILIES_FAIL:
      return {
        ...state,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const _: never = action;

      return state;
    }
  }
};

export default counterReducer;
