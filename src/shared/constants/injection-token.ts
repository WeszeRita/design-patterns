import { InjectionToken } from '@angular/core';
import { StringDataService } from '../string-data.service';

export const NON_SINGLETON_TOKEN_A = new InjectionToken<StringDataService>('StringDataServiceA');
export const NON_SINGLETON_TOKEN_B = new InjectionToken<StringDataService>('StringDataServiceB');
