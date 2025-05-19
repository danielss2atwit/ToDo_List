import React, {useState} from 'react'
function ToDoList(){
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");
    
    function handleInputChange(e){
        setNewTask(e.target.value);

    }
    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...t,newTask]);
            setNewTask("");
    }
        
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);

    }
    function handleUpTask(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }



    }
    function handleDownTask(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }


    }

    
return(
<div className = "todo-list">
    <h1>To-Do List</h1>
    <div>
        <input type="text" placeholder="Enter a task.." value={newTask}
                onChange={handleInputChange}/>
        <button className="addButton"
                onClick = {addTask}>
            Add
        </button>
    </div>
    <ol>
        {tasks.map((task,index)=>
            <li key={index}>
                <span className = "text">
                    {task}
                </span>
                <button className="deleteButton" 
                            onClick = {() => deleteTask(index)}
                            >Delete</button>
                <button className="moveButton" 
                        onClick = {() => handleUpTask(index)}
                        >👆</button>
                <button className="moveButton" 
                        onClick = {() => handleDownTask(index)}
                        >👇</button>
            </li> )}
    </ol>
    

    
</div>
);
}
export default ToDoList