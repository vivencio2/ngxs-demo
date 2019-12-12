import { Asset } from '../asset';

export class GetAssetsAction {
  public static readonly type = '[Asset] Get Assets';
  constructor() { }
}

export class AddAssetAction {
  public static readonly type = '[Asset] Add Asset';
  constructor(public payload: Asset) { }
}

export class UpdateAssetAction {
  public static readonly type = '[Asset] Update Asset';
  constructor(public payload: Asset) { }
}

export class DeleteAssetAction {
  public static readonly type = '[Asset] Delete Asset';
  constructor(public payload: Asset) {}
}

export class SelectAssetAction {
  public static readonly type = '[Asset] Select Asset';
  constructor(public payload: Asset) {}
}