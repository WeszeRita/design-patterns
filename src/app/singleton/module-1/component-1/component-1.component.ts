import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/data.service';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
})
export class Component1Component implements OnInit {
  private data: number[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.getData();
    console.log('Component 1:', this.data);

    setTimeout(() => this.data = this.dataService.getData(), 100);
    setTimeout(() => console.log('To prove, that the service is singleton', this.data), 200);
  }
}
