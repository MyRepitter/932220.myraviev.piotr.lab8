const page = document.getElementById("dataTable");
const output = document.getElementById("YourData");
let k = 0;

function createElement(tagName, elementId, content) {
    const element = document.createElement(tagName);
    element.id = elementId;
    return element;
}

function pushString() {
    const row = createElement('div', 'row_' + k);
    row.className = 'row';

    const input1 = createElement('input', 'input1_' + k);
    row.appendChild(input1);

    const input2 = createElement('input', 'input2_' + k);
    row.appendChild(input2);

    const upButton = createElement('button', 'up_' + k);
    upButton.innerHTML = '&#8593;';
    upButton.onclick = () => {
        const currentRow = document.getElementById(row.id);
        const previousRow = currentRow.previousElementSibling;
        if (previousRow) {
            currentRow.parentElement.insertBefore(currentRow, previousRow);
        }
    };
    row.appendChild(upButton);

    const downButton = createElement('button', 'down_' + k);
    downButton.innerHTML = '&#8595;';
    downButton.onclick = () => {
        const currentRow = document.getElementById(row.id);
        const nextRow = currentRow.nextElementSibling;
        if (nextRow) {
            currentRow.parentElement.insertBefore(nextRow, currentRow);
        }
    };
    row.appendChild(downButton);

    const deleteButton = createElement('button', 'del_' + k);
    deleteButton.innerHTML = '&#10006;';
    deleteButton.onclick = () => {
        const currentRow = document.getElementById(row.id);
        currentRow.remove();
    };
    row.appendChild(deleteButton);

    page.appendChild(row);
    k++;
}

function saveBoard() {
    const rows = document.querySelectorAll('.row');
    let tableContent = '{';

    rows.forEach((row, idx) => {
        const inputValue1 = row.querySelector('input[id^="input1_"]').value;
        const inputValue2 = row.querySelector('input[id^="input2_"]').value;

        tableContent += `"${inputValue1}":"${inputValue2}"`;
        if (idx !== rows.length - 1) { tableContent += ','; }
    });

    tableContent += '}';
    output.innerText = tableContent;
}

pushString();
