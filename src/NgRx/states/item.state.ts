import { ItemModel } from "src/models/item.model";

export interface ItemState{
    item: ItemModel[];
    isSuccess: boolean;
    loading: boolean;
    error: string;
}