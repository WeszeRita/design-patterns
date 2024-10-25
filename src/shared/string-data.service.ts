import { Injectable } from '@angular/core';

@Injectable()
export class StringDataService {
  private data = 'Mercury';

  getData(): string {
    return this.data;
  }

  setData(data: string): void {
    this.data = data;
  }
}
