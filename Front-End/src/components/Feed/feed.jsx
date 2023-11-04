import { useEffect, useState } from 'react'
import Post from '../Post/post'
import Share from '../Share/share'
import './feed.css'
import axios from 'axios';


export default function Feed({username}) {
  const [Posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = username
      ? await axios.get("http://localhost:8000/api/posts/profile/" + username)
       :await axios.get("http://localhost:8000/api/posts/timeline/64f1dd58291b584184d2085c");
      setPosts(res.data.data);
    }
    fetchPosts()
  },[username])

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
          {Posts.map((p) => (
            <Post key={p._id} post={p}/>
          ))}       
      </div>
    </div>
  )
}
