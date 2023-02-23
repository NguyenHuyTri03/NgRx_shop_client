import { createAction, props } from "@ngrx/store";
import { ItemModel } from "src/models/item.model";
import { ItemState } from "../states/item.state";

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

export const addItem = createAction(
    '[Item] Add new item',
    props<{ item: ItemModel}>,
)

export const addItemSuccess = createAction(
    '[Item] Add new item success',
)

export const addItemFailure = createAction(
    '[Item] Add new item success',
    props<{ error: string}>
)

export const deleteItem = createAction(
    '[Item] Delete new item',
    props<{ id: string}>
)

export const deleteItemSuccess = createAction(
    '[Item] Add new item success',
)

export const deleteFailure = createAction(
    '[Item] Add new item success',
    props<{ error: string}>
)

export const updateItem = createAction(
    '[Item] Update item',
    props<{ item: ItemModel}>
)

export const updateItemSuccess = createAction(
    '[Item] Add new item success',
)

export const updateItemFailure = createAction(
    '[Item] Add new item success',
    props<{ error: string}>
)