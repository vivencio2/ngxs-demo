export class Asset {
    AssetId: string;
    AssetName: string;
    AssetDesc: string;
    Location: string; 

    constructor(name: string, desc: string, location: string) {
      this.AssetName = name,
      this.AssetDesc = desc;
      this.Location = location;
    }
  }