import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,email,phone}=user;
    const userStyle={
        border:'2px solid red',
        padding:'4px',
        borderRadius:'20px',
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p> Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`${id}`}>Show Details</Link>
        </div>
    );
};
 
User.propTypes = {
    user:PropTypes.string,
}
export default User;