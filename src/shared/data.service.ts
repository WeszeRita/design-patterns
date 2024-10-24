import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private data = [1, 2, 3];

  getData(): number[] {
    return this.data;
  }

  setData(newData: number[]): void {
    this.data = newData;
  }
}
