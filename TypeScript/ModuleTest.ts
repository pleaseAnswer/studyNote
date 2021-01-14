import shape = require('./IShape2')
import circle = require('./Circle2')
import triangle = require('./Triangle2')
function drawAllShapes(shapeToDrawn: shape.IShape) {
    shapeToDrawn.draw()
}
drawAllShapes(new circle.Circle())
drawAllShapes(new triangle.Triangle())