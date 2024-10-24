import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private readonly data = [1, 2, 3, 4];

  getData(): number[] {
    return this.data;
  }
}
