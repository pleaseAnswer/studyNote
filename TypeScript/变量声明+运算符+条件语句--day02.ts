// ts 变量声明
/**
 * ts变量的命名规则 -- 同js
 * 变量使用前必须先声明 -- var
*/

// 声明变量的类型及初始值：
// var [变量名]: [类型] = 值;
var uname1: string = 'yaoyao';

// 声明变量的类型，但没有初始值，变量值会设置为undefined
// var [变量名] : [类型];
var uname2: string;

// 声明变量并初始值，但不设置类型，该变量可以是任意类型
// var [变量名] = [值];
var uname3 = 'yaoyao';

// 声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为undefined
// var [变量名];
var uname4;

/**
 * 类型断言（Type Assertion）
 * 可以用来手动指定一个值得类型，即允许变量从一种类型更改为另一种类型
*/

// 语法格式：
// <类型>值
// 值 as 类型
var str = '1';
var str2: number = <number> <any> str // str str2 是string类型
console.log(str2)

/**
 * ts是怎么确定单个断言是否足够?
 * 当S类型是T类型的自己，或者T类型是S类型的子集时，S能被成功断言成S
*/

/**
 * 类型推断
 * 当类型没有给出时，ts编译器利用类型推断来推断类型
*/
var num = 2; // 类型推断为number
console.log('num变量的值为' + num);
// 编译错误 error TS2322
num = "12"; 

/**
 * 变量作用域
 * 1 全局作用域
 * 2 局部作用域
 * 3 类作用域：这个变量也可以称为字段。类变量声明在一个类里头，但在类的方法外面，该变量可以通过类的对象来访问。类变量可以是静态的，静态的变量可以通过类名直接访问。
*/
var global_num = 12; // 全局变量
class Numbers {
    num_val = 13; // 实例变量
    static sval = 10; // 静态变量

    storeNum(): void {
        var local_num = 14; // 局部变量
    }
}
console.log('全局变量为：' + global_num);
console.log('静态变量为：' + Numbers.sval);
var obj = new Numbers();
console.log("实例变量为：" + obj.num_val);

// ts 运算符
/**
 * 位运算符
 * & 按位与 0101 & 0001 --- 0001 --- 1
 * | 按位或 0101 | 0001 --- 0101 --- 5
 * ~ 取反 ~0101 --- 1010 --- -6
 * ^ 异或 0101 ^ 0001 --- 0100 --- 4
 * << 左移 0101 << 1 --- 1010 --- 10
 * >> 右移 0101 >> 1 --- 0010 --- 2
 * >>> 无符号右移 0010 >>> 1 --- 0001 --- 1
*/
var a: number = 2; // 0010
var b: number = 3; // 0011
var result;
result = (a & b); // 0010
console.log('(a & b) =>', result);
result = (a | b); // 0011
console.log('(a | b) =>', result);
result = (a ^ b); // 0001
console.log('(a ^ b) =>', result);
result = (~ b); // 1100
console.log('(~ b) =>', result);
result = (a << b); // 10000 
console.log('(a << b) =>', result);
result = (a >> b); // 0000
console.log('(a >> b) =>', result);
result = (a >>> 1); // 0001
console.log('(a >>> 1) =>', result);

// 条件语句
//  switch...case 语句
//  switch(expression) {
//      case constant-expression:
//          statement(s);
//          break;
//      case constant-expression:
//          statement(s);
//          break;
//      default:
//          statement(s);
//  }

/**
 * switch语句必须遵循下面的规则
 * 1 switch 语句中的 expression 是一个常量表达式，必须是一个整型或枚举类型。
 * 2 case 的 constant-expression 必须与 switch 中的变量具有相同的数据类型，且必须是一个常量或字面量。
*/
var grade: string = 'A';
switch(grade) {
    case 'A': {
        console.log('优');
        break;
    }
    case 'B': {
        console.log('良');
        break;
    }
    case 'C': {
        console.log('及格');
        break;
    }
    case 'D': {
        console.log('不及格');
        break;
    }
    default: {
        console.log('非法输入');
        break;
    }
}

