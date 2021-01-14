import shape = require('./IShape2')
export class Circle implements shape.IShape {
    public draw() {
        console.log('Circle is drawn (external module)');
        
    }
}