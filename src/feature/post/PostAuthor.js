import { useSelector } from "react-redux";
import { selectAllUsers } from "../Users/usersSlice";


const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)
    
    const author = users.find(user => user.id === userId);
   
    return (
<span className="author_name"> by {author ? author.name : 'Unknown author'}</span> 
    )
}
export default PostAuthor