import { AxiosError } from 'axios';
import { Daily } from '../services/daily/model';

export const REGISTER_DAILY_START = 'DAILY/REGISTER_DAILY_START';
export const REGISTER_DAILY_SUCCEED = 'DAILY/REGISTER_DAILY_SUCCEED';
export const REGISTER_DAILY_FAIL = 'DAILY/REGISTER_DAILY_FAIL';

export const GET_DAILIES_START = 'DAILY/GET_DAILIES_START';
export const GET_DAILIES_SUCCEED = 'DAILY/GET_DAILIES_SUCCEED';
export const GET_DAILIES_FAIL = 'DAILY/GET_DAILIES_FAIL';

export const registerDaily = {
  start: (params: Daily) => ({
    type: REGISTER_DAILY_START as typeof REGISTER_DAILY_START,
    payload: params,
  }),

  succeed: (params: Daily, result: Daily) => ({
    type: REGISTER_DAILY_SUCCEED as typeof REGISTER_DAILY_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: Daily, error: AxiosError) => ({
    type: REGISTER_DAILY_FAIL as typeof REGISTER_DAILY_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export const getDailies = {
  start: () => ({
    type: GET_DAILIES_START as typeof GET_DAILIES_START,
  }),

  succeed: (result: Daily[]) => ({
    type: GET_DAILIES_SUCCEED as typeof GET_DAILIES_SUCCEED,
    payload: { result },
  }),

  fail: (error: AxiosError) => ({
    type: GET_DAILIES_FAIL as typeof GET_DAILIES_FAIL,
    payload: { error },
  }),
};

export type DailyAction =
  | ReturnType<typeof registerDaily.start>
  | ReturnType<typeof registerDaily.succeed>
  | ReturnType<typeof registerDaily.fail>;

export type GetDailiesAction =
  | ReturnType<typeof getDailies.start>
  | ReturnType<typeof getDailies.succeed>
  | ReturnType<typeof getDailies.fail>;
