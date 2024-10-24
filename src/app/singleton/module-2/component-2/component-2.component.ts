import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/data.service';

@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
})
export class Component2Component implements OnInit {
  private data: number[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.getData();
    console.log('Component 2:', this.data);

    this.dataService.setData([4, 5]);
    this.data = this.dataService.getData();
    console.log('New data:', this.data);
  }
}
