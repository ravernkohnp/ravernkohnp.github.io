// JavaScript source code

function addInfo() {
    var values = new Array();
    values = [document.getElementById('type').value, document.getElementById('impact').value, document.getElementById('description').value];

    var effecttable = document.getElementById('EffectTable');

    var tbody = document.createElement("tbody");

    var tr = document.createElement("tr");

    for (var j = 0; j < values.length; j++) {
        var td = document.createElement("td");
        var txt = document.createTextNode(values[j]);
        td.appendChild(txt);
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
    effecttable.appendChild(tbody);
    window.alert("Your submission has been received!")
}
