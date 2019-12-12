import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AssetsComponent } from './overview-assets/assets.component';

const OfassetRoutes: Routes = [
    {
        path: '',
        component: AssetsComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(OfassetRoutes)],
    exports: [RouterModule]
  })

export class OfassetRoutesModule {}