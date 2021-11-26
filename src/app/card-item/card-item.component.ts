import { Component, OnInit, Input } from '@angular/core';
import { todoItemModel } from '../models/todo-item.model';


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  //@ts-ignore
  @Input() item: todoItemModel;
  constructor() { }

  ngOnInit(): void {
  }

}
