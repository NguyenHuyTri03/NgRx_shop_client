import { createReducer, INITIAL_STATE, on } from "@ngrx/store";
import { ItemState } from "../states/item.state";
import * as ItemActions from '../actions/item.action';
import { ItemModel } from "src/models/item.model";

const initialState: ItemState = {
    item: [],
    isSuccess: true,
    loading: false,
    error: '',
}

export const ItemReducer = createReducer(
    initialState,
    on(ItemActions.getAllItems, (state) => ({...state, loading: true})),
    on(ItemActions.getAllItemsSuccess, (state, action) => ({
        ...state,
        item: action.item,
        isSuccess: true,
        loading: false,
    })),
    on(ItemActions.getAllItemsFailure, (state, action) => ({
        ...state,
        item: [],
        loading: false,
        error: action.error,
    }))
);