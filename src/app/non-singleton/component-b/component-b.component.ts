import { Component, inject, OnInit } from '@angular/core';
import { NON_SINGLETON_TOKEN_B } from '../../../shared/constants/injection-token';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
})
export class ComponentBComponent implements OnInit {
  private data: string;
  readonly dataService = inject(NON_SINGLETON_TOKEN_B);

  ngOnInit(): void {
    this.data = this.dataService.getData();
    console.log('Component B:', this.data);

    this.dataService.setData('Mars');
    this.data = this.dataService.getData();
    console.log('Component B:', this.data);
  }
}
