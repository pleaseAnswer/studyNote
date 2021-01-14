import shape = require('./IShape2')
export class Triangle implements shape.IShape {
    public draw() {
        console.log('Triangle is drawn (external module)');
    }
}