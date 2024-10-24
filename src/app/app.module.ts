import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BaseClassComponent } from './dependency-injection/with-inheritance/base-class/base-class.component';
import { MyClassComponent } from './dependency-injection/with-inheritance/my-class/my-class.component';
import { BaseClassForInjectorComponent } from './dependency-injection/using-injector/base-class-for-injector/base-class-for-injector.component';
import { MyClassForInjectorComponent } from './dependency-injection/using-injector/my-class-for-injector/my-class-for-injector.component';
import { MyClassForInjectMethodComponent } from './dependency-injection/using-inject-method/my-class-for-inject-method/my-class-for-inject-method.component';
import { BaseClassForInjectMethodComponent } from './dependency-injection/using-inject-method/base-class-for-inject-method/base-class-for-inject-method.component';
import { LoggerService } from '../shared/logger.service';
import { ComponentAComponent } from './singleton-non-singleton/component-a/component-a.component';
import { ComponentBComponent } from './singleton-non-singleton/component-b/component-b.component';
import { DataService } from '../shared/data.service';

export const LOGGER_TOKEN = new InjectionToken<LoggerService>('LoggerService');
export const LOGGER_CONFIG_TOKEN = new InjectionToken<string>('loggerServiceConfig');

@NgModule({
  declarations: [
    AppComponent,
    BaseClassComponent,
    MyClassComponent,
    BaseClassForInjectorComponent,
    MyClassForInjectorComponent,
    MyClassForInjectMethodComponent,
    BaseClassForInjectMethodComponent,
    ComponentAComponent,
    ComponentBComponent,
  ],
  imports: [BrowserModule],
  providers: [
    DataService,
    { provide: LOGGER_TOKEN, useClass: LoggerService },
    { provide: LOGGER_CONFIG_TOKEN, useValue: 'Eric'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
