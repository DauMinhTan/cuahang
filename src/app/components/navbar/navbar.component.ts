import {ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

export interface item{
  name: string;
  id: number;
  description: string;
  price: number;
  quality: number;
image: string;
stock: number;
}
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @ViewChild('appDialog', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);
  openDialog() {
    Animation;
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }
  @Output() newItemEvent = new EventEmitter<item>();

  nextId: number = 7;
   form  = new FormGroup({
      stock: new FormControl(0),
     id: new  FormControl(0),
     name: new FormControl(''),
    description: new FormControl(''),
    price: new  FormControl(0),
    quality: new  FormControl(0),
    image: new  FormControl(''),
  });

  submit(){
    let newForm : item = {

      id: this.nextId ++  ,
      stock: this.form.value.stock || 0,
      name : this.form.value.name || '',
      description : this.form.value.description || '',
      price : this.form.value.price  || 0,
      image : this.form.value.image || '',
      quality : this.form.value.quality || 0,
    }

    this.newItemEvent.emit(newForm);
    this.closeDialog();
  }
}
