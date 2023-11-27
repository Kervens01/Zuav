// Fonction de recherche dans le tableau
function searchTable() {
    const input = document.getElementById("searchInput").value.toUpperCase();
    const table = document.getElementById("dataTable");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let found = false;

        for (let j = 0; j < cells.length; j++) {
            const cell = cells[j];
            if (cell) {
                const textValue = cell.textContent || cell.innerText;
                if (textValue.toUpperCase().indexOf(input) > -1) {
                    found = true;
                    break;
                }
            }
        }

        if (found) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

// Fonction pour ajouter une nouvelle ligne
function addRow() {
    const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cellCount = table.rows[0].cells.length;

    for (let i = 0; i < cellCount; i++) {
        const newCell = newRow.insertCell(i);
        newCell.contentEditable = true;
    }

    const actionCell = newRow.insertCell(cellCount);
    actionCell.innerHTML = '<button onclick="editRow(this)" class="yellow">Modifier</button>' +
        '<button onclick="deleteRow(this)" class="red">Supprimer</button>';
}

// Fonction pour supprimer les lignes sélectionnées
function deleteSelectedRows() {
    const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    const checkboxes = table.querySelectorAll("input[type='checkbox']");

    for (let i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            table.deleteRow(i);
        }
    }
}

// Fonction pour modifier la ligne sélectionnée
function editSelectedRow() {
    const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const checkbox = rows[i].querySelector("input[type='checkbox']");
        if (checkbox && checkbox.checked) {
            const cells = rows[i].getElementsByTagName("td");

            for (let j = 0; j < cells.length; j++) {
                cells[j].contentEditable = true;
            }
        }
    }
}
