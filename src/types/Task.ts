import User from "./User";

export default interface Task{
    _id : string ;
    user : string;
    email : string;
    name : string;
    detail : string;
    status : string;
    date : string;
}