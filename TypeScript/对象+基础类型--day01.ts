// npm i -g typescript
// $tsc -v
// 1 tsc test.ts 编译
// 2 node test.js 执行
// const hello: string = "Hello World!"
// console.log(hello)

/**
 * TypeScript 是一种面向对象的编程语言
 * 面向对象主要有两个概念：对象 类
 * 对象： 对象是类的一个实例
 * 类： 类是一个模板，描述一类对象的行为和状态
 *  
*/ 

class Site {
    name():void {
        console.log("Runoob")
    }
}
var obj = new Site();
obj.name();

/**
 * ts 基础类型
 * any  任意类型
 * number 数字
 * string 字符
 * boolean 布尔
 * enum 枚举
 * void 用于标识方法返回值的类型，表示该方法没有返回值
 * null  表示对象值缺失
 * undefined 用于初始化变量为一个未定义的值
 * never 其他类型的子类型，代表从不会出现的值
*/

/**
 * any 是ts针对编程时类型不明确的变量使用的一种数据类型
 * 变量的值会动态改变时
 * 任意值类型可以让这些变量跳过编译阶段的类型检查
*/
let x: any = 1; // 数字类型
x = 'i am who i am'; // 字符串类型
x = false; // 布尔类型

let x: any = 4;
x.ifExists(); // 正确，这里不会检查ifExists方法是否存在
x.toFixed(); // 正确

let arrayList: any[] = [1, false, 'fine'];

/**
 * 在ts中启用严格的空校验（strictNullChecks）特性
 * 可以使得null undefined只能被赋值给void或本身对应的类型
*/
let x: number;
x = 1; // 运行正确
x = undefined; // 运行错误
x = null; // 运行错误

let x: number | null | undefined;
x = 1; // 运行正确
x = undefined; // 运行正确
x = null; // 运行正确

/**
 * never 是其他类型的子类型，代表不会出现的值
 * 声明位never类型的变量只能被never类型所赋值
 * 在函数中通常表现为抛出异常或无法执行到终止点（无限循环）
*/ 
let x: never;
let y: number;

x = 123; // 运行错误
x = (() => { throe new Error('exception') })(); // 运行正确
// 运行正确 never类型可以赋值给数字类型
y = (() => { throe new Error('exception') })(); 

function error(message: string): never {
    throw new Error(message);
}

function loop(): never {
    while(true) {}
}

