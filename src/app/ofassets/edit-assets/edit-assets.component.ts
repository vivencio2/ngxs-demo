import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { OfassetsService } from '../ofassets.service';

@Component({
  selector: 'edit-assets',
  templateUrl: './edit-assets.component.html',
  styleUrls: ['./edit-assets.component.scss']
})
export class EditAssetsComponent implements OnInit {

  @Input() asset: any;
  assetForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private assetService: OfassetsService) {
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
      assetName: new FormControl(''),
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
      this.assetService.updateAsset(this.asset.AssetId, this.assetForm.value);
    } else {
      console.log('Asset information required!');
    }
  }

  deleteAsset() {
    if(this.asset.AssetId !== undefined) {
      if(window.confirm('Are you sure you want to delete ' + this.asset.AssetName + ' ?')) {        
        this.assetService.deleteAsset(this.asset.AssetId);
        this.asset = undefined;
        this.setFormDefault();
      } else {
        console.log('Delete is cancelled!');
      }
      
    }
  }
}
