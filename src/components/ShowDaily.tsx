import React, { FC } from 'react';
import { Grid, Card } from 'semantic-ui-react';
import { Daily } from '../services/daily/model';

export interface ShowDailyProps {
  dailies?: Daily[];
}

// const initialDailyProps: Daily[] = [
//   {
//     id: 1,
//     date: '20200426',
//     today: 'today',
//     tomorrow: 'tomorrow',
//     point: '80/100',
//   },
//   {
//     id: 2,
//     date: '20200426',
//     today: 'today',
//     tomorrow: 'tomorrow',
//     point: '85/100',
//   },
// ];

const ShowDaily: FC<ShowDailyProps> = ({ dailies = [] }) => (
  <Grid.Column width={6}>
    {dailies.map((daily: Daily) => (
      <Card
        key={`${daily.id}`}
        href="#"
        header={`日付: ${daily.date}`}
        description={`得点: ${daily.point}`}
      />
    ))}
  </Grid.Column>
);

export default ShowDaily;
