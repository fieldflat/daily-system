import axios from 'axios';

import { Daily } from './model';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: 'http://localhost:8080',
  timeout: 7000,
};

// クロージャーの利用
// 実際の使い方：const getMembers = getMembersFactory({timeout: 3000});
//              try {
//                const users = await getMembers(‘facebook’);
//              } catch(err) {
//                console.log(err);
//              }

export const postDailyFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };
  const instance = axios.create(config);

  const postDaily = async (daily: Daily) => {
    const params = new URLSearchParams();
    params.append('id', `${daily.id}`);
    params.append('date', daily.date);
    params.append('today', daily.today);
    params.append('tomorrow', daily.tomorrow);
    params.append('point', daily.point);
    const response = await instance.post(`/daily/create`, params);

    if (response.status !== 200) {
      throw new Error('Server Error');
    }
    const responseDaily: Daily = {
      id: response.data.daily.ID,
      date: response.data.daily.date,
      today: response.data.daily.today,
      tomorrow: response.data.daily.tomorrow,
      point: response.data.daily.point,
    };

    return responseDaily;
  };

  return postDaily;
};

export const getDailiesFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };
  const instance = axios.create(config);
  const dailies: Daily[] = [];

  const getDailies = async () => {
    const response = await instance.get(`/dailies`);

    if (response.status !== 200) {
      throw new Error('Server Error');
    }
    // console.log(response.data.dailies);
    for (let i = 0; i < response.data.dailies.length; i += 1) {
      const d: Daily = {
        id: response.data.dailies[i].ID,
        date: response.data.dailies[i].date,
        today: response.data.dailies[i].today,
        tomorrow: response.data.dailies[i].tomorrow,
        point: response.data.dailies[i].point,
      };
      dailies.push(d);
    }

    // return JSON.stringify(response.data.dailies);
    return dailies;
  };

  return getDailies;
};
