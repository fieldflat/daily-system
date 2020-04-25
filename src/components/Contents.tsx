import React from 'react';
import { Grid } from 'semantic-ui-react';
import WriteDailyPart from './WriteDailyPart';
import ShowDaily from './ShowDaily';

const Contents = () => (
  <Grid>
    <WriteDailyPart />
    <ShowDaily />
  </Grid>
);

export default Contents;
