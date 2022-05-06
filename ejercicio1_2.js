import http from 'k6/http';
import { sleep, check } from 'k6';
import * as general_data from './datos.js';

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
  vus: general_data.vus,
  duration: general_data.duration,
};

export default function () {
  const res = http.get(general_data.url);

  sleep(general_data.sleep);

  const checkRes = check(res, {
    'status is 200' : (r) => r.status === general_data.status_code,
  });
}

//prueba con resultados en html
export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}
