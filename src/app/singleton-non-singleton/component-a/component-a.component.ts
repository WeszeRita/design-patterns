import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/data.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
})
export class ComponentAComponent implements OnInit {
  private data: number[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getData();
    console.log('Component A:', this.data);
  }
}
