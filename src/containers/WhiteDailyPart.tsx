import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';

import WriteDailyPart, { WriteDailyProps } from '../components/WriteDailyPart';
import { Daily } from '../services/daily/model';
import { DailyState } from '../reducer';
import { registerDaily } from '../actions/daily';

interface StateProps {
  dailies: Daily[];
}

interface DispatchProps {
  postDaily: (daily: Daily) => void;
}

type EnhancedMembersProps = WriteDailyProps &
  StateProps &
  DispatchProps &
  RouteComponentProps;

const mapStateToProps = (state: DailyState): StateProps => ({
  dailies: state.dailies,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      postDaily: (daily: Daily) => registerDaily.start(daily),
    },
    dispatch,
  );

const DailyContainer: FC<EnhancedMembersProps> = ({ dailies, postDaily }) => {
  const postDailyTmp = () => {
    const today = document.getElementById('today') as HTMLInputElement;
    const tomorrow = document.getElementById('tomorrow') as HTMLInputElement;
    const point = document.getElementById('point') as HTMLInputElement;
    const todayDate = new Date();
    const date =
      `${todayDate.getFullYear()}` +
      `${('0' + (todayDate.getMonth() + 1)).slice(-2)}` +
      `${todayDate.getDate()}`;
    const daily: Daily = {
      id: 3,
      date,
      today: today.value,
      tomorrow: tomorrow.value,
      point: point.value,
    };
    postDaily(daily);
  };

  return <WriteDailyPart postDailyTmp={postDailyTmp} />;
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DailyContainer),
);
