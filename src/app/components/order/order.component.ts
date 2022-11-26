import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule,CalendarModule,FormsModule,InputTextModule,InputNumberModule,ButtonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Output() closePageEmitter = new EventEmitter<string>();


  date:Date = new Date()
  orderName:string =''
  amount:number = 0

  catagoryList: ICatagoryCheck[] =[
    {
      id:1,
      name:'อาหาร',
      imgPath:'/assets/img/icons/salad.png',
      checked:true
    },
    {
      id:2,
      name:'เครื่องดื่ม',
      imgPath:'/assets/img/icons/soda.png',
      checked:false
    },
    {
      id:3,
      name:'ยานพาหนะ',
      imgPath:'/assets/img/icons/car.png',
      checked:false
    },
    {
      id:5,
      name:'ที่พักอาศัย',
      imgPath:'/assets/img/icons/home.png',
      checked:false
    },
    {
      id:6,
      name:'เทคโนโลยี',
      imgPath:'/assets/img/icons/smartphone.png',
      checked:false
    },
    {
      id:7,
      name:'ช้อปปิ้ง',
      imgPath:'/assets/img/icons/online-shopping.png',
      checked:false
    },
    {
      id:8,
      name:'สุขภาพ',
      imgPath:'/assets/img/icons/healthy.png',
      checked:false
    },
    {
      id:9,
      name:'รายรับ',
      imgPath:'/assets/img/icons/salary.png',
      checked:false
    },
    {
      id:10,
      name:'อื่นๆ',
      imgPath:'/assets/img/icons/coin.png',
      checked:false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  log(){
    console.log(this.date)
  }

  onSelectCat(id:number){
    this.catagoryList.forEach(item=>{
      if(item.id === id){
        item.checked = true
      }else{
        item.checked = false
      }
    })
  }

  onClosePage(page:string){
    this.closePageEmitter.emit(page)
  }

}


interface ICatagoryCheck{
  id:number,
  name:string,
  imgPath:string,
  checked:boolean
}
