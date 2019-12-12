import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class OfassetsService {

  constructor(private api: AngularFirestore) { }

  getAssets() {
    return this.api.collection('assets')
    .snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ AssetId: c.payload.doc.id, ...c.payload.doc.data() }))
      ));
  }

  getAsset(key) {
    return this.api.collection('assets').doc(key)
    .snapshotChanges();
  }

  updateAsset(key, value) {
    return this.api.collection('assets').doc(key).set({
      AssetName: value.assetName,
      AssetDesc: value.assetDesc,
      Location: value.assetLoc
    });
  }

  deleteAsset(key) {
    return this.api.collection('assets').doc(key).delete();
  }

  createAsset(value) {
    return this.api.collection('assets').add({
      AssetName: value.assetName,
      AssetDesc: value.assetDesc,
      Location: value.assetLoc
    });
  }
}
