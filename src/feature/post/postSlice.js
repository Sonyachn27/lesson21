import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'
import PostImg from "./PostImg";
const initialState = [
    { id:'1', 
    photo:"https://i.pinimg.com/736x/eb/c3/48/ebc348d81886de5912ac88c4c8dd6725.jpg",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    nickname: "@dart_vader",
    photoPost: "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/f443c983-8ee2-436c-9dca-2cb5bab286c9/daisy-ridley-will-reprise-her-role-as-rey-skywalker-in-new-star-wars-movie.jpg",
    date: sub(new Date(), {minutes:10}).toISOString(),
    reactions:{
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
    },
    {
    id:'2', 
    photo: "https://images.photowall.com/products/62286/princess-leia-carrie-fisher.jpg?h=699&q=85",
    content: "The more I say....",
    nickname: "@leia_skywalker",
   date: sub(new Date(), {minutes:5}).toISOString(),
   photoPost: "https://i.ytimg.com/vi/oAMaSbYUSqM/maxresdefault.jpg",
   reactions:{
    thumbsUp: 0,
    wow: 0,
    heart: 0,
    rocket: 0,
    coffee: 0
}
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare( content, userId, nickname, photo, photoPost) {
                return {
                    payload: {
                        id: nanoid(),
                        content,
                        photo: <PostImg />,
                        nickname,
                        date: new Date().toISOString(),
                        userId,
                        photoPost,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }})


export const selectAllPosts = (state) => state.posts;


export const { postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer