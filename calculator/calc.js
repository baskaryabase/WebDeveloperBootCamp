var expression = ''
function onNumberClick(e) {
    console.log(e)
    expression = expression + e
    console.log(expression)
    document.getElementById('calc-display').innerHTML = expression
}
function onOperatorClick(e) {
    console.log(e)
    expression = expression + e
    console.log(expression)
    document.getElementById('calc-display').innerHTML = expression
}
function onEqualTo() {
    var result = eval(expression);
    expression = result
    console.log(result)
    document.getElementById('calc-display').innerHTML = result
}