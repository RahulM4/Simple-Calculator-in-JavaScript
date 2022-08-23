function valueButton(e){
    calculator.screen.value+=e.value;
}
function Clear()
{
    calculator.screen.value=null;

}
function Backspace() {
    calculator.screen.value=calculator.screen.value.slice(0, calculator.screen.value.length-1);
}
function Calculateval()
{
    calculator.screen.value=eval(calculator.screen.value);
}

