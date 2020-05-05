import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-com2',
  templateUrl: './my-com2.component.html',
  styleUrls: ['./my-com2.component.css']
})
export class MyCom2Component implements OnInit {
  ones: Array<any> = [{
    name: 'zhangsan',
    id: 1
  }, {
    name: 'lisi',
    id: 2
  }, {
    name: 'wangwu',
    id: 3
  }];

  constructor() { }

  ngOnInit(): void {
  }

  trackFun(idx, item) {
    console.log(idx, item);
    return idx;
  }

  addOldId() {
    this.ones.push({ name: 'zhoaliu', id: 1 });
  }
  addNewId() {
    debugger
    this.ones.push({ name: 'zhoaliu', id: this.ones.length + 1 });
  }

}
