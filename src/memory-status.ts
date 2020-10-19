import os from 'os';

interface IMemoryStatus {
  total: string;
  free: string;
  usage: string;
}

export default class MemoryStatus {
  private totalMemoryTreated: string;
  private freeMemory: string;

  constructor() {
    this.totalMemoryTreated = this.formatMemoryInMBOrGB(os.totalmem());
    this.freeMemory = this.formatMemoryInMBOrGB(os.freemem());
  }

  formatMemoryInMBOrGB(byteLen: number): string {
    let mem = byteLen / 1024 / 1024;
    if (mem >= 1000) {
      const memoryInGB = (mem / 1024).toFixed(2);
      return `${memoryInGB}GB`;
    }
    const memoryInMB = mem.toFixed(2);
    return `${memoryInMB}MB`;
  }

  getMemoryTotalAndFree(): IMemoryStatus {
    return {
      total: this.totalMemoryTreated,
      free: this.freeMemory,
      usage: this.formatUsageMemory(),
    };
  }

  formatUsageMemory() {
    return `${Math.round(
      ((os.totalmem() - os.freemem()) / os.totalmem()) * 100
    )}%`;
  }
}
