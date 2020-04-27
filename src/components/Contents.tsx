import React from 'react';
import { Grid } from 'semantic-ui-react';
// import WriteDailyPart from './WriteDailyPart';
import DailyContainer from '../containers/WhiteDailyPart';
import ShowDaily from '../containers/ShowDaily';

const Contents = () => (
  <Grid>
    <DailyContainer />
    <ShowDaily />
  </Grid>
);

export default Contents;
