import User from "../types/User";

const getUsers = async ():Promise<User[]>=>{
    const response = await fetch('http://localhost:8080/users');
    const users:User[]  = await response.json();
    return users

}


const addUser = async (user : User)=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    try {
        const response =  await fetch('http://localhost:8080/users', requestOptions);
        const userSave = await response.json();
        return userSave;
    } catch(e) {
        console.log(e)
    }


}



export {getUsers, addUser}