import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(firstname: string): void {
    console.log(`Hi, ${ firstname }!`);
  }
}
