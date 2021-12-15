var list = document.querySelector("ul");
var button = document.querySelector("button");
var input = document.querySelector("input");
var arryList = []


function listTask(){

    list.innerHTML =""
    
    for(task of arryList){

        const lists = document.createElement("input");
        const li = document.createElement("li")
        const task_ = document.createTextNode(task);
        const btnDelete = document.createElement("a");
        const textX = document.createTextNode("X");
        const textXs = document.createTextNode(" ED");
        const btnEdit = document.createElement("a");
        const positionIndex = arryList.indexOf(task);
 
        lists.setAttribute("id", `${positionIndex}`)
            

      //  a.setAttribute("onclick", 'deleteTask(${positionIndex})`)

      btnDelete.addEventListener("click", function(){
            deleteTask(positionIndex)
        })

        btnEdit.addEventListener("click", function(){
            if(lists.disabled == true){
                 
                lists.disabled = false;
                lists.setAttribute("value", " ")
                
                 
            }else{
                editTask(lists, positionIndex)
                lists.disabled = true;
            }
          
        })

 
 

        lists.disabled = true;
        lists.setAttribute("value", task)
       
        li.appendChild(lists)
        list.appendChild(li)
        li.appendChild(btnDelete)
        li.appendChild(btnEdit)
        btnEdit.appendChild(textXs)
        btnEdit.setAttribute("href", "#")
        btnDelete.appendChild(textX)
        btnDelete.setAttribute("href", "#")
 
         
    }
}

function editTask(inputS,index){
    input.setAttribute("value", inputS.value)
    arryList.splice(index, index, inputS.value)
    console.log(inputS.value)
    
}

 

function deleteTask(position){
    arryList.splice(position, 1)
    listTask()
}
 

function addList(){

    const task = input.value;
    if(task.length >= 2){
       // console.log( " result 1 : " + task.length)
        arryList.push(task);
        listTask()
    }
    
} 
button.addEventListener("click", function(){
    addList()
})