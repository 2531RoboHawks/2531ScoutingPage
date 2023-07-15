const tbody = document.getElementById("tbody");
const tr = document.getElementsByClassName("tr");


let timeRow = document.getElementById("time");
let matchRow = document.getElementById("matchNumber");
let rowCount = 1;


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
        let desigRow = tr[tr.length - 1];
        console.log(desigRow.parentNode.removeChild(desigRow));
        rowCount--;
    }
}

function insertLink(linkID) {
    let ourLink = document.querySelector(`#${linkID}`);
    let askLink = prompt("insert video link here:");
    ourLink.innerHTML = askLink;
    // ourLink.href = askLink;
    console.log(askLink);
}

function saveInput() {
    for(let i = 0; i < tr.length; i++){
        let timeInput = document.getElementById("timeInput_"+i).value;
        timeInput.innerHTML = timeInput;
        console.log(timeInput);
    }

    for(let i = 0; i < tr.length; i++){
        let matchInput = document.getElementById("matchInput_"+i).value;
        matchInput.innerHTML = matchInput;
        console.log(matchInput);
    }

    
}