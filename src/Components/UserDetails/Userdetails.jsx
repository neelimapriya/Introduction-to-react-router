import { useLoaderData } from "react-router-dom";


const Userdetails = () => {
    const user =useLoaderData();
    const {name,website,username} =user;
    return (
        <div>
            <h2>Details about Users: {name}</h2>
            <h4>Website: {website}</h4>
            <h4>UserName: {username}</h4>
        </div>
    );
};

export default Userdetails;