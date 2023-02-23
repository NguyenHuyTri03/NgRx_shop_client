import { createAction, props } from "@ngrx/store";
import { ItemModel } from "src/models/item.model";

export const getAllItems = createAction(
    '[Item] Get All Items',
);

export const getAllItemsSuccess = createAction(
    '[Item] Get All Items Success',
    props<{ item: ItemModel[]}>()
);

export const getAllItemsFailure = createAction(
    '[Item] Get All Items Failure',
    props<{ error: string }>()
);