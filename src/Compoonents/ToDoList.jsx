import React, {useState} from "react";
import TodoItem from "./TodoItem";


function ToDoList(){
    const [tasks, setTasks] = useState([
        {
        id: 1,
        text: 'Doctor Appointment',
        completed: true
        },
        {
        id: 2,
        text: 'Meeting at School',
        completed: false
        }
        ]);
        
        const [text, setText] = useState('');
       function addTask(text) {
        const newTask = {
        id: Date.now(),
        text,
        completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
        }
       function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
        }
       function toggleCompleted(id) {
        setTasks(tasks.map(task => {
        if (task.id === id) {
        return {...task, completed: !task.completed};
        } else {
        return task;
        } 
        }));
        }
    return (
        <div className="TODO-LIST">
        {tasks.map(task => (
        <TodoItem  KEY={task.id} TASK={task}  DELETETASK={deleteTask}  TOGGLECOMPLETED={toggleCompleted} />
        ))}
       <input
        VALUE={text}
        ONCHANGE={E => setText(E.TARGET.VALUE)} 
        />
       <button ONCLICK={() => addTask(text)}>Add</button>
        </div>
        );
       
}



export default ToDoList
