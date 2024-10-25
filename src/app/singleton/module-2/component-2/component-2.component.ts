import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/data.service';

@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
})
export class Component2Component implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('Component 2 before:', this.dataService.getData());
    this.dataService.setData([4, 5]);
    console.log('set [4, 5]');
    console.log('Component 2 after:', this.dataService.getData());
  }
}
