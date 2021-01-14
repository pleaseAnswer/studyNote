/**
 * 对象
 * 对象是包含一组键值对的实例。值可以是标量、函数、数组、对象等
*/
var obj_name = {
    key1: 'value1', // 标量
    key2: 'value',
    key3: function() {},
    key4: ['content1','content2']
}

var sites1 = {
    site1: 'zhou',
    site2: 'yaoyao'
}
console.log(sites1.site1);
console.log(sites1.site2);

/**
 * 类型模板
*/
var sites2 = {
    site1: 'zhou',
    site2: 'yaoyao',
    sayHello: function() {} // 类型模板
}
sites2.sayHello = function() {
    console.log('hello' + sites2.site2);
}
sites2.sayHello()

// 对象也可以作为一个参数传递给函数
var sites3 = {
    site1: 'zhou',
    site2: 'yaoyao'
}
var invokesites = function(obj: {site1: string, site2: string}) {
    console.log('site1:'+obj.site1);
    console.log('site2:'+obj.site2);
}
invokesites(sites3)

/**
 * 鸭子类型：关注点在于对象的行为，能做什么；而不是关注对象所属的类型
 * 鸭子类型是动态类型的一种风格，是多态的一种形式
 * 在这种风格中，一个对象有效的语义，不是由继承自特定的类或实现特定的接口，而是由“当前方法和属性的集合”决定
*/
// 多态就是允许方法重名 参数或返回值可以是父类型传入或返回。
interface IPoint {
    x: number
    y: number
}
function addPoints(p1: IPoint, p2: IPoint): IPoint {
    var x = p1.x + p2.x
    var y = p1.y + p2.y
    return {x, y}
}
var newPoint = addPoints({x:3, y:4},{x:5, y:1})
console.log('newPoint', newPoint);

// var newPoint2 = addPoints({x:3},{x:5, y:1}) // 错误