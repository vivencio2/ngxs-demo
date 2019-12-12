import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { OfassetsService } from '../ofassets.service';

@Component({
  selector: 'create-assets',
  templateUrl: './create-assets.component.html',
  styleUrls: ['./create-assets.component.scss']
})
export class CreateAssetsComponent implements OnInit {
  assetForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private assetService: OfassetsService) { }

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
      console.log(this.assetForm.value);
      this.assetService.createAsset(this.assetForm.value);
      this.setFormDefault();
    } else {
      console.log('Asset information required!');
    }
  }

  clearAsset() {
    this.setFormDefault();
  }
}
