import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemModel } from 'src/models/item.model';
import { ItemState } from 'src/NgRx/states/item.state';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor( private httpClient: HttpClient) { }

  getAllItems(){
    return this.httpClient.get(`${environment.shopUrl}item/getAll`);
  }
}
