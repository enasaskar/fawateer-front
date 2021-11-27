import { Component, Input, OnInit } from '@angular/core';
import { IFeature } from 'src/app/sections/interfaces';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss']
})
export class FeatureItemComponent implements OnInit {
  @Input() item: IFeature = {} as any;

  constructor() { }

  ngOnInit(): void {
  }

}
