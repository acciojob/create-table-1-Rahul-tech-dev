function insert_Row() {
    //Write your code here
   
	
   let newrow=document.createElement("tr");
	let cell1=document.createElement("td");
	cell1.textContent="New Cell1";
	let cell2 = document.createElement("td");
    cell2.textContent = "New Cell2";
	let table=document.querySelector("#sampleTable");
	table.insertBefore(newrow,table.firstChild);
}
