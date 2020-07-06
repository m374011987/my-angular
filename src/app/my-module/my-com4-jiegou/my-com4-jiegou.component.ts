import { Component, OnInit } from '@angular/core';
import { MyComponent } from '../../myComponent';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'my-com4-jiegou',
  templateUrl: './my-com4-jiegou.component.html',
  styleUrls: ['./my-com4-jiegou.component.less']
})
export class MyCom4JiegouComponent extends MyComponent implements OnInit {

  constructor() {
    super('my-com4-jiegou');
  }

  ngOnInit(): void {
    this.speak();
    // 当然，由于是JavaScript, 你可以忽略你不关心的尾随元素：
    let [a, b] = [1, 2, 3, 4];
    console.log(a, b);

    // 或其它元素：
    let [, second, , fourth] = [1, 2, 3, 4];
    console.log(second, fourth);


    // 你可以在数组里使用...语法创建剩余变量
    this.fun(['zhangsan', 20, 1, 2, 3]);

    // 对象解构
    let per = {
      pera: 1,
      perb: true,
      perc: 'zhangsan'
    };
    let { pera, perb } = per; //属性名必须要相同
    console.log(pera, perb);

    // 你可以在对象里使用...语法创建剩余变量：
    let { per2a, ...per2other } = { per2a: 'zhangsan', per2b: true, per2c: 20 };
    console.log(per2a, per2other);
    
  }


//note: 解构用于函数
fun([name, age, ...other]) {
  console.log(name, age, other);
}

}
