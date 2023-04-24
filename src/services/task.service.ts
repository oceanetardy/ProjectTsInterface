import Task from "../types/Task";
import User from "../types/User";

const getTask = async ():Promise<Task[]>=>{
    const response = await fetch('http://localhost:8080/tasks');
    const tasks:Task[]  = await response.json();
    return tasks

}
const getTaskId = async (id : any):Promise<Task>=>{
    const response = await fetch('http://localhost:8080/tasks/' + id);
    const task : Task= await response.json();
    return task

}


const getUserTasks = async (id: string) => {

    try {

        const response = await fetch('http://localhost:8080/users/'+id+'/tasks');
        const tasks = await response.json();

        return tasks;

    }catch (error) {

        console.log(error)

    }

}

const addTask = async (user : User)=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    try {
        const response =  await fetch('http://localhost:8080/tasks', requestOptions);
        const taskSave = await response.json();
        return taskSave;
    } catch(e) {
        console.log(e)
    }


}

const updateTask = async (task : Task)=>{
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    };
    try {
        console.log(task)
        const response =  await fetch('http://localhost:8080/tasks/'+task._id, requestOptions);
        const taskSave = await response.json();
        return taskSave;
    } catch(e) {
        console.log(e)
    }


}
export {getTask, addTask, getUserTasks, updateTask, getTaskId}