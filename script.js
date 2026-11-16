
function insert_Row() {

    let newrow = document.createElement("tr");

    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");

    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";

    newrow.appendChild(cell1);
    newrow.appendChild(cell2);

    let table = document.getElementById("sampleTable");

    // Insert before the first table row
    table.insertBefore(newrow, table.rows[0]);

}

