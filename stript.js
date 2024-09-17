let textField = document.getElementById("work");
let submit = document.getElementById("addBtn");
let arrVar= [];

let objStr = localStorage.getItem('datas'); //data comes in string type

//I've to give a if condition to check the data is null or not, because the perse mehod give error for null
if(objStr != null){
arrVar = JSON.parse(objStr); // to change string type to object
}

DisplayInfo();

submit.onclick=()=>{
   
    
      /* arrVar.push({'Todo':addVar});   */ //this part should have used in else part of edit part

    

    // edit part
    if(edit_id != null){
        arrVar[edit_id] = { 'Todo': textField.value };
        edit_id = null;
    }else{
        let addVar=textField.value;
        arrVar.push({'Todo':addVar}); 
    }

    
    saveInfo(arrVar);
    DisplayInfo();
    textField.value='';
}



function saveInfo(arrVar){
    let str= JSON.stringify(arrVar);
    localStorage.setItem('datas',str);
}


function DisplayInfo(){
    let statement="";
    arrVar.forEach((data,i)=>{
        statement+=
        `
         <tr>
                <th>${i+1}</th>
                <td>${data.Todo}</td>
                <td>
                <i class='fas fa-edit' style='font-size:20px' onclick='EditInft(${i})' ></i></i> 
                <i class='fas fa-trash' style='font-size:20px' onclick='DeleteInfo(${i})' ></i></i>
                </td>
        </tr>

        `
    })

    document.getElementById('list').innerHTML = statement;

}


function DeleteInfo(id){

    arrVar.splice(id,1);
    saveInfo(arrVar);
    DisplayInfo();

}



let edit_id = null;

function EditInft(id){
    edit_id = id;
    textField.value = arrVar[id].Todo;
     
}


