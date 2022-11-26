import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() openPageEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onOpenPage(page:string){
    this.openPageEmitter.emit(page)
  }

}
