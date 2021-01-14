/**
 * 接口： 是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要具体类去实现，三方可通过这组抽象方法调用，让具体的类执行具体的方法
 * 接口不能转换为js，它只是ts的一部分
 * 定义
 * interface interface_name {}
*/
interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: ()=> string
}
var customer: IPerson = {
    firstName: 'Tom',
    lastName: 'Hanks',
    sayHi: (): string => 'Hi there'
}

console.log('Customer 对象 ');
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee: IPerson = {
    firstName: 'Zhou',
    lastName: 'yaoyao',
    sayHi: (): string => 'Hello!!'
}

console.log('Employee 对象 ');
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());

/**
 * 联合类型和接口
*/
interface RunOptions {
    program: string;
    commandline: string[] | string | (()=> string);
}
