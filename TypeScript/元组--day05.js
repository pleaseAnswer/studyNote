/*
 * 元组：数组中元素类型一般是相同的，如果存储的元素类型不同，则需要使用元组
 * 元组中允许存储不同类型的元素，元组可以作为参数传递给函数
 *
 * 语法：var tuple_name = [value1, value2, value3, ...value n]
 */
var mytuple = [10, 'yaoyao'];
var mytuple1 = [];
mytuple1[0] = 120;
mytuple1[1] = 220;
/**
 * 访问元组
 * tuple_name[index]
*/
var mytuple2 = [10, 'yaoyao'];
console.log(mytuple2[0]);
/**
 * 元组运算
 * push() 向元组后面添加元素
 * pop() 从元组中移除最后一个元素
*/
var mytuple3 = [10, 'yaoyao', 'hello', 'world'];
console.log('添加前元素个数：' + mytuple3.length);
mytuple3.push(12);
console.log('添加前元素个数：' + mytuple3.length);
console.log('删除前元素个数：' + mytuple3.length);
console.log(mytuple3.pop() + '元素从元组中删除；删除后元素个数：' + mytuple3.length);
/**
 * 更新元组
*/
var mytuple4 = [10, 'yaoyao', 'hello', 'world'];
console.log('元组的第一个元素为：' + mytuple4[0]);
mytuple4[0] = 121;
console.log('元组的第一个元素更新为：' + mytuple4[0]);
/**
 * 解构元组
*/
var a = [10, 'yaoyap'];
var b = a[0], c = a[1];
console.log(b);
console.log(c);
