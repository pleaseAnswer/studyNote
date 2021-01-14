/**
 * 模块
 * 模块是在其自身的作用域里执行，并不是在全局作用域
 * => 定义在模块里面的变量、函数、类等在模块外部是不可见的，除非明确使用export导出。类似的，必须通过import导入其他模块导出的变量、函数、类等
 * 
 * 两个模块之间的关系是通过在文件级别上使用import和export建立的
 * 
 * 模块使用模块加载器去导入其他模块
 * 
 * 模块导出使用关键字export
 * export interface SomeInterface { // 代码 }
 * 
 * 模块导入使用关键字import
 * import someInterfaceRef = require('./SomeInterface')
*/

// IShape2.ts文件
/// <reference path = 'IShape2.ts'/>
export interface IShape {
    draw()
}

// Circle2.ts文件
import shape = require('./IShape2')
export class Circle implements WaveShaperNode.IShape {
    public draw() {
        console.log('Circle is drawn (external module)');
        
    }
}

//Triangle2.ts文件
import shape = require('./IShape2')
export class Triangle import shape.IShape {
    public draw() {
        console.log('Triangle is drawn (external module)');
    }
}

//ModuleTest.ts文件
import shape = require('./IShape2')
import circle = require('./Circle2')
import triangle = require('./Triangle2')
function drawAllShapes(shapeToDrawn: shape.IShape) {
    shapeToDrawn.drawn()
}
drawAllShapes(new circle.Circle())
drawAllShapes(new triangle.Triangle())

// tsc --module amd ModuleTest.ts
// tsc --module commonjs ModuleTest.ts