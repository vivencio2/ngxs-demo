import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { OfassetsService } from '../ofassets.service';
import { Store, Select } from '@ngxs/store';
import { UpdateAssetAction, DeleteAssetAction } from '../ofassets.actions';
import { Asset } from 'src/app/asset';
import { AssetState } from '../ofassets.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'edit-assets',
  templateUrl: './edit-assets.component.html',
  styleUrls: ['./edit-assets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditAssetsComponent implements OnInit {

  @Input() asset: any;
  assetForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private assetService: OfassetsService, private store: Store) {
    this.setFormDefault();
   }

  ngOnInit() {    
    this.setFormValues(this.asset);  
  }

  ngOnChanges() {
    this.setFormValues(this.asset);  
  }

  setFormDefault() {
    this.assetForm = new FormGroup({
      assetName: new FormControl({value: '', disabled: true}),
      assetDesc: new FormControl(''),
      assetLoc: new FormControl('')
    });
    this.assetForm.updateValueAndValidity();       
  }

  setFormValues(asset) {
    if(asset !== undefined) {
      this.assetForm = this.formBuilder.group({
        assetName: [asset.AssetName],
        assetDesc: [asset.AssetDesc],
        assetLoc: [asset.Location]
      });    
      this.assetForm.updateValueAndValidity();
    }    
  }

  updateAsset() {    
    if(this.assetForm.valid && this.asset !== undefined) {      
      //this.assetService.updateAsset(this.asset.AssetId, this.assetForm.value);      
      const payload = new Asset(this.assetForm.value.assetName, this.assetForm.value.assetDesc, this.assetForm.value.assetLoc);
      this.store.dispatch(new UpdateAssetAction(payload));
    } else {
      console.log('Asset information required!');
    }
  }

  deleteAsset() {
    if(window.confirm('Are you sure you want to delete ' + this.asset.AssetName + ' ?')) {        
      //this.assetService.deleteAsset(this.asset.AssetId);
      const payload = new Asset(this.assetForm.value.assetName, this.assetForm.value.assetDesc, this.assetForm.value.assetLoc);
      this.store.dispatch(new DeleteAssetAction(payload));
      this.asset = undefined;
      this.setFormDefault();
    } else {
      console.log('Delete is cancelled!');
    }
  }
}
