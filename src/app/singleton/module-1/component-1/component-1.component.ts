import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/data.service';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
})
export class Component1Component implements OnInit {
  private data: number[];

  constructor(readonly dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.getData();
    console.log('Component 1:', this.data);
  }
}
