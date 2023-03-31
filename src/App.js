import React from "react";
import './App.scss';
import TaskInput from "./components/TaskInput";
import Header from "./components/Header";
import Task from "./components/Task";

function App() {
    const [text, setText] = React.useState('')
    const [tasks, setTask] = React.useState([])

    const addToListTasks = (text) => {
        if(text) {
            const newTasks = [...tasks, text]
            setTask(newTasks)
            setText('')
        }
    }

    const removeTask = (task) => {
        const result = tasks.filter((item) => item !== task)
        setTask(result)
    }

   return (
    <div className="container">
        <Header />
        <TaskInput text={text} setText={setText} addToListTasks={addToListTasks}/>
        {
            tasks.map((task,index) => (
                <Task key={index}  task={task} removeTask={removeTask}/>
            ))
        }
    </div>
  );
}

export default App;
