import {ChangeDetectorRef, Component, ElementRef, inject, Input, ViewChild} from '@angular/core';
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
    this.items[i].name = 'done'
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

    id: new  FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new  FormControl(0),
    quality: new  FormControl(0),
    image: new  FormControl(''),
  });
  updateItem(i:number)
  {

    let newForm : item = {
      id : this.formupdate.value.id || 0,
      name : this.formupdate.value.name || '',
      description : this.formupdate.value.description || '',
      price : this.formupdate.value.price  || 0,
      image : this.formupdate.value.image || '',
      quality : this.formupdate.value.quality || 0,
    }
    this.items[i]= newForm
  }
}
