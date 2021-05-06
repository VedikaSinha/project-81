function getPara1() {

    var inputs = [];
    for (i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("div1_inputbox" + i).value);
    }

    document.getElementById("showPara1").innerHTML = inputs.join(". ");

}

function getPara2() {

    var inputs = [];
    for (i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("div2_inputbox" + i).value);
    }

    document.getElementById("showPara2").innerHTML = inputs.join(". ");

}