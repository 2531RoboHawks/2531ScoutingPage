const tbody = document.getElementById("tbody");
const tr = document.getElementsByClassName("tr");


let timeRow = document.getElementById("time");
let matchRow = document.getElementById("matchNumber");
let rowCount = 1;
removeRow
function addRow(){
    tbody.innerHTML += `
    <tr class="tr">
        <td class = "time">
            <input class="timeInput" id="timeInput_${rowCount}" type="time">
        </td>
        <td class = "matchVideo" id="matchVideo_${rowCount}">
            <a href="">link</a>
        </td>
        <td class = "matchNumber">
            <input class="matchInput" id="matchInput_${rowCount}" type="number">
        </td>
        <td class = "redAlliance" href="">
            <input class="redInput" id="red1_${rowCount}" type="number">
        </td>
        <td class = "redAlliance">
            <input class="redInput" id="red2_${rowCount}" type="number">
        </td>
        <td class = "redAlliance">
            <input class="redInput" id="red3_${rowCount}" type="number">
        </td>
        <td class = "blueAlliance">
            <input class="blueInput" id="blue1_${rowCount}" type="number">
        </td>
        <td class = "blueAlliance">
            <input class="blueInput" id="blue2_${rowCount}" type="number">
        </td>
        <td class = "blueAlliance">
            <input class="blueInput" id="blue3_${rowCount}" type="number">
        </td>
    </tr>`;
    rowCount++;
}

function removeRow(){
    if(tr.length > 1){
        let currentChild = tr[tr.length - 1];
        console.log(currentChild.parentNode.removeChild(currentChild));
        rowCount--;
    }
}

function saveInput() {
    for(let i = 0; i < tr.length; i++){
        let timeInput = document.getElementById("timeInput_"+i).value;
        timeInput.innerHTML = timeInput;
        console.log(timeInput);
    }
}