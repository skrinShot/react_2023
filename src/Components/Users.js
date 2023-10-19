import {User} from "./User";

const users = [
    {id:1,name: 'max', age:15},
    {id:2,name: 'kira', age:23},
    {id:3,name: 'dima', age:42},
    {id:4,name: 'olga', age:34},
]
const Users = () => {
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};