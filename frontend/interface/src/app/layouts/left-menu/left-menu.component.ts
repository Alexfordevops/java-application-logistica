import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-left-menu',
  imports: [
    CommonModule
  ],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss'
})
export class LeftMenuComponent {

  @Output() statusChange = new EventEmitter<boolean>();
  createForm: boolean = false;

  createFormShow(){
    this.createForm = true;
    this.statusChange.emit(this.createForm);
  }
}
