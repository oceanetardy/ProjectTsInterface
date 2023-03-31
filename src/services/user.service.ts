import User from "../types/User";

const getUsers = async ():Promise<User[]>=>{
    const response = await fetch('http://localhost:8080/users');
    const users:User[]  = await response.json();
    return users

}

export {getUsers}