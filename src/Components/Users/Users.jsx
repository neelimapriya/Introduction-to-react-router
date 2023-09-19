import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './User.css'

const Users = () => {
    const users=useLoaderData();
    // state--->data
    // state -->loader
    // use effect
    // fetch--> state set -->set state
    return (
        <div>
            <h2>Our users: {users.length}</h2>
            <p>Fantastic and vodro users</p>
            <div className="user">
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;