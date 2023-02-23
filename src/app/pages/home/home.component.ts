import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { ItemState } from 'src/NgRx/states/item.state';
import * as ItemActions from '../../../NgRx/actions/item.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  items$: Observable<ItemState>;

  idValue: string = '';
  nameValue: string = '';
  desValue: string = '';

  constructor(
    private store: Store<{item: ItemState}>,
    private itemService: ItemService,
    ){
      this.items$ = this.store.select('item');
    }

  ngOnInit(){
    this.getItems();
  }

  getItems(){
    this.store.dispatch(ItemActions.getAllItems());
    this.items$.subscribe();
  }

  delItem(){

  }

  addItem(){
    if(this.idValue != '' && this.nameValue != '' && this.desValue != ''){
      console.log("add");
    }else{

    }
    
  }

  updateItem(){
  }

  valueEnter(){
    console.log(this.idValue);
  }
}
