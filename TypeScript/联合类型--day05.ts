/**
 * 联合类型 可通过管道（|）将变量设置多种类型，赋值时可以根据设置的类型来赋值
 * 注意：只能赋值指定类型，否则报错
 * 语法： Type1|Type2|Type3
*/
var val: string | number;
val = 12;
console.log('数字为：' + val);
val = 'yaoyao';
console.log('字符串为：' + val);
// var val:string|number;
// val = true; // 报错

// 也可以将联合类型作为函数参数使用
function disp(name: string | string[]) {
    if(typeof name == 'string') {
        console.log(name);
    } else {
        var i;
        for(i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
disp('yaoyao');
console.log('输出数组...');
disp(['hello', 'yaoyao', 'are', 'you', 'ok'])

// 联合类型数组
var arr: number[] | string[];
var i: number;
arr = [1, 2, 4];
console.log('**数字数组**');
for(i = 0; i<arr.length; i++) {
    console.log(arr[i]);
}
arr = ['yaoyao', 'hello', 'world'];
console.log('**字符串数组**');
for(i = 0; i<arr.length; i++) {
    console.log(arr[i]);
}

