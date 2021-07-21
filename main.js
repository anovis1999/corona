// import {addTableData} from 'main.html'
const onSubmit = (fullName,daysForBidud,email) =>{
    if(validateEmail(email)===true && validateDays(daysForBidud)===true){

        let nowDate = new Date()
        nowDate.setDate(nowDate.getDate()+14)
        let table = document.getElementById("myTable");
        let row = table.insertRow();
        let rowId = row.rowIndex
        row.id=rowId

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        
        cell1.innerHTML = rowId
        cell2.innerHTML = fullName;
        cell3.innerHTML = nowDate;
        cell4.innerHTML = email;
        cell5.innerHTML = `<button onClick="deleteFromTable(${rowId})">הוצא מבידוד</button>`;
    }
   else{
       alert("form not valid")
   }
    
}

const validateDays = (daysForBidud) =>{
    if(daysForBidud!==""&&daysForBidud>=0&&daysForBidud<=14){
        console.log(daysForBidud)
        return true
    }
    else{
        return false
    }
}

const validateEmail = (email) =>{
    if(email.includes('.')&&(email.includes("com")||email.includes("co.il"))){
        return true
    }
    
    else{
        return false
    }
}

const deleteFromTable = (index) =>{
    var row = document.getElementById(index);
    row.parentNode.removeChild(row);
}