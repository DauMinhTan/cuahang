import {ChangeDetectorRef, Component, ElementRef, inject, Input, input, ViewChild} from '@angular/core';
import {item} from "../navbar/navbar.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
@Input() itemsInCart: item[]=[];
  @ViewChild('dialogCart', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);
  openDialog() {
    this.pay()
    Animation;
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();

  }
   total=0
  pay(){

    this.itemsInCart.forEach((item)=>{
      this.total += item.price*item.quality

    })
  }
}
