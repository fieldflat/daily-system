import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Redirect, Route, Switch } from 'react-router';
import DailyContainer from '../containers/WhiteDailyPart';
import ShowDaily from '../containers/ShowDaily';
import DetailDailyContainer from './DetailDaily';

const Contents = () => (
  <Grid>
    <Switch>
      <Route path="/daily/:date" component={DetailDailyContainer} />
      <Route path="/" component={DailyContainer} />
      <Redirect to="/" />;
    </Switch>
    <ShowDaily />
  </Grid>
);

export default Contents;
