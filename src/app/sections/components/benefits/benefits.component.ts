import { Component, OnInit } from '@angular/core';
import { IBenefit } from '../../interfaces';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  benefits: IBenefit[] = [];

  constructor(private readonly dataStorageService: DataStoreService) { }

  ngOnInit(): void {
    this.benefits = this.dataStorageService.getBenefits();
  }

}
