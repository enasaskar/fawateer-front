import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { FeaturesComponent } from './components/features/features.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AboutItemComponent } from './components/about/about-item/about-item.component';
import { FeatureItemComponent } from './components/features/feature-item/feature-item.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    BenefitsComponent,
    FeaturesComponent,
    ContactUsComponent,
    AboutItemComponent,
    FeatureItemComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    BenefitsComponent,
    FeaturesComponent,
    ContactUsComponent
  ]
})
export class SectionsModule { }
