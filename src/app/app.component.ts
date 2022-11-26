import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isShowOrderPage:boolean
  isShowSummaryPage:boolean = false

  constructor(private primengConfig: PrimeNGConfig){
    if(window.innerWidth > 540){
      this.isShowOrderPage = true
    }else{
      this.isShowOrderPage = false
    }
  }


    ngOnInit() {
      this.primengConfig.ripple = true;
    }

    onOpenPage(page:string){
      if(page === 'order'){
        this.isShowOrderPage = true
      }else if(page === 'summary' ){
        this.isShowSummaryPage = true
      }
    }

    onClosePage(page:string){
      if(page === 'order'){
        this.isShowOrderPage = false
      }else if(page === 'summary' ){
        this.isShowSummaryPage = false
      }
    }
    
}
