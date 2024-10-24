import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/data.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
})
export class ComponentBComponent implements OnInit {
  private data: number[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getData();
    console.log('Component B:', this.data);
  }
}
