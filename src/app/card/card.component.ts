import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})


export class CardComponent implements OnInit {
  
  @Input() type: 'user' | 'other';
  @Input() title: string;
  @Input() content: string;

  constructor() { }
  
  ngOnInit() {
  
  }

}
