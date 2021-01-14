/**
 * 类
 * ts是面向对象的js
 * 类描述了所创建的对象共同的属性和方法
 * ts支持面向对象的所有特性
 * 定义： calss class_name { // 类作用域 }
 */

/**
 * 类可以包含以下几个模块（类的数据成员）：
 * 001 字段--字段是类里面声明的变量。字段表示对象的有关数据
 * 002 构造函数--类实例化时调用，可以为类的对象分配内存
 * 003 方法--方法为对象要执行的操作
 */

 class Person {

 }

 /**
  * 创建类的数据
  * this关键字表示当前类实例化的对象
  * 构造函数的参数名与字段名相同
 */
class Car {
    // 字段
    engine: string;
    // 构造函数
    constructor(engine: string) {
        this.engine = engine
    }
    // 方法
    disp(): void {
        console.log('发动机为：' + this.engine);
    }
}

/**
 * 创建实例化对象
 * var object_name = new class_name([arguments])
 * 类中的字段属性和方法可以使用.来访问
 * obj.field_name
 * obj.function_name()
 * */ 
var obj = new Car('Engine 1')

class Car2 {
    engine: string;
    constructor(engine: string) {
        this.engine = engine
    }
    disp(): void {
        console.log('函数中显示发动机型号：' + this.engine);
    }
}

var obj = new Car('xxxsy1');
console.log('读取发动机型号：' + obj.engine);

obj.disp()

/**
 * 类的继承
 * extends
 * 子类除了不能继承父类的私有成员（方法和属性）和构造函数，其他都可以继承
 * ts一次只能继承一个类，不支持继承多个类；但ts支持多重继承（A继承B，B继承C）
 * 
 * 语法： class child_class_name extends parent_class_name
*/
class Shape {
    Area: number 
    constructor(a: number) {
        this.Area = a
    }
}
class Circle extends Shape {
    disp(): void {
        console.log('圆的面积：' + this.Area);
        
    }
}
var obj11 = new Circle(233);
obj11.disp();

class Root {
    str: string;
}
class Child extends Root {}
class Leaf extends Child {}

var obj22 = new Leaf()
obj22.str = 'Hello'
console.log(obj22.str);

/**
 * 继承类的方法重写
 * supper关键字是对父类的直接引用，该关键字可以引用父类的属性和方法
*/
class PrinterClass {
    doPrint(): void {
        console.log('父类的doPrint()方法');
    }
}
class StringPrinter extends PrinterClass {
    doPrint(): void {
        super.doPrint()
        console.log('子类的dePrint()方法');
    }
}

/**
 * static关键字
 * 用于定义类的数据成员（属性和方法）为静态，静态成员可以直接通过类名调用
*/
class StaticMen {
    static num: number;
    static disp(): void {
        console.log('num值为：' + StaticMen.num);
    }
}
StaticMen.num = 12
StaticMen.disp() // num值为12

/**
 * instanceof运算符
 * 用于判断对象是否是指定的类型，如果是返回true，否则返回false
*/
class PersonI {}
var objI = new PersonI()
var isPersonI = objI instanceof PersonI;
console.log('objI对象是PersonI类实例化来的吗？' + isPersonI);

/**
 * 访问控制修饰符
 * ts中可使用访问控制符来保护类、对象、方法和构造方法的访问
 * ts支持3种不同的访问权限：
 * 001 public（默认） 公有，可以在任何地方被访问
 * 002 protected 受保护，可以被其自身以及其子类和父类访问
 * 003 private 私有，只能被其定义所在的类访问
*/
class Encapsulate {
    str1: string = 'Hello';
    private str2: string = 'world';
}
var objII = new Encapsulate()
console.log(objII.str1);
// console.log(objII.str2);

/**
 * 类和接口
 * 类可以实现接口，使用关键字implements
*/
interface ILoan {
    interest: number
}
class AgriLoan implements ILoan {
    interest: number
    rebate: number
    constructor(interest: number, rebate: number) {
        this.interest = interest
        this.rebate = rebate
    }
}
var objIl = new AgriLoan(10, 1)
console.log('利润为：' + objIl.interest + ',抽成为：' + objIl.rebate);
