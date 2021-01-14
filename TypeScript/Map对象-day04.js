// Map 对象
/**
 * Map 对象保存键值对，并且能够记住键的原始插入顺序
 * 任何值都可以作为一个键或一个值
*/
// 创建Map
// let myMap = new Map();
var myMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);
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
var nameSiteMapping = new Map();
nameSiteMapping.set('Google', 1);
nameSiteMapping.set('Runoob', 2);
nameSiteMapping.set('Alibba', 3);
console.log('get', nameSiteMapping.get('Runoob')); // 2
console.log('has', nameSiteMapping.has('Alibba'));
console.log('has', nameSiteMapping.has('Zhihu'));
console.log('size', nameSiteMapping.size);
console.log('delete', nameSiteMapping["delete"]('Runoob'));
console.log('nameSiteMapping', nameSiteMapping);
nameSiteMapping.clear();
console.log('clear', nameSiteMapping);
