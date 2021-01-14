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