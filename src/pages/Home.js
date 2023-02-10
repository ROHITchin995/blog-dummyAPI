import React, { useEffect, useState } from 'react'
import '../App.css'
export const Home = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [posts, setPosts] = useState();


  useEffect(() => {
    getPost()
  }, [])


  const getPost = () => {
    fetch(`https://dummyapi.io/data/v1/post?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'app-id': '63e5f4c8bf0e4936c8907d26'
      }
    }).then(response => response.json())
      .then(data => {
        setPosts(data)
        console.log(data)
      })

  }

  return (
  <div className='min-h-screen'>
    <div className='container py-12'>
    <div className='mb-16'>
      <div class="grid gap-4 grid-cols-1 grid-cols-2">
        <div class="bg-white rounded shadow p-4 overflow-hidden">
          <div class="flex mb-4 items-center"><img src="https://randomuser.me/api/portraits/med/men/51.jpg" class="rounded-full w-10 mr-4" alt="mr. Jozef Van Miert" />
            <div>mr. Jozef Van Miert<br /><small>Jun 26 2022 18:55:07</small></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="self-center"><img src="https://img.dummyapi.io/photo-1568480541687-16c2f73eea4c.jpg" class="object-cover w-full h-60" alt="hello oikm " /></div>
            <div class="self-center"><small class="mb-4">Jun 26 2022 18:55:07</small>
              <div class="mb-4">hello oikm </div>
              <div class="flex flex-wrap text-xs mb-4">
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">hello</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">hello world</div>
              </div>
              <div><img src="/img/like.svg" class="w-5 mr-2 float-left" alt="like" />3</div>
            </div>
          </div>
        </div>
      </div>




      {posts &&
        posts.data.map((post, index) => (
          <div key={index} className="post">
            <div>
              <img className='owner-image' src={post.owner.picture} alt={post.owner.firstName} />
              {post.owner.title}.{post.owner.firstName}
              <div>
                {post.publishDate.substring(0, 10)} {post.publishDate.substring(11, 19)}
              </div>
            </div>
            <img className='post-image' src={post.image} alt={post.text} />
            <div>
              {post.text}
            </div>
            <div>
              {post.tags}
            </div>
            <div>
              {post.likes}
            </div>
          </div>
        )
        )
      }
    </div>
    </div>
    </div>
  )
}
