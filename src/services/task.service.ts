import Task from "../types/Task";
import User from "../types/User";

const getTask = async ():Promise<Task[]>=>{
    const response = await fetch('http://localhost:8080/tasks');
    const tasks:Task[]  = await response.json();
    return tasks

}

// const getTaskByUserId = async (userid : any):Promise<Task[]>=>{
//     const response = await fetch('http://localhost:8080/users/'+ userid + '/tasks');
//     const tasks:Task[]  = await response.json();
//     return tasks
//
// }

//GET request to get all tasks by user
//GET request to get all tasks by user
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


export {getTask, addTask, getUserTasks}