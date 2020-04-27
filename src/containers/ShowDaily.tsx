import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';

import ShowDaily, { ShowDailyProps } from '../components/ShowDaily';
import { Daily } from '../services/daily/model';
import { DailyState } from '../reducer';
import { registerDaily, getDailies } from '../actions/daily';

interface StateProps {
  dailies: Daily[];
}

interface DispatchProps {
  postDailyStart: (daily: Daily) => void;
  getDailiesStart: () => void;
}

type EnhancedMembersProps = ShowDailyProps &
  StateProps &
  DispatchProps &
  RouteComponentProps;

const mapStateToProps = (state: DailyState): StateProps => ({
  dailies: state.dailies,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      postDailyStart: (daily: Daily) => registerDaily.start(daily),
      getDailiesStart: () => getDailies.start(),
    },
    dispatch,
  );

const DailyContainer: FC<EnhancedMembersProps> = ({
  dailies,
  postDailyStart,
  getDailiesStart,
}) => {
  useEffect(() => {
    getDailiesStart();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <ShowDaily dailies={dailies} />;
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DailyContainer),
);
