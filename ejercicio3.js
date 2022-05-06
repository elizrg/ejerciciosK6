import http from 'k6/http';
import { sleep, check } from 'k6';
import * as general_data from './datos.js';

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";


export const options = {
  stages: [
    { target: general_data.target_1, duration: general_data.duration_1},
    { target: general_data.target_2, duration: general_data.duration_2 },
    { target: general_data.target_3, duration: general_data.duration_3 },
  ],

  
};

export default function () {
 
    const res = http.get(general_data.url);

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === general_data.status_code,

  });
}

export function handleSummary(data) {
    return {
      "result3.html": htmlReport(data),
      stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
  }