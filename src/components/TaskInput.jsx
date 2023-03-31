import React from "react";
import plus from "../assets/plus.svg";

const TaskInput = ({text, setText, addToListTasks}) => {

    return(
        <div className="taskInput">
            <input maxLength="50" className="input" value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter task text"/>
            <button className="button" onClick={() => addToListTasks(text)}>
                <img className="plus" src={plus} alt="plus"/>
            </button>
        </div>
    )
}

export default TaskInput;