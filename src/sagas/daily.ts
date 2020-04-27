import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

// import * as Action from '../actions/daily';
import {
  registerDaily,
  getDailies,
  REGISTER_DAILY_START,
  GET_DAILIES_START,
} from '../actions/daily';
import { postDailyFactory, getDailiesFactory } from '../services/daily/api';

function* runPostDaily(action: ReturnType<typeof registerDaily.start>) {
  const daily = action.payload;
  try {
    const api = postDailyFactory();
    const resultDaily = yield call(api, daily);

    yield put(registerDaily.succeed(daily, resultDaily));
  } catch (error) {
    yield put(registerDaily.fail(daily, error));
  }
}

function* runGetDailies(action: ReturnType<typeof getDailies.start>) {
  try {
    const api = getDailiesFactory();
    const resultDailies = yield call(api);

    yield put(getDailies.succeed(resultDailies));
  } catch (error) {
    yield put(getDailies.fail(error));
  }
}

// take … 特定のActionを待ち受ける．
// takeEvery … 渡されたActionの数だけ律儀にタスクを実行する
// takeLatest … 最新のものだけを実行する
export function* watchPostDaily() {
  yield takeLatest(REGISTER_DAILY_START, runPostDaily);
}

export function* watchGetDailies() {
  yield takeLatest(GET_DAILIES_START, runGetDailies);
}

// これをSagaミドルウェアに渡すとアプリ起動時に同時に起動されて，ここでforkされた分だけ別のタスクも立ち上がってスタンバイする．
// ここで起動されるのは watchGetMembers 一つだけ．これを監視し続ける．
export default function* rootSaga() {
  yield all([fork(watchPostDaily), fork(watchGetDailies)]);
}
