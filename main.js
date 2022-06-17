number_1 = "";
number_2 = "";
input = "";
function addition()
{
    number_1 = parseInt(document.getElementById("input_1").value)
    number_2 = parseInt(document.getElementById("input_2").value)
    document.getElementById("output_label").innerHTML = number_1 + number_2
}
function substraction()
{
    number_1 = parseInt(document.getElementById("input_1").value)
    number_2 = parseInt(document.getElementById("input_2").value)
    document.getElementById("output_label").innerHTML = number_1 - number_2
}
function multiply()
{
    number_1 = parseInt(document.getElementById("input_1").value)
    number_2 = parseInt(document.getElementById("input_2").value)
    document.getElementById("output_label").innerHTML = number_1 * number_2
}
function divide()
{
    number_1 = parseInt(document.getElementById("input_1").value)
    number_2 = parseInt(document.getElementById("input_2").value)
    document.getElementById("output_label").innerHTML = number_1 / number_2
}