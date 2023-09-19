

const Post = ({post}) => {
    const {id, title,body}=post;
    const postStyle={
        border:'2px solid blue',
        padding:'4px',
        borderRadius:'20px',
    }
    return (
        <div style={postStyle}>
            <h4>Post Id: {id}</h4>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Post;