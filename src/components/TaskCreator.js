import React, {useState} from "react";

const TaskCreator = () => {

    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem('task', newTaskName)
      setNewTaskName('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter a new task"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            />
            <button>Save Task </button>
      </form>
    );
}

export default TaskCreator