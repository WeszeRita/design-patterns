import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BaseClassComponent } from './dependency-injection/with-inheritance/base-class/base-class.component';
import { MyClassComponent } from './dependency-injection/with-inheritance/my-class/my-class.component';
import { BaseClassForInjectorComponent } from './dependency-injection/using-injector/base-class-for-injector/base-class-for-injector.component';
import { MyClassForInjectorComponent } from './dependency-injection/using-injector/my-class-for-injector/my-class-for-injector.component';
import { MyClassForInjectMethodComponent } from './dependency-injection/using-inject-method/my-class-for-inject-method/my-class-for-inject-method.component';
import { BaseClassForInjectMethodComponent } from './dependency-injection/using-inject-method/base-class-for-inject-method/base-class-for-inject-method.component';
import { LoggerService } from '../shared/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    BaseClassComponent,
    MyClassComponent,
    BaseClassForInjectorComponent,
    MyClassForInjectorComponent,
    MyClassForInjectMethodComponent,
    BaseClassForInjectMethodComponent,
  ],
  imports: [BrowserModule],
  providers: [
    { provide: 'loggerServiceForInjectMethod', useClass: LoggerService },
    { provide: 'loggerServiceConfig', useValue: 'Eric'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
