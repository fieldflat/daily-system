import React, { FC } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';

export interface WriteDailyProps {
  postDailyTmp?: () => void;
}

const WriteDailyPart: FC<WriteDailyProps> = ({
  postDailyTmp = () => undefined,
}) => (
  <Grid.Column width={10}>
    <Form>
      <Form.Field>
        <Form.TextArea
          id="today"
          label="今日の振り返り"
          rows={20}
          placeholder="ここに本日の振り返りを記入してください．フォーマットは規定のものにしたがってください．そして毎日継続しまししょう．"
        />
      </Form.Field>

      <Form.Field>
        <Form.TextArea
          id="tomorrow"
          label="明日の目標"
          rows={10}
          placeholder="明日の目標を具体的に記述しましょう．"
        />
      </Form.Field>

      <Form.Field>
        <Form.Input
          fluid
          id="point"
          label="本日の点数(100点満点中)"
          placeholder="本日の点数(100点満点中)"
        />
      </Form.Field>

      <Button type="submit" onClick={postDailyTmp}>
        提出する
      </Button>
    </Form>
  </Grid.Column>
);

export default WriteDailyPart;
