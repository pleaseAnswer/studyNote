// Map 对象
/**
 * Map 对象保存键值对，并且能够记住键的原始插入顺序
 * 任何值都可以作为一个键或一个值
*/

// 创建Map
// let myMap = new Map();

let myMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
])

/**
 * Map相关函数与属性
 * map.clear() 移除Map对象的所有键值对
 * map.set() 设置键值对，返回该Map对象
 * map.get() 返回键对应的值，若不存在，则返回undefined
 * map.has() 返回一个布尔值，判断Map中是否包含键对应的值
 * map.delete() 删除Map中的元素，删除成功返回true，失败返回false
 * map.size 返回Map对象键值对的数量
 * map.keys() 返回一个iterator对象，包含了Map对象中每个元素的键
 * map.values() 返回一个iterator对象，包含了Map对象中每个元素的值
*/

let nameSiteMapping = new Map();

nameSiteMapping.set('Google', 1);
nameSiteMapping.set('Runoob', 2);
nameSiteMapping.set('Alibba', 3);

console.log('get', nameSiteMapping.get('Runoob')); // 2
console.log('has', nameSiteMapping.has('Alibba')); // true
console.log('has', nameSiteMapping.has('Zhihu')); // false
console.log('size', nameSiteMapping.size); // 3
console.log('delete', nameSiteMapping.delete('Runoob')); // true
console.log('nameSiteMapping', nameSiteMapping); 
// Map {'Goole' => 1, 'Alibba' => 3}
nameSiteMapping.clear();
console.log('clear', nameSiteMapping);
// Map {}

// 使用es6编译 tsc --target es6 test.ts

/**
 * 迭代Map
 * Map对象中的元素是按顺序插入的，可以迭代Map对象，每一次迭代返回[key, value]数组
 * ts使用for..of来实现迭代
*/
let nameSiteMapping2 = new Map();
nameSiteMapping2.set('Google', 1);
nameSiteMapping2.set('Runoob', 2);
nameSiteMapping2.set('Alibba', 3);

for(let key of nameSiteMapping2.keys()) {
    console.log('key', key);
}
for(let value of nameSiteMapping2.values()) {
    console.log('value', value);
}
for(let entry of nameSiteMapping2.entries()) {
    console.log('entry', entry[0], entry[1]); 
}
for(let [key, value] of nameSiteMapping2) {
    console.log(key, value);
    
}



