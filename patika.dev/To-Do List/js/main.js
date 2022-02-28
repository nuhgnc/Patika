const addBtn = document.getElementById('addBtn')
const myInput = document.querySelector('#myInput') // input:text alanının içindeki veriyi aldık
let todos = [];

addBtn.addEventListener('click', function(){
    if( myInput.value != ""){
        let new_todo = {
            todo:myInput.value,
            completed:false,
            id:todos.length + 1
        }
    
    todos.push(new_todo)

    localStorage.setItem('todos', JSON.stringify(todos));
    render();
    }
    render();
})

function getitemstodos (){
    const parsed_todos = localStorage.getItem('todos')
    if(parsed_todos){
    todos = JSON.parse(parsed_todos)
    render();
    
        
    } 
}
getitemstodos(); 

function SetStorageItems(){
    localStorage.setItem('todos', JSON.stringify(todos));
}

function render(){
    let ul = document.getElementById('myUL')
    ul.innerHTML = "";
    todos.forEach(eleman =>{
        let span = document.createElement('span');
        let li = document.createElement("li");
        li.innerHTML = eleman.todo
        span.setAttribute ('class','close')
        span.innerText = 'x'
        ul.appendChild(li)
        li.appendChild(span)
        
       
    li.addEventListener('click', renderComplete = ()=>{
        if(eleman.completed == false){
            eleman.completed = true
            li.setAttribute('class', 'checked')
            SetStorageItems();

        }else{
            eleman.completed = false 
            li.setAttribute('class', '')
            console.log(eleman.completed)
            SetStorageItems();
        }
        
    
    })
    span.addEventListener('dblclick', function deleteTodo(){
        
    

    })
    })

}










