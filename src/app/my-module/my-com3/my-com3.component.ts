import { Component, OnInit } from '@angular/core';
import {MyComponent} from '../../myComponent';

// note:枚举
enum Color { Red, Green, Blue };
// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号
enum Color2 { Red = 1, Green = 2, Blue = 3 };

@Component({
  selector: 'my-com3',
  templateUrl: './my-com3.component.html',
  styleUrls: ['./my-com3.component.css']
})
export class MyCom3Component extends MyComponent implements OnInit {
  date: any = new Date();

  // note:元祖
  arr: [string, number] = ['张三', 20];

  // note:枚举
  cRed: Color = Color.Red;
  c2Red: Color2 = Color2.Red;
  // 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
  c2Green: string = Color2[2];

  //note:any
  anyArr: any[] = [1, true, 'zhangsan'];

  constructor() {
    super('my-com3');
   }

  ngOnInit(): void {
    this.speak();
    console.log(this.arr);
    console.log(this.cRed);
    console.log(this.c2Red);
    console.log(this.c2Green);
    this.anyArr[1] = 2;
    console.log(this.anyArr);

  }

}
