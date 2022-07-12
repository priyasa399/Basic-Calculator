function display(x) {
    document.getElementById("result").value += x.value;
}

function calculate() {
    var exp = document.getElementById("result").value;
    var res = eval(exp);
    document.getElementById("result").value = res;
}

function clear() {
    document.getElementById("result").innerHTML = "";
}