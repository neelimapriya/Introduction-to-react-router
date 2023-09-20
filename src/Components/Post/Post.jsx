import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title,body}=post;

    const navigate = useNavigate();

    const postStyle={
        border:'2px solid blue',
        padding:'4px',
        borderRadius:'20px',
    }

    const handleShowDetails=()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4>Post Id: {id}</h4>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}> Post Details</Link>
            <Link to={`/post/${id}`}><button>details</button></Link>
            <button onClick={handleShowDetails}>Click to show details</button>
        </div>
    );
};

export default Post; 