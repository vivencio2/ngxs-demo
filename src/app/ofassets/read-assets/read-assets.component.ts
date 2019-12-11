import { Component, OnInit } from '@angular/core';
import { OfassetsService } from '../ofassets.service';

@Component({
  selector: 'read-assets',
  templateUrl: './read-assets.component.html',
  styleUrls: ['./read-assets.component.scss']
})
export class ReadAssetsComponent implements OnInit {
  assets: string[] = ['WTG1', 'WTG2', 'WTG3', 'WTG4', 'WTG5'];
  current_asset: string;
  assets1: Array<any>;
  
  constructor(private assetService: OfassetsService) { }

  ngOnInit() {
    this.assetService.getAssets().subscribe(result => this.assets1 = result);
  }

  onSelection(e, v){
    this.current_asset = e.option.value;
  }
  
  getAsset(event) {
    console.log(event.target.parentNode.innerText);
  }
}
