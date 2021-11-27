import { Component, OnInit } from '@angular/core';
import { IAboutItem } from '../../interfaces';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutItems: IAboutItem[] = [];

  constructor(private readonly dataStorageService: DataStoreService) { }

  ngOnInit(): void {
    this.aboutItems = this.dataStorageService.getAboutItems();
  }

}
