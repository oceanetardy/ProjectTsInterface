import Task from "../types/Task";

const getTask = async ():Promise<Task[]>=>{
    const response = await fetch('http://localhost:8080/tasks');
    const tasks:Task[]  = await response.json();
    return tasks

}

export {getTask}