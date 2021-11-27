import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IFeature } from '../../interfaces';
import { DataStoreService } from '../../services/data-store.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  isXSmall: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall)
    .pipe(
      map(result => result.matches)
    );

  features: IFeature[] = [];

  constructor(private readonly dataStorageService: DataStoreService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.features = this.dataStorageService.getFeatures();
  }

}
