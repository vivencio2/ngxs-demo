import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './assets/assets.component';
import { OfassetRoutesModule } from './ofassets.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { CreateAssetsComponent } from './create-assets/create-assets.component';
import { ReadAssetsComponent } from './read-assets/read-assets.component';
@NgModule({
  declarations: [AssetsComponent, CreateAssetsComponent, ReadAssetsComponent],
  imports: [
    CommonModule,
    OfassetRoutesModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class OfassetsModule { }
