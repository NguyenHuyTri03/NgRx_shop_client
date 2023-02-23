import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ItemService } from "src/app/services/item.service";
import { ItemModel } from "src/models/item.model";
import * as ItemActions from "../actions/item.action";

@Injectable()
export class ItemEffects {
  constructor( private action$: Actions, private itemService: ItemService) {}

    getAllItems$ = createEffect(
        () => this.action$.pipe(
            ofType(ItemActions.getAllItems),
            switchMap(() => {
                return this.itemService.getAllItems();
            }),
            map((data) => {
                // console.log(data);
                return ItemActions.getAllItemsSuccess({ item: <Array<ItemModel>>data})
            }),
            catchError( (error) => {
                return of(ItemActions.getAllItemsFailure( {error: error.message} ));
            })
        )
    );
}
