import { State, Action, Selector, StateContext } from '@ngxs/store';
import { tap, map } from 'rxjs/operators';
import { GetAssetsAction, AddAssetAction, UpdateAssetAction, DeleteAssetAction } from './ofassets.actions';
import { Asset } from '../asset';
import { OfassetsService } from './ofassets.service';

export interface AssetListStateModel {
  items: Asset[];
}

@State<AssetListStateModel>({
  name: 'assets',
  defaults: {
    items: []
  }
})
export class AssetState {
  constructor(private assetService: OfassetsService) {}
  
  @Selector()
  static getStates(state: AssetListStateModel) {
    return state.items;
  }

  @Action(GetAssetsAction)
  fetchAssets({getState, setState}: StateContext<AssetListStateModel>) {
    return getState();
  }

  // @Action(GetAssetsAction)
  // fetchAssets({getState, setState}: StateContext<AssetListStateModel>) {
  //   return this.assetService.getAssets().pipe(map((result => {
  //     const state = getState();
  //     setState({
  //       ...state,
  //       items: result,
  //     });
  //   })));
  // }


  @Action(AddAssetAction)
  createAsset({getState, patchState}: StateContext<AssetListStateModel>, {payload}) {
    const state = getState();
    patchState({
      items: [...state.items, payload]
    })
  }

  @Action(UpdateAssetAction)
  updateAsset({getState, setState}: StateContext<AssetListStateModel>, {payload}) {
    //For Optimistic update/delete
    const previousState = getState();
    const state = getState();    
    const assets = state.items;
    const index = assets.findIndex(item=> item.AssetName === payload.AssetName);
    assets[index] = payload;
    setState({
        ...state,
        items: assets,
    })
    //if you have call to API just handle on error and setState with below
    // setState({
    //   ...state,
    //   items: previousState.items,
    // })
  }

  @Action(DeleteAssetAction)
  deleteAsset({getState, setState}: StateContext<AssetListStateModel>, {payload}) {
    const state = getState();
    const assets = state.items;
    const filtered = assets.filter(item=> item.AssetName !== payload.AssetName);
    console.log(filtered);
    setState({
      ...state,
      items: filtered,
  })
  }
}
