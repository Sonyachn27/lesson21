import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectAllUsers } from "../Users/usersSlice";

import { postAdded } from "./postSlice";
import  PostImg  from './PostImg'
const AddPostForm = () => {
    const dispatch = useDispatch();
    
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [userNick, setUserNick] = useState('')
    const [photo, setPhoto] = useState([])
    const [postPhoto, setPostPhoto] = useState([])
   
    const users = useSelector(selectAllUsers)

    
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)
    const onNickChanged = e => setUserNick(e.target.value)
    
    const onImageChanged = e => setPostPhoto(URL.createObjectURL(e.target.files[0]))
   

const onSavePostClicked = () => {
    
    if(content) {
        dispatch(
            postAdded (content, userId, userNick, photo, postPhoto)
        )
        setContent('')
        setUserNick('')
        setPostPhoto([])
        setPhoto([]) 
    }
}

const canSave = Boolean(content) && Boolean(userId) 
// const onChangeUserPhoto = 
    const userOptions = users.map(user=>(
        <option key={user.id} value={user.id}> 
       {user.name}  
        </option>
    ))
    const userNickOptions = users.map(user=>(
        <option key={user.id} > 
       {user.nickname}  
        </option>
    ))
    
        return(
            <section>
    <h2> Add a New Post</h2>
    <form>
    <label htmlFor="postAuthor"> Author:</label>
    <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {userOptions}     
    </select>
    <select id="postNickAuthor" value={userNick} onChange={onNickChanged}>
            <option value=""></option>
            {userNickOptions}     
    </select>

    <label htmlFor="postContent">Content:</label>
    <textarea
    id="postContent"
    name="postContent"
    value={content}
    onChange={onContentChanged}
    />

    <input
    type="file"
    onChange={onImageChanged}
    />

    <button 
    type="button" 
    disabled={!canSave}
    onClick={onSavePostClicked}> Save Post </button>
    </form>
            </section>
        )
    };

    export default AddPostForm;