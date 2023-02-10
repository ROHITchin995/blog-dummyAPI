import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './PostPage.css'



export const PostPage = () => {
  const { postid: selectedPost } = useParams();
  const [post, setPost] = useState()
  var moment = require('moment');
  useEffect(() => {
    fetchPost()
  }, [])


  const fetchPost = () => {
    fetch(`https://dummyapi.io/data/v1/post/${selectedPost}`, {
      method: 'GET',
      headers: {
        'app-id': '63e5f4c8bf0e4936c8907d26'
      }
    }).then(response => response.json())
      .then(data => {
        setPost(data)
      })
  }

  return (post &&
    <div className='container my-5'>
      <div className="bg-white rounded shadow p-4 overflow-hidden" >
        <div className="singlePostFlex mb-4 items-center"><img src={post.owner.picture} className="rounded-full singlePostImage w-10 mr-4" alt={post.owner.firstName} />
          <div>{post.owner.title}. {post.owner.firstName} {post.owner.lastName}<br /><small>{moment(post.publishDate).format('MMMM DD YYYY HH:mm:ss')}</small></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="self-center"><img src={post.image} className="object-cover w-full h-60" alt={post.text} /></div>
          <div className="self-center"><small className="mb-4">{moment(post.publishDate).format('MMMM DD YYYY HH:mm:ss')}</small>
            <div className="mb-4">{post.text} </div>
            <div className="flex flex-wrap text-xs mb-4">
              {
                post.tags.map((tag, index) => (
                  <div key={index} className="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">{tag}</div>
                ))
              }
            </div>
            <div><img src="https://dummyapi.io/img/like.svg" className="w-5 mr-2 float-left" alt="like" />{post.likes}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
