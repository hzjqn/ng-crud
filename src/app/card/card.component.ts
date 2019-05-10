import User from '../user'
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})


export class CardComponent implements OnInit {
  
  @Input() model: User | null;
  @Input() change: any;
  @Input() editable: boolean | null;
  @Input() selected: boolean | null;
  @Input() class: string | null;
  @Input() element: string | null;
  @Input() type: 'user' | 'other';
  @Input() title: string;
  @Input() content: string;

  constructor() { }
  
  ngOnInit() {
  
  }

}
