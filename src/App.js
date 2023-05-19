import './App.css';
import PostList from './feature/post/PostsList';
import AddPostForm from './feature/post/AddPostForm';

function App() {
  return (
    <div className="App">
      <AddPostForm />
    <PostList />
    </div>
  );
}

export default App;
