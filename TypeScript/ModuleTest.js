"use strict";
exports.__esModule = true;
var circle = require("./Circle2");
var triangle = require("./Triangle2");
function drawAllShapes(shapeToDrawn) {
    shapeToDrawn.draw();
}
drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());
