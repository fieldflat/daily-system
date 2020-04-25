import React from 'react';
import { Grid, Card } from 'semantic-ui-react';

const ShowDaily = () => (
  <Grid.Column width={6}>
    <Card href="#" header="4/25 (土)" description="80/100点" />
    <Card href="#" header="4/24 (金)" description="90/100点" />
    <Card href="#" header="4/23 (木)" description="70/100点" />
  </Grid.Column>
);

export default ShowDaily;
