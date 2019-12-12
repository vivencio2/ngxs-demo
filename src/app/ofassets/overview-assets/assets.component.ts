import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Asset } from 'src/app/asset';
import { AssetState } from '../ofassets.state';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {  
  @Select(AssetState.getCurrentItem) current_asset$: Observable<Asset>;
  constructor() { }

  ngOnInit() {    
  }
}
