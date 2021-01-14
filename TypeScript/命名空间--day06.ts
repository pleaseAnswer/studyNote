/**
 * 命名空间
 * 关键字 namespace
 * 目的：解决重名问题
 * 命名空间定义了标识符的可见范围，一个标识符可在多个名字空间中定义，且在不同名字空间中的含义是互不相干的
 * 
 * 在外部调用命名空间中的类和接口，需要在类和接口添加extends关键字
 * 
 * 如果一个命名空间在一个单独的ts文件中，则应使用三斜杠///应用它
 * /// <reference path = 'SomeFileName.ts' />
*/
namespace SomeNameSpaceName {
    export interface ISomeInterfaceName {}
    export class SomeClassName {}
}

// 要在另外一个命名空间调用语法格式为： SomeNameSpaceName.SomeClassName

// IShape.ts文件
namespace Drawing {
    export interface IShape {
        draw()
    }
}
// Circle.ts文件
/// <reference path = 'IShape.ts'/>
namespace Drawing {
    export class Circle implements IShape {
        public draw() {
            console.log('Circle is drawn');
        }
    }
}
// Triangle.ts文件
/// <reference path = 'IShape.ts'/>
namespace Drawing {
    export class Triangle implements IShape {
        public draw() {
            console.log('Triangle is drawn'); 
        }
    }
}
// TestShape.ts文件
/// <reference path = 'IShape.ts'/>
/// <reference path = 'Circle.ts'/>
/// <reference path = 'Triangle.ts'/>
function drawAllShapes(shape: Drawing.IShape) {
    shape.draw()
}
drawAllShapes(new Drawing.Circle())
drawAllShapes(new Drawing.Triangle())

// tsc --out nameSpaceTest.js TestShape.ts
// node nameSpaceTest.js

/**
 * 嵌套命名空间
 * namespace namespace_name1 {
 *   export namespace namespace_name2 {
 *     export class class_name {}
 *   }
 * }
 * 成员的访问使用点好.来实现
*/
// Invoice.ts文件
namespace Runoob {
    export namespace invoiceApp {
        export class Invoice {
            public calculateDiscount(price: number) {
                return price * 4
            }
        }
    }
}
// IvoiceTest.ts文件
/// <reference path = 'Invoice.ts'/>
var invoice = new Runoob.invoiceApp.Invoice()
console.log(invoice.calculateDiscount(500));
