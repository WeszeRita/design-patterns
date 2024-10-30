import { Component, inject, OnInit } from '@angular/core';
import { NON_SINGLETON_TOKEN_A } from '../../../shared/constants/injection-token';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
})
export class ComponentAComponent implements OnInit {
  private data: string;
  readonly dataService = inject(NON_SINGLETON_TOKEN_A);

  ngOnInit(): void {
    this.data = this.dataService.getData();
    console.log('Component A:', this.data);

    this.dataService.setData('Pluto');
    this.data = this.dataService.getData();
    console.log('Component A:', this.data);
  }
}
