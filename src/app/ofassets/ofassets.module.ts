import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './overview-assets/assets.component';
import { OfassetRoutesModule } from './ofassets.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { CreateAssetsComponent } from './create-assets/create-assets.component';
import { ReadAssetsComponent } from './read-assets/read-assets.component';
import { EditAssetsComponent } from './edit-assets/edit-assets.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgxsModule} from '@ngxs/store'
import { AssetState } from './ofassets.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
@NgModule({
  declarations: [AssetsComponent, CreateAssetsComponent, ReadAssetsComponent, EditAssetsComponent],
  imports: [
    CommonModule,
    OfassetRoutesModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    NgxsModule.forFeature([AssetState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),   
    NgxsLoggerPluginModule.forRoot() 
  ]
})
export class OfassetsModule { }
