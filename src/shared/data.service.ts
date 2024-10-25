import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private data: number[];

  getData(): number[] {
    return this.data;
  }

  setData(newData: number[]): void {
    this.data = newData;
  }
}
