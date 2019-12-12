import { Component, OnInit, Output } from '@angular/core';
import { OfassetsService } from '../ofassets.service';
import { EventEmitter } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AssetState } from '../ofassets.state';
import { Asset } from 'src/app/asset';
import { Observable } from 'rxjs';
import { GetAssetsAction, SelectAssetAction } from '../ofassets.actions';

@Component({
  selector: 'read-assets',
  templateUrl: './read-assets.component.html',
  styleUrls: ['./read-assets.component.scss']
})
export class ReadAssetsComponent implements OnInit {
  current_asset_name: string;
  current_asset: any;
  // @Output() selected_current_asset = new EventEmitter<any>();
  @Select(AssetState.getStates) assets$: Observable<Asset[]>;
  @Select(AssetState.getCurrentItem) current_asset$: Observable<Asset>;
  constructor(private store: Store) { }

  ngOnInit() {
    //this.assetService.getAssets().subscribe(result => this.assets = result);
    this.store.dispatch(new GetAssetsAction());
  }

  onSelection(event){
    this.current_asset_name = event.option.value.AssetName;
  }
  
  getAsset(event) {
    this.store.dispatch(new SelectAssetAction(event));
    // this.current_asset = event;
    // this.selected_current_asset.emit(event);
  }
}
