import * as echarts from 'echarts';

import Handler from './MainHandler';

class ChartHandler {
  handler?: Handler;
  instance?: echarts.ECharts;

  constructor(handler: Handler) {
    this.handler = handler;
  }
}

export default ChartHandler;
