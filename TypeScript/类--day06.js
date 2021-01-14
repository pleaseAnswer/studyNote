/**
 * 类
 * ts是面向对象的js
 * 类描述了所创建的对象共同的属性和方法
 * ts支持面向对象的所有特性
 * 定义： calss class_name { // 类作用域 }
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 类可以包含以下几个模块（类的数据成员）：
 * 001 字段--字段是类里面声明的变量。字段表示对象的有关数据
 * 002 构造函数--类实例化时调用，可以为类的对象分配内存
 * 003 方法--方法为对象要执行的操作
 */
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
/**
 * 创建类的数据
 * this关键字表示当前类实例化的对象
 * 构造函数的参数名与字段名相同
*/
var Car = /** @class */ (function () {
    // 构造函数
    function Car(engine) {
        this.engine = engine;
    }
    // 方法
    Car.prototype.disp = function () {
        console.log('发动机为：' + this.engine);
    };
    return Car;
}());
/**
 * 创建实例化对象
 * var object_name = new class_name([arguments])
 * 类中的字段属性和方法可以使用.来访问
 * obj.field_name
 * obj.function_name()
 * */
var obj = new Car('Engine 1');
var Car2 = /** @class */ (function () {
    function Car2(engine) {
        this.engine = engine;
    }
    Car2.prototype.disp = function () {
        console.log('函数中显示发动机型号：' + this.engine);
    };
    return Car2;
}());
var obj = new Car('xxxsy1');
console.log('读取发动机型号：' + obj.engine);
obj.disp();
/**
 * 类的继承
 * extends
 * 子类除了不能继承父类的私有成员（方法和属性）和构造函数，其他都可以继承
 * ts一次只能继承一个类，不支持继承多个类；但ts支持多重继承（A继承B，B继承C）
 *
 * 语法： class child_class_name extends parent_class_name
*/
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log('圆的面积：' + this.Area);
    };
    return Circle;
}(Shape));
var obj11 = new Circle(233);
obj11.disp();
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child));
var obj22 = new Leaf();
obj22.str = 'Hello';
console.log(obj22.str);
/**
 * 继承类的方法重写
 * supper关键字是对父类的直接引用，该关键字可以引用父类的属性和方法
*/
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log('父类的doPrint()方法');
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log('子类的dePrint()方法');
    };
    return StringPrinter;
}(PrinterClass));
/**
 * static关键字
 * 用于定义类的数据成员（属性和方法）为静态，静态成员可以直接通过类名调用
*/
var StaticMen = /** @class */ (function () {
    function StaticMen() {
    }
    StaticMen.disp = function () {
        console.log('num值为：' + StaticMen.num);
    };
    return StaticMen;
}());
StaticMen.num = 12;
StaticMen.disp(); // num值为12
/**
 * instanceof运算符
 * 用于判断对象是否是指定的类型，如果是返回true，否则返回false
*/
var PersonI = /** @class */ (function () {
    function PersonI() {
    }
    return PersonI;
}());
var objI = new PersonI();
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
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str1 = 'Hello';
        this.str2 = 'world';
    }
    return Encapsulate;
}());
var objII = new Encapsulate();
console.log(objII.str1);
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var objIl = new AgriLoan(10, 1);
console.log('利润为：' + objIl.interest + ',抽成为：' + objIl.rebate);
