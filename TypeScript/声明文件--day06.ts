/**
 * 声明文件
*/

//js中 使用jQuery
// $('#foo);
// jQuery('#foo')

//ts中
// jQuery('#foo') // index.ts(1,1): err: Cannot find name 'jQuery'
// 使用declare关键字来定义它的类型，帮助ts判断我们传入的参数类型
declare var jQuery: (selector: string) => any;
jQuery('#foo')

// declare定义的类型只会用于编译时的检查，编译结果会被删除

/**
 * 声明文件
 * 声明文件以.d.ts为后缀
 * 声明文件不包含实现，只是类型声明
 * 声明文件或模板的语法格式： declare module Module_Name {}
 * ts引入声明文件语法格式： /// <reference path = 'yaoyao.ts'/>
*/
// CalcThirdPartyJsLib.js文件
var Yaoyao;
(function(Yaoyao) {
    var Calc = (function() {
        function Calc() {}
    })
    Calc.prototype.doSum = function(limit) {
        var sum = 0;
        for(var i=0; i<=limit; i++) {
            sum = sum + i
        }
        return sum;
    }
    Yaoyao.Calc = Calc;
    return Calc;
})(Yaoyao || (Yaoyao = {}))
var test = new Yaoyao.Calc()

//Calc.d.ts文件
declare module Yaoyao {
    export class Calc {
        doSum(limit: number): number
    }
}
// 把声明文件加入到ts中
// CalcTest.ts文件
/// <reference path = 'Calc.d.ts'/>
var obj = new Yaoyao.Calc()
console.log(obj.doSum(10));


