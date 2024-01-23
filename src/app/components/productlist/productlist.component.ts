import {ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';
import {item} from "../navbar/navbar.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {update} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";

@Component({

  selector: 'app-productlist',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {

  @Input() items: item[] = []

  removeItems(i: number)
  {
    const index = this.items.findIndex(item => item.id === i)
    if (index != -1)
    {
      this.items.splice(index,1)
    }
  }
  @ViewChild('formup', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);
  openDialog(item: item) {
    selectedItem: item;
    this.formupdate.patchValue(item)
    Animation;
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }

  formupdate  = new FormGroup({
    stock: new  FormControl(0),

    id: new  FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new  FormControl(0),
    quality: new  FormControl(0),
    image: new  FormControl(''),
  });
  updateItem()
  {

    let newForm : item = {
      stock : this.formupdate.value.stock || 0,

      id : this.formupdate.value.id || 0,
      name : this.formupdate.value.name || '',
      description : this.formupdate.value.description || '',
      price : this.formupdate.value.price  || 0,
      image : this.formupdate.value.image || '',
      quality : this.formupdate.value.quality || 0,
    }
    const  index = this.items.findIndex((item)=> item.id === newForm.id);
    if (index != -1)
    {
      this.items[index] = newForm
    }
    this.closeDialog();

  }
  @Output() addToCartEvent=new EventEmitter<item>();
  addCart(item: item){
item.stock--;
this.addToCartEvent.emit(item)
  }
}
