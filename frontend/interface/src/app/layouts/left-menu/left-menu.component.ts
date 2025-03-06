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

  @Output() statusChangeUpdate = new EventEmitter<boolean>();
  updateForm: boolean = false;

  @Output() statusChangeDelete = new EventEmitter<boolean>();
  deleteForm: boolean = false;

  //Torna a variável true e envia para o home-page-component para o formulário de criação
  createFormShow(){
    this.createForm = !this.createForm;
    this.statusChange.emit(this.createForm);
  }
  //Torna a variável true e envia para o home-page-component para o formulário de atualização
  updateFormShow(){
    this.updateForm = !this.updateForm;
    this.statusChangeUpdate.emit(this.updateForm);
  }
  deleteFormShow(){
    this.deleteForm = !this.deleteForm;
    this.statusChangeDelete.emit(this.deleteForm);
  }

}
