import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { todoItemModel } from '../models/todo-item.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  //@ts-ignore
  @Input() item: todoItemModel = new todoItemModel('','','', false);
  @Output() formSubmit: EventEmitter<todoItemModel> = new EventEmitter<todoItemModel>();
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    console.log(form.value)
    form.reset();
  }

}
