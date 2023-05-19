import { useSelector } from 'react-redux'
import { selectAllPosts } from './postSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import './Post.css'
import PostImg from './PostImg'

const PostList =() => {
    const posts  = useSelector(selectAllPosts)
    
    const orderedPosts = posts.slice().sort((a, b)=> b.date.localeCompare(a.date))
    
    const renderedPosts = orderedPosts.map(post =>(
        
        <article  key={post.id}>
          <div className='User-img'>
          {/* <rostImg />  */}
            <PostImg userId={post.name}/>
           </div>
            <a className='link'
            href='#'> 
            {post.nickname}</a>
            <p> {post.content.substring(0, 100)}</p>
            
            <p className='postCredit'> 
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
            </p>
            <div className='rey_photo'> 
            <img src={post.photoPost} alt={post.nickname}></img>
                </div>
            <div className='reaction_wrap'> 
            <ReactionButtons post={post} />
            </div>
        </article>
    ))
    return(
        <section >
           <div className='contact_wrapper'> 
            <h2> Posts </h2>
            {renderedPosts}
           </div> 
           
        </section>
    )
}
export default PostList