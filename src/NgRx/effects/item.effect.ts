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
            switchMap((action) => {
                return this.itemService.getAllItems();
            }),
            map((response) => {
                return ItemActions.getAllItemsSuccess({ item: <Array<ItemModel>>response })
            }),
            catchError((errors) => {
                return of(ItemActions.getAllItemsFailure({ error: errors.message}) );
            }),
        )
    );
}