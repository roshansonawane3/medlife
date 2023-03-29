import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.scss']
})
export class ViewProductDetailsComponent implements OnInit {

  selectedDrudCode:string|null;
  productDetails:any;

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
  
  constructor(private route:ActivatedRoute,private http:HttpService) { 
    this.selectedDrudCode = this.route.snapshot.paramMap.get("drugCode");
  }

  ngOnInit(): void {
    this.getProudctDetailsByCategoryId();
  }

  getProudctDetailsByCategoryId(){
    if(this.selectedDrudCode != null){
      const endPoint = "top-deals?drugCode="+this.selectedDrudCode;
      this.http.getDataFromServer(endPoint).subscribe((el:any)=>{
        if(el && el.length > 0){
          this.productDetails = el[0];
          console.log("product-details",this.productDetails);
        }
      },
      error=>{
        console.log("error message=",error);
      })
    }
  }

}