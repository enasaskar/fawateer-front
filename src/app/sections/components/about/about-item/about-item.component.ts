import { Component, Input, OnInit } from '@angular/core';
import { IAboutItem } from 'src/app/sections/interfaces';

@Component({
  selector: 'app-about-item',
  templateUrl: './about-item.component.html',
  styleUrls: ['./about-item.component.scss']
})
export class AboutItemComponent implements OnInit {
  @Input() item: IAboutItem = {} as any;

  constructor() { }

  ngOnInit(): void {
  }

}
