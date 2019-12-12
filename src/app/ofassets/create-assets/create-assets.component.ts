import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { OfassetsService } from '../ofassets.service';
import { Store } from '@ngxs/store';
import { AddAssetAction } from '../ofassets.actions';
import { Asset } from 'src/app/asset';

@Component({
  selector: 'create-assets',
  templateUrl: './create-assets.component.html',
  styleUrls: ['./create-assets.component.scss']
})
export class CreateAssetsComponent implements OnInit {
  assetForm: FormGroup;
  constructor(private assetService: OfassetsService, private store: Store) { }

  ngOnInit() {
    this.setFormDefault();
  }

  setFormDefault() {
    this.assetForm = new FormGroup({
      assetName: new FormControl('', Validators.required),
      assetDesc: new FormControl('', Validators.required),
      assetLoc: new FormControl('', Validators.required)
    });
    this.assetForm.updateValueAndValidity();
  }

  createAsset() {    
    if(this.assetForm.valid) {
      //this.assetService.createAsset(this.assetForm.value);
      const payload = new Asset(this.assetForm.value.assetName, this.assetForm.value.assetDesc, this.assetForm.value.assetLoc);
      this.store.dispatch(new AddAssetAction(payload));
      this.setFormDefault();
    } else {
      console.log('Asset information required!');
    }
  }

  clearAsset() {
    this.setFormDefault();
  }
}
