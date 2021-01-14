// ts函数

/**
 * 函数定义 函数返回值
 * 1 return_type是返回值的类型
 * 2 返回值的类型需要与函数定义的返回类型（return_type）一致
 * */ 
// function function_name() [:return_type] {
//     // 执行代码
//     [return value;]
// }
function greet(): string {
    return 'hello world';
}
function caller() {
    var msg = greet();
    console.log(msg)
}
caller()

/**
 * 带参数函数
 * param1、param2 为参数名
 * datatype为参数类型
*/
// function func_name(param1[: datatype], param2[: datatype]) {
// }
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(1,2));

/**
 * 可选参数
 * 在ts函数里，如果我们定义了参数，则必须传入这些参数
 * 除非将这些参数设置为可选，可选参数使用问号标识？
 * 可选参数必须跟在必需参数后面
*/
function buildName(firstName: string, lastName: string) {
    return firstName + ' ' + lastName;
}
let result1 = buildName('Bob'); // 错误
let result2 = buildName('Bob','Adams', 'sr.'); // 错误
let result3 = buildName('Bob','Adams'); // 正确

function buildName2(firstName: string, lastName?: string) {
    return firstName + ' ' + lastName;
}
let result1 = buildName('Bob'); // 正确
let result2 = buildName('Bob','Adams', 'sr.'); // 错误
let result3 = buildName('Bob','Adams'); // 正确

/**
 * 默认参数
 * 参数不能同时设置为可选和默认
 */
// function function_name(param1[: type], param2[: type] = default_value) {
// }

function calculate_discount(price: number, rate: number = 0.50) {
    var discount = price * rate;
    console.log('计算结果：', discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);

/**
 * 剩余参数
 * 允许我们将一个不确定数量的参数作为一个数组传入
 * 函数的最后一个命名参数restOfName以...为前缀，它将成为一个由剩余参数组成的数组，索引值从0到resOfName.length
*/
function buildName(firstName: string, ...resOfName: string[]) {
    return firstName + ' ' + resOfName.join('');
}
let employeeName = buildName('Joseph', 'Same', 'Lucas', 'Andy');

function addNumbers(...nus: number[]) {
    var i;
    var sum: number = 0;
    for(i = 0; i < addNumbers.length; i++) {
        sum = sum + nums[i];
    }
    console.log('和为：', sum)
}
addNumbers(1,2,3)
addNumbers(10,10,11,111,1111)

/**
 * 匿名函数
 * 在程序运行时动态声明，除了没有函数名外，其他的与标准函数一样
*/
// var res = function([arguments]) { ... }

var msg = function() {
    return 'hello world';
}
console.log(msg())

var res = function(a: number, b: number) {
    return a * b;
};
console.log(res(12, 2))

/**
 * 匿名函数自调用
*/
(function() {
    var x = 'hello';
    console.log(x)
})()

/**
 * 构造函数
 * arg1,arg2,...argN: 参数列表
 * functionBody: 一个含有包括函数定义的js语句的字符串
*/
// var res = new Function([arg1[, arg2[, ...argN]],] functionBody)

var myFunction = new Function('a', 'b', 'return a * b');
var x = myFunction(4, 3);
console.log(x);

/**
 * 递归函数
 * 在函数内调用函数本身
*/
function factorial(number) {
    if(number <= 0) {
        return 1;
    } else {
        return (number * factorial(number - 1))
    }
}
console.log(factorial(6));

/**
 * Lambda函数，即箭头函数
*/
// ([param1, param2, ...param n]) => statement;
// ([param1, param2, ...param n]) => { // 代码块 }
var foo = (x: number) => 10 + x;
console.log(foo(100));

var foo2 = (x:number) => {
    x = 10 + x;
    console.log(x);
}
foo2(100);

var func = x => {
    if(typeof x == 'number') {
        console.log(x + '是一个数字');
    } else if(typeof x == 'string') {
        console.log(x + '是一个字符串');
    }
}
func(12);
func('Tom');

var disp = () => {
    console.log('Function invoked');
}
disp();

/**
 * 函数重载
 * 重载是方法名相同，而参数不同，返回类型可以相同也可以不同
 * 每个重载的方法都必须有一个独一无二的参数类型列表
 * 参数类型不同，则参数类型应设置为any
 * 参数数量不同，可以将不同的参数设置为可选
 * 
 * 参数类型不同
 * function disp(string): void;
 * function disp(number): void;
 * 
 * 参数数量不同
 * function disp(n1: number): void;
 * function disp(x: number, y: number): void;
 * 
 * 参数类型顺序不同
 * function disp(n1: number, s1: string): void;
 * function disp(s: string, n: number): void;
*/
function disp2(s1: string): void;
function disp2(n1: number,s1: string): void;
function disp2(x: any, y?: any): void {
    console.log(x);
    console.log(y);
}
disp2('abc');
disp2(1, 'xyz');

