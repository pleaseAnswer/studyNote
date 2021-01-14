// Number

/**
 * Number对象是原始数值的包装对象
 * 如果一个参数值不能转换为一个数字将返回NaN（非数字值）
 * 语法 var num = new Number(value);
*/

/**
 * Number对象属性
 * MAX_VALUE 可表示的最大的数
 * MIN_VALUE 可表示的最小的数
 * NaN 非数字值
 * NEGATIVE_INFINITY 负无穷大
 * POSITIVE_INFINITY 正无穷大
 * prototype Number对象的静态属性
 * constructor 返回对创建此对象的Number函数的引用
*/

console.log('ts Number 属性：');
console.log('最大值：' + Number.MAX_VALUE);
console.log('最小值为：' + Number.MIN_VALUE);
console.log('负无穷大为：' + Number.NEGATIVE_INFINITY);
console.log('正无穷大为：' + Number.POSITIVE_INFINITY);

// NaN
var month = 0;
if(month <= 0 || month > 12) {
    month = Number.NaN;
    console.log('月份是：', month);
} else {
    console.log('输入月份数值正确');
}

//prototype
function employee(id: number, name: string) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, 'admin');
employee.prototype.email = 'admin@yaoyao.com';

console.log('员工号：', emp.id);
console.log('员工姓名：', emp.name);
console.log('员工邮箱：', emp.email);

/**
 * Number 对象方法
 * toExponential() 把对象的值转换为指数计数法
 * toFixed() 把数字转换为字符串，并对小数点指定位数
 * toLocaleString() 把数字转换为字符串，使用本地数字格式顺序
 * toPrecision() 把数字格式化为指定的长度
 * toString() 把数字转换为字符串，使用制定的基数。数字的基数是2~36之间的整数。若省略则使用基数10
 * valueOf() 返回一个Number对象的原始数字值
*/

// toExponential() 把对象的值转换为指数计数法
var num1 = 1225.30;
var val = num1.toExponential(); // 1.2253e+3

// toFixed() 把数字转换为字符串，并对小数点指定位数
var num2 = 177.234;
console.log('num2.toFixed() 为：' + num2.toFixed()); // 177
console.log('num2.toFixed(2) 为：' + num2.toFixed(2)); // 177.23
console.log('num2.toFixed(6) 为：' + num2.toFixed(6)); // 177.234000

// toLocaleString() 把数字转换为字符串，使用本地数字格式顺序
var num3 = new Number(177.1234);
console.log(num3.toLocaleString()); // 177.1234

// toPrecision() 把数字格式化为指定的长度
var num4 = new Number(7.123456);
console.log(num4.toPrecision()); // 7.123456
console.log(num4.toPrecision(1)); // 7
console.log(num4.toPrecision(2)); // 7.1

// toString() 把数字转换为字符串，使用制定的基数。数字的基数是2~36之间的整数。若省略则使用基数10
var num5 = new Number(10);
console.log(num5.toString()); // 10
console.log(num5.toString(2)); // 101
console.log(num5.toString(8)); // 12

// valueOf() 返回一个Number对象的原始数字值
var num6 = new Number(10);
console.log(num6.valueOf()); // 10


// String 

/**
 * String对象用于处理文本
 * 语法
 * var txt = new String('string');
 * var txt = 'string';
*/

/**
 * String 对象属性
 * constructor 创建该对象的函数的引用
 * length 返回字符串的长度
 * prototype 允许向对象添加属性和方法
*/

var str = new String('This is string');
console.log('str.constructor is:' + str.constructor);

var uname = new String('yaoyao');
console.log('Length:' + uname.length);

function employee1(id: number, name: string) {
    this.id = id;
    this.name = name;
}
var emp = new employee1(123, 'admin')
employee1.prototype.email = 'admin@yaoyao.com';
console.log('员工号：' + emp.id);
console.log('员工姓名：' + emp.uname);
console.log('员工邮箱：' + emp.email);

/**
 * charAt() 返回在指定位置的字符
 * charCodeAt() 返回在指定的位置的字符的Unicode编码
 * concat() 连接两个或更多字符串，并返回新的字符串
 * indexOf() 返回某个指定的字符串值在字符中首次出现的位置
 * lastIndexOf() 从后向前搜索字符串，并从起始位置0开始计算返回字符串最后出现的位置
 * localCompare() 用本地特定的顺序来比较两个字符串
 * match() 查找找到一个或多个正则表达式的匹配
 * replace() 替换与正则表达式匹配的子串
 * search() 检索与正则表达式相匹配的值
 * slice() 提取字符串的片断，并在新的字符串中返回被踢去的部分
 * split() 把字符串分割为子字符串数组
 * substr() 从起始索引号提取字符串中指定数目的字符
 * substring() 提取字符串中两个指定的索引号之间的字符
 * toLocalLowerCase() 转换为小写
 * toLocalUpperCase() 转换为大写
 * tolowerCase() 转小写
 * toUpperCase() 转大写
 * toString() 返回字符串
 * valueOf() 返回指定字符串对象的原始值
*/

// charAt() 返回在指定位置的字符
var str1 = new String('YAOYAO');
str1.charAt(0) // Y
str1.charAt(1) // A
str1.charAt(2) // O
str1.charAt(3) // Y
str1.charAt(4) // A
str1.charAt(5) // O

// charCodeAt() 返回在指定的位置的字符的Unicode编码
console.log('str1.charCodeAt(0)为：' + str1.charCodeAt(0));
console.log('str1.charCodeAt(1)为：' + str1.charCodeAt(1));
console.log('str1.charCodeAt(2)为：' + str1.charCodeAt(2));
console.log('str1.charCodeAt(3)为：' + str1.charCodeAt(3));
console.log('str1.charCodeAt(4)为：' + str1.charCodeAt(4));
console.log('str1.charCodeAt(5)为：' + str1.charCodeAt(5));

// concat() 连接两个或更多字符串，并返回新的字符串
var str2 = new String('YAOYAO');
var str3 = new String('GOOGLE');
var str4 = str2.concat(str3);
console.log('str2 + str3: ' + str4);

// indexOf() 返回某个指定的字符串值在字符中首次出现的位置
var index = str1.indexOf('AO');
console.log('AO的字符串位置：' + index); // 1

// lastIndexOf() 从后向前搜索字符串，并从起始位置0开始计算
var str5 = new String('This is string one and aga in string');
var index1 = str5.lastIndexOf('string');
console.log('lastIndexOf 查找到的最后字符串位置：' + index1); // 30
index1 = str5.lastIndexOf('one');
console.log('lastIndexof 查找到的最后字符串的位置：' + index1); // 15

// localCompare() 用本地特定的顺序来比较两个字符串
var str6 = new String('This is beautiful string');
var index2 = str6.localeCompare('This is beautiful string');
console.log('localCompare first:' + index2); // 0

var str7 = 'The rain in SPAIN stays mainly in the plain';
var n = str7.match(/ain/g)
console.log(n); // [ 'ain', 'ain', 'ain' ]

var re = /(\w+)\s(\w+)/;
var str8 = 'zara ali';
var newstr = str8.replace(re, '$2,$1');
console.log(newstr); // ali,zara

var re2 = /apples/gi;
var str9 = 'Apples are round, and apples are juicy.';
if(str9.search(re2) == -1) {
    console.log('does not contain apples');
} else {
    console.log('contains apples');
}

var splitted = str9.split(' ', 3);
console.log(splitted); // [ 'Apples', 'are', 'round,' ]

var str10 = 'YAOYAO GOOGLE TAOBAO FACEBOOK';
console.log('(1, 2):' + str10.substring(1, 2));
console.log('(0, 10):' + str10.substring(0, 10));
console.log('(5):' + str10.substring(5));

var str11 = 'Yaoyao Google';
console.log(str11.toLowerCase());

var str12 = 'Yaoyao Google';
console.log(str12.toUpperCase());

var str13 = 'Yaoyao';
console.log(str13.toString());

var str14 = new String('Yaoyao');
console.log(str14.valueOf());


// Array 数组
/**
 * 数组对象是使用单独的变量名来存储一系列的值
 * 语法格式
 * var array_name[:datatype]; // 声明
 * array_name = [val1, val2, valn..]; // 初始化
 * 
 * var array_name[:datatype] = [val1, val2, valn..];
 * 如果数组声明时未设置类型，则会被认为是any类型，在初始化时根据第一个元素的类型来推断数组的类型
*/
var numlist:number[] = [2,4,6,8];

var sites1: string[];
sites1 = ['Yaoayao', 'Google', 'Taobao'];
console.log(sites1[0]);
console.log(sites1[1]);

var nums1: number[] = [1,2,3,4];
console.log(nums1[0]);
console.log(nums1[1]);
console.log(nums1[2]);
console.log(nums1[3]);

/**
 * Array 对象
 * Array对象的构造函数接受以下两种值：
 * 1 表示数组大小的数值
 * 2 初始化的数组列表，元素使用逗号分隔值
*/
var arr_names:number[] = new Array(4);
for(var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]); // 0 2 4 6 
}

var sites2: string[] = new Array('Yaoyao','Google','Taobao');
for(var i = 0; i < sites2.length; i++) {
    console.log(sites2[i]); 
}

// 数组解构
var arr2:number[] = [12, 13];
var [x, y] = arr2; 
console.log(x); // 12
console.log(y); // 13

// 数组迭代
var j:any;
var nums:number[] = [1001, 1002, 1003, 1004];
for(j in nums) {
    console.log(nums[j]);
}

// 多维数组
// var arr_name2: datatype[][] = [[val11,val12,val13],[val21,val22,val23]];

var multi1:number[][] = [[1,2,3],[12,23,34]]
console.log(multi1[0][0]);
console.log(multi1[0][1]);
console.log(multi1[0][2]);
console.log(multi1[1][0]);
console.log(multi1[1][1]);
console.log(multi1[1][2]);

// 数组在函数中的使用
// 作为参数
var site33:string[] = new Array('Yaoyao', 'Google', 'Facebook');
function disp(arr_sites:string[]) {
    for(var i = 0; i < arr_sites.length; i++) {
        console.log(arr_sites[i]);
    }
}
disp(site33);

// 作为返回值
function disp2():string[] {
    return new Array('Yaoyao','Google','Facebook'); 
}
var sites2:string[] = disp2()
for(var k in sites2) {
    console.log(sites2[k]);
}

/**
 * 数组方法
 * concat() 连接两个或更多的数组，并返回结果
 * every() 检测数值元素的每个元素是否都符合条件
 * some() 检测数组元素中是否有元素符合指定条件
 * filter() 检测数值元素，并返回符合条件所有元素的数组
 * forEach() 数组每个元素都执行一次回调函数
 * indexOf() 搜索数组中的元素，并返回它所在的位置。找不到则返回-1
 * join() 把数组的所有元素放入一个字符串
 * lastIndexOf() 返回一个指定的字符串值最后出现的位置，在一个字符串中指定位置从后向前搜索
 * map() 通过指定函数处理数组的每个元素，并返回处理后的数组
 * pop() 删除数组的最后一个元素并返回删除的元素
 * push() 向数组的末尾添加一个或多个元素，并返回新的长度
 * reduce() 将数组元素计算为一个值（从左到右）
 * reduceRight() 将数组元素计算为一个值（从右到左）
 * reverse() 反转数组的元素顺序
 * shift() 删除并返回数组的第一个元素
 * slice() 选取数组的一部分，并返回一个新数组
 * sort() 对数组的元素进行排序
 * splice() 从数组中添加或删除元素
 * toString() 把数组转换为字符串，并返回结果
 * unshift() 向数组的开头添加一个或多个元素，并返回新的长度
*/

var alpha = ['a', 'b', 'c'];
var numeric = [1, 2, 3];

var alphaNumeric1 = alpha.concat(numeric);
console.log('alphaNumeric1:' + alphaNumeric1);

function isBigEnough(ele, index, arr) {
    return (ele >= 10);
}
var passed1 = [12, 5, 6 , 109, 77].every(isBigEnough);
console.log('test value:' + passed1);

var passed2 = [12, 5, 6 , 109, 77].some(isBigEnough);
console.log('test value:' + passed2);

var passed3 = [12, 5, 6 , 109, 77].filter(isBigEnough);
console.log('test value:' + passed3);

let num = [7, 8, 9];
num.forEach(value => console.log(value));

var index00 = [12, 5, 6, 132, 99].indexOf(5);
console.log('index is:' + index00);

var arr01 = new Array('first', 'second', 'third');
var str01 = arr01.join();
var str02 = arr01.join(',');
var str03 = arr01.join('+');
console.log(str01, str02, str03);

var numbers = [1, 4, 9];
var roots00 = numbers.map(Math.sqrt);
console.log('roots00' + roots00);
var ele = numbers.pop()
console.log('ele' + ele);
var ele2 = numbers.pop()
console.log('ele2' + ele2);

var numbers02 = new Array(1,4,9);
var length02 = numbers02.push(10);
console.log('numbers02', numbers02);
length02 = numbers02.push(20)
console.log('numbers02', numbers02);

var total01 = [0,1,2,3].reduce((a,b) => a + b)
console.log('total', total01);
var total02 = [1,2,3,4].reduceRight((a,b) => a+b)
console.log('total', total02);

var arr03 = [10, 1, 2, 3].reverse();
console.log('reverse', arr03);

var arr04 = [10,1,2,3].shift();
console.log('shift', arr04);

var arr05 = ['orange', 'mango', 'banana', 'sugar', 'tea'];
console.log('slice',arr05.slice(1,2));
console.log('slice',arr05.slice(1,3));

var arr06 = ['orange', 'mango', 'banana', 'sugar', 'tea'];
var sorted01 = arr06.sort();
console.log('sort', sorted01);

var arr07 = ['orange', 'mango', 'banana', 'sugar', 'tea'];
var removed01 = arr07.splice(2, 0, 'water');
console.log('splice', arr07);
console.log('splice', removed01);
removed01 = arr07.splice(3, 1);
console.log('splice', arr07);
console.log('splice', removed01);

var arr08 = ['orange', 'mango', 'banana', 'sugar', 'tea'];
var str08 = arr08.toString();
console.log('toString', str08);

var arr09 = ['orange', 'mango', 'banana', 'sugar', 'tea'];
var length09 = arr09.unshift('water');
console.log('unshift', arr09);
console.log('length09', length09);
