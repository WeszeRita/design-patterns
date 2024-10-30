import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/data.service';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
})
export class Component1Component implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('Component 1 before:', this.dataService.getData());
    this.dataService.setData([1, 2]);
    console.log('set [1, 2]');
    console.log('Component 1 after:', this.dataService.getData());
  }
}
