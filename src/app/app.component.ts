import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemService } from './services/item.service';
import * as ItemActions from '../NgRx/actions/item.action';
import { Observable } from 'rxjs';
import { ItemState } from 'src/NgRx/states/item.state';
import { ItemModel } from 'src/models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private store: Store<{item: ItemState}>,
    private itemService: ItemService,
    ){}

  ngOnInit(){}

  
}
