import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marketcard',
  templateUrl: './marketcard.component.html',
  styleUrls: ['./marketcard.component.css']
})
export class MarketcardComponent implements OnInit {
@Input() marketplace: any;
  constructor() { }

  ngOnInit() {
  }

}
