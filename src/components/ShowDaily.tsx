import React, { FC } from 'react';
import { Grid, Card, Button, Header, Image, Modal } from 'semantic-ui-react';
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

const style = {
  marginBottom: "20px",
};

const ShowDaily: FC<ShowDailyProps> = ({ dailies = [] }) => (
  <Grid.Column width={6}>
    {dailies.map((daily: Daily) => (
      <Modal width={6} trigger={<Button style={style}>{`日付：${daily.date}`}</Button>}>
        <Modal.Header>{`日付：${daily.date}`}</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          />
          <Modal.Description>
            <h3>本日の振り返り</h3>
            <p>{`${daily.today}`}</p>
            <h3>明日の目標</h3>
            <p>{`${daily.tomorrow}`}</p>
            <h3>本日の点数(100点満点中)</h3>
            <p>{`${daily.point}`}点</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    ))}
  </Grid.Column>
);

export default ShowDaily;
