import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SkeletonArticle from '../SkeletonArticle'
const Posts = ({themehere}) => {
    const [posts , setPosts] = useState(null);
    useEffect(() => {
       setTimeout( async() =>{
          const resposts = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await resposts.json();
          setPosts(data);

       }, 5000)
    }, [])
  return (
    <div className='Posts'>
        <h1>Posts</h1>
   
    {posts && posts.map( post=>(
      <div className='Posts' key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
      </div>
    ))}
   {!posts && [1,2,3,4,5].map((n) => <SkeletonArticle key={n} theme={themehere} />)}
    </div>
  )
}

export default Posts