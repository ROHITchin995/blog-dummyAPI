import React, { useEffect, useState } from 'react'
import '../App.css'
export const Home = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [posts, setPosts] = useState();


  useEffect(() => {
    getPost()
  },[])
  

  const getPost=()=>{
    fetch(`https://dummyapi.io/data/v1/post?page=${page}&limit=${limit}`,{
      method: 'GET',
      headers:{
        'app-id':'63e5f4c8bf0e4936c8907d26'
      }
    }).then(response => response.json())
    .then(data=>{
      setPosts(data)
      console.log(data)
    })

  }

  return (
    <div className='post-container'>
    { posts && 
   posts.data.map((post, index)=>(
    <div key={index} className="post">
      <div className='owner-details'>
      <img className='owner-image' src={post.owner.picture} alt={post.owner.firstName} />
      <div className='owner-name'>
     { post.owner.title}.{ post.owner.firstName}
      </div>
     <div>
     {post.publishDate.substring(0, 10)} {post.publishDate.substring(11,19)}
     </div>
      </div>
      <div className='image-details-outer'>
      <img className='post-image' src={post.image} alt={post.text} />
      <div className='post-details'>
      <span>
        {post.text}
      </span>
      <div>
        {post.tags}
      </div>
      <div>
        {post.likes}
      </div>
      </div>
      
      </div>
    </div>
   )
   )
    }
    </div>
  )
}
