import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent, item} from "./components/navbar/navbar.component";
import {ProductlistComponent} from "./components/productlist/productlist.component";
import {CartComponent} from "./components/cart/cart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductlistComponent, CartComponent],
  // templateUrl: './app.component.html',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopbanhang';

  itemlist : item[]= [
    {
      stock: 23,
      name: "xe đạp",
      description: "bền, nhẹ và tốt",
      id: 1,
      quality: 0,
      price: 975,
      image: "data:image/jpeg;base64,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TRdcuJRqb+G7KMyNby4rfXTXjJPe/cKli2NamwpVzxa10f8AOBztpmGvC97TPMbuDtBDbuFqD7yOpHyYq30gXDa/adh0Uigj1HJzAmyoNb665jqOAEy/a21q2Lrd5VJd2NlUDQXOiqo8+XEydwXZ5j6rWNFaQ+9UdQPkmZj8ppO6O4VHBkVHPe1xwciyp1yLrY/iOvHheB87Pd1P4Sl3lUf4ioBm55F4hL9eBbzAGtrm4REBERAREQEREBMV7U9jGliTWUeCsM9+WYaONPZv1HpNqkRvRsRcXh3otYN8SMfsuOB9OR8iYHnZKjKVZSVZSGUjiGBuCPMEXnoDdLb9PFYYVx8ei1V4sH6ehvdR0ImCY3CPSdqbqVZCVYEcCP8Avj0sZ3t29v1MFWFWnqDo6E+F16HoRc2bkT0JED0IyHKb/E5CnyHQHyXMfM36zndwoJ5Dp9APPlIfd/b9HGKKlF75V8SHR1Y8Qy+2hGhubGSjeJrcl1Pr9ke3H+mB1nTw1CeOQ3/MQSw+WQegE7NHQuvQlh6Nr/qzfKcVX/LqHqH+gyj6KJy1NHU/euh9fiX5WYfqgUan2epVrM+Kdi98+VHORyQVZ2LC4dyMxC2AzWF7XkntnGUMDRBp0kFdzlpoNGLqLMzMde7UC7MdMoA5ifNs750KRY0iKtRO8psgOQIyOFJdm+BAVbXnyBuJk+2tsPiXdi2ZntnqWsCBwRF+zTFh+JiLnkAHQxlTvKjMXL+Jmao2hd2Pie3IE6AclAmt9l27/cUDiHFnrAZR91Bqv9R8XoFlN3E3Y/i6gZ1/w1M+O/2245B15Fug056bWBAREQEREBERAREQEREBERAREQEREBERAREQKZv7uYMWvfUbDEKtrcFqAcATyYagHzseRGK1aDI7I6lWU5WVhZgfQz07IDeXdPD40fzFKuBZaiaOOgPJh5H6QMAw9d6bh6TsjrwZGKsPcctOHAy7bK7UMVTULWRKtvtFcrn1KkL72nJtDsuxSX7p0qjlrkf5Np9ZB1Nycev/AJZ/axHzBMG1nqdqpKFBh0FwV+NmOo6ZQL/qkNtTf7FVwVzELe+VB3Y8rtdnPsyyPTcnHnhhn97D95L7P7N8a9s+SkOed7t/SmYH0JHPyuFVquX+NgFvfIui35k9T+I3Msm6W6FTGsGINPDDi/Nx91L8b/f4DzOkvewuzfDUSHrE4hx98Wpg/k5/qJl2AtoOEDr4HCJSRadNAiILKo4Af8+d52IiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIH//2Q==",
    },
    {
      stock: 12,
      name: "vợt cầu lông",
      description: "nhỏ nhẹ và chắc",
      id: 2,
      quality: 0,
      price: 999,
      image:"data:image/jpeg;base64,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",
    },
    {
      stock: 765,
      name: "màn hình ",
      description: " HD-1980, rõ nét",
      id: 3,
      quality: 0,
      price: 5000,
      image:"data:image/jpeg;base64,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8DpMbFY9CALBtbgdvPXSRW3SWuQR4fQ/7fuy3/j9WwHhtBuv4M/lOS6XllfGG+67EjrtFlDhQALGyjj6OM1GO28hVM9JXFjox0F7X0t2DunILtl3ZEfEBUzAFrL1FJALWUXNhrbjaZr0aLuyfHUZFAKsFU3vlv8ApW4tpe/U3aiaYzKXt7KcuHuvT7a+Tpm2mGRVFPKoUAamwUDQActTMatjctyAL3ueOlh2dg7pp2qUkQhdoLcA5VNM6sAdLncDYC+7rCaVtpsb3qDXf4n9Jonq4S1pm2XiUa09nTrtd+rcqwFrDMT4u4AW7JexfSdyWLJoVVT42oW9r3E49cbY3Di/nWVNtInfUHesqrqZp77keUnRN0zc3NtGte+tx289wmbT6U5st1U2At6BOHNRL3zLfziXBigP0171hdRPuiGo13O/r9MmcCwYACxDGUnpLUytYHKRY8rcvXOE+Ofvr3rKjtE2y5xbldfVJLqMaWtMkqS3o6qp0gcDMb6ixGuu7f8AdHcJgYrpIxHjN1R1d9hoRpy0JHpnPNiFOpcd4lDuh3sPvCdXVQl2RFKfL8nR4vpRVq0XpszFSjLqSdMpEnTA+Tp/UX2RPmhqqBWAZdx4jlPpjBeTp/UX2RMuW1T2jtVsyIiJUREREAREQBKco5CVRAKco5CMo5CVRAKco5CMo5CVRAKco5CMo5CVRAKco5CMo5CVRAKco5CRl8MYH+j/AP2/+Uk+RJ8O1YouCYfrVh6qf9IBtvgfANDE/wC8PYWSHlHISM/gNqlsNiWP0j/5pJOgFOUchGUchKogFOUchGUchKogFOUchGUchKogFOUchGUchKogFOUchKoiAIiIAiIgCIiAIiIAiIgCIkcbQ+FSijvTSiXyuyBi6qrZWK3GhNjaASPEi4fCViX8lgCeVmqVPZpiB0t2w/iYEKP3qFYHvd1HqgEoxIwGL6QVN1JU9FBfadjH+EbefxsSifxovsUzAJPkS/DvRDJggWC9erqb8k00mYehO1H8ptBh9WpWb1DLPP8Axa761caXb96mz28xapAPfgMphcJiAGDf6jeL28nT5yTpFj/BVVXyOPamb36qOl/SlUQvQjatPye0S3LNUrD1HNAJTiRX/hXSGn4uJRx9ZG9umP5zxsf0ip76C1O21Bh3JUUwCVYkUHpltqn5XAZh+5Qr+sq7CP8AyliU8rs8qOJLVKfqel+cAleJHWxPhToV61Og1FkNRlTNnR1BYhVvuNiSBu4yRYAiIgCIiAIiIAiIgCIiAIiIAiIgCWUoKpuFUHsAEvRAEREAREQBERAEREAREQBERALLUFJuVUnmQL98vREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQD/9k=",
    },
    {
      stock: 123,
      name: "ấm siêu tốc",
      description: "bền, nhỏ, nhanh sôi",
      id: 4,
      quality: 0,
      price: 567,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UDhyFdu5YhjgwefwOxBRDMS0Zzl1Bjiu48suF7XcItINGz-VKvWXQskAyyq85XrPEVs&usqp=CAU",
    },
    {
      stock:1243,
      name: "nồi cơm điện",
      description: "tốt, chín nhanh",
      id: 5,
      quality: 0,
      price: 8900,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_EfNz76G0UPcMrLsWVSGmki-c0pYJNfHQuafJCuayN-SbSViw73x0wea732YAj8hCkkU&usqp=CAU",
    },
    {
      stock:6543,
      name: "chuột gaming",
      description: "nhỏ, nhẹ, tốt",
      id: 6,
      quality: 0,
      price: 899,
      image:"data:image/jpeg;base64,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",
    }
  ];

  currentId:number = this.itemlist.length+1
  addItem(newItem:item) {
    this.itemlist.push(newItem)
  }
  itemlistCart:item[]=[]
  addToCart(newItem: item){
    let index = this.itemlistCart.findIndex((item)=>item.id === newItem.id)
    if (index != -1)
    {
      this.itemlistCart[index].quality++
      return;

    }
    newItem.quality=1;
    this.itemlistCart.push(newItem)
  }

}
