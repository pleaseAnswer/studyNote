define(["require", "exports", "./Circle2", "./Triangle2"], function (require, exports, circle, triangle) {
    "use strict";
    exports.__esModule = true;
    function drawAllShapes(shapeToDrawn) {
        shapeToDrawn.draw();
    }
    drawAllShapes(new circle.Circle());
    drawAllShapes(new triangle.Triangle());
});
