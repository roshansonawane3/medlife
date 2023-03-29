import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/services/http.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent implements OnInit {
  topDeals: any[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private http: HttpService, private shared: SharedService, private cart:CartService) { }
  
  ngOnInit(): void {
    this.getTopDeals();
  }
 
  getTopDeals() {
    this.http.getDataFromServer("top-deals").subscribe((responce: any) => {
      if (responce && responce.length > 0) {
        this.topDeals = responce;
        console.log("topDeals", this.topDeals);
      }
    },
      error => {
        console.log("Error Message", error.Message);
      })
  }

  addToCart(item: any) {
    this.cart.addItemToCart(item);
  }

 
}





