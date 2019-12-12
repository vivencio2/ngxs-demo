import { Component, OnInit, Output } from '@angular/core';
import { OfassetsService } from '../ofassets.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'read-assets',
  templateUrl: './read-assets.component.html',
  styleUrls: ['./read-assets.component.scss']
})
export class ReadAssetsComponent implements OnInit {
  current_asset_name: string;
  current_asset: any;
  @Output() selected_current_asset = new EventEmitter<any>();
  assets: any[];
  
  constructor(private assetService: OfassetsService) { }

  ngOnInit() {
    this.assetService.getAssets().subscribe(result => this.assets = result);
  }

  onSelection(event){
    this.current_asset_name = event.option.value.AssetName;
    
  }
  
  getAsset(event) {
    this.current_asset = event;
    this.selected_current_asset.emit(event);
  }
}
