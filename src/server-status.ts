import osUtil from 'os-utils';

export default class ServerStatus {
  constructor() {}

  getCpfUsage() {
    return new Promise((resolve) => {
      osUtil.cpuUsage((val) => {
        resolve(Math.round(val * 100));
      });
    });
  }
}
