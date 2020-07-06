import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-com1',
  templateUrl: './my-com1.component.html',
  styleUrls: ['./my-com1.component.less']
})
export class MyCom1Component implements OnInit {
  constructor() { }

  @Input() heroDetail: string;

  ngOnInit(): void {
  }

}
