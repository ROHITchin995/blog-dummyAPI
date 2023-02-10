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
    <div className='post-container'>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
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
        <div class="bg-white rounded shadow p-4 overflow-hidden">
          <div class="flex mb-4 items-center"><img class="rounded-full w-10 mr-4" alt="undefined. ABC Name" />
            <div>. ABC Name<br /><small>Jun 26 2022 17:04:29</small></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="self-center"><img src="https://img.dummyapi.io/photo-1568480541687-16c2f73eea4c.jpg" class="object-cover w-full h-60" alt="hello  222255" /></div>
            <div class="self-center"><small class="mb-4">Jun 26 2022 17:04:29</small>
              <div class="mb-4">hello 222255</div>
              <div class="flex flex-wrap text-xs mb-4">
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">world</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white"></div>
              </div>
              <div><img src="/img/like.svg" class="w-5 mr-2 float-left" alt="like" />0</div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded shadow p-4 overflow-hidden">
          <div class="flex mb-4 items-center"><img class="rounded-full w-10 mr-4" alt="undefined. ABC Name"/>
            <div>. ABC Name<br/><small>Jun 26 2022 16:39:01</small></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="self-center"><img src="https://img.dummyapi.io/photo-1548658146-f142deadf8f7.jpg" class="object-cover w-full h-60" alt="hhhhdddd  ok "/></div>
            <div class="self-center"><small class="mb-4">Jun 26 2022 16:39:01</small>
              <div class="mb-4">hhhhdddd ok </div>
              <div class="flex flex-wrap text-xs mb-4">
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">hello</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">world</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">hello world</div>
              </div>
              <div><img src="/img/like.svg" class="w-5 mr-2 float-left" alt="like"/>0</div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded shadow p-4 overflow-hidden">
          <div class="flex mb-4 items-center"><img class="rounded-full w-10 mr-4" alt="undefined. ABC Name"/>
            <div>. ABC Name<br/><small>Jun 26 2022 16:36:18</small></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="self-center"><img src="https://img.dummyapi.io/photo-1548658146-f142deadf8f7.jpg" class="object-cover w-full h-60" alt="hhhhkkkkkdddd fff"/></div>
            <div class="self-center"><small class="mb-4">Jun 26 2022 16:36:18</small>
              <div class="mb-4">hhhhkkkkkdddd fff</div>
              <div class="flex flex-wrap text-xs mb-4">
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">hello</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">world</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white"> hello world</div>
              </div>
              <div><img src="/img/like.svg" class="w-5 mr-2 float-left" alt="like"/>0</div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded shadow p-4 overflow-hidden">
          <div class="flex mb-4 items-center"><img src="https://randomuser.me/api/portraits/med/women/5.jpg" class="rounded-full w-10 mr-4" alt="miss. Margarita Vicente"/>
            <div>miss. Margarita Vicente<br/><small>May 24 2020 13:14:17</small></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="self-center"><img src="https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg" class="object-cover w-full h-60" alt="hello, this is test update"/></div>
            <div class="self-center"><small class="mb-4">May 24 2020 13:14:17</small>
              <div class="mb-4">hello, this is test update</div>
              <div class="flex flex-wrap text-xs mb-4">
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">asd</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">asdsd</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">asas</div>
              </div>
              <div><img src="/img/like.svg" class="w-5 mr-2 float-left" alt="like"/>10</div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded shadow p-4 overflow-hidden">
          <div class="flex mb-4 items-center"><img src="https://randomuser.me/api/portraits/med/men/59.jpg" class="rounded-full w-10 mr-4" alt="mr. Kaya Basoglu"/>
            <div>mr. Kaya Basoglu<br/><small>May 23 2020 18:25:22</small></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="self-center"><img src="https://img.dummyapi.io/photo-1576707064479-3139e7e8aace.jpg" class="object-cover w-full h-60" alt="yashu_official"/></div>
            <div class="self-center"><small class="mb-4">May 23 2020 18:25:22</small>
              <div class="mb-4">yashu_official</div>
              <div class="flex flex-wrap text-xs mb-4">
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">animal</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">canine</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">dog</div>
              </div>
              <div><img src="/img/like.svg" class="w-5 mr-2 float-left" alt="like"/>19</div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded shadow p-4 overflow-hidden">
          <div class="flex mb-4 items-center"><img src="https://randomuser.me/api/portraits/med/women/33.jpg" class="rounded-full w-10 mr-4" alt="ms. Vanessa Ramos"/>
            <div>ms. Vanessa Ramos<br/><small>May 23 2020 03:57:12</small></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="self-center"><img src="https://img.dummyapi.io/photo-1500879747858-bb1845b61beb.jpg" class="object-cover w-full h-60" alt="Dog in a forest at sunset dog in forest with sun r..."/></div>
            <div class="self-center"><small class="mb-4">May 23 2020 03:57:12</small>
              <div class="mb-4">Dog in a forest at sunset dog in forest with sun r...</div>
              <div class="flex flex-wrap text-xs mb-4">
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">dog</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">animal</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">golden retriever</div>
              </div>
              <div><img src="/img/like.svg" class="w-5 mr-2 float-left" alt="like"/>242</div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded shadow p-4 overflow-hidden">
          <div class="flex mb-4 items-center"><img src="https://randomuser.me/api/portraits/med/men/40.jpg" class="rounded-full w-10 mr-4" alt="mr. Kenneth Carter"/>
            <div>mr. Kenneth Carter<br/><small>May 22 2020 03:45:26</small></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="self-center"><img src="https://img.dummyapi.io/photo-1548658146-f142deadf8f7.jpg" class="object-cover w-full h-60" alt="front view of black and white puppy sitting on bro..."/></div>
            <div class="self-center"><small class="mb-4">May 22 2020 03:45:26</small>
              <div class="mb-4">front view of black and white puppy sitting on bro...</div>
              <div class="flex flex-wrap text-xs mb-4">
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">dog</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">grey</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">puppy</div>
              </div>
              <div><img src="/img/like.svg" class="w-5 mr-2 float-left" alt="like"/>112</div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded shadow p-4 overflow-hidden">
          <div class="flex mb-4 items-center"><img src="https://randomuser.me/api/portraits/med/men/56.jpg" class="rounded-full w-10 mr-4" alt="mr. Vaino Sakala"/>
            <div>mr. Vaino Sakala<br/><small>May 21 2020 12:33:58</small></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="self-center"><img src="https://img.dummyapi.io/photo-1558556249-076e42967a24.jpg" class="object-cover w-full h-60" alt="two puppies next to each other"/></div>
            <div class="self-center"><small class="mb-4">May 21 2020 12:33:58</small>
              <div class="mb-4">two puppies next to each other</div>
              <div class="flex flex-wrap text-xs mb-4">
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">dog</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">animal</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">canine</div>
              </div>
              <div><img src="/img/like.svg" class="w-5 mr-2 float-left" alt="like"/>27</div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded shadow p-4 overflow-hidden">
          <div class="flex mb-4 items-center"><img src="https://randomuser.me/api/portraits/med/women/18.jpg" class="rounded-full w-10 mr-4" alt="ms. Ann Mason"/>
            <div>ms. Ann Mason<br/><small>May 21 2020 07:40:33</small></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="self-center"><img src="https://img.dummyapi.io/photo-1556526588-a0bd9b5a42c3.jpg" class="object-cover w-full h-60" alt="two white dogs"/></div>
            <div class="self-center"><small class="mb-4">May 21 2020 07:40:33</small>
              <div class="mb-4">two white dogs</div>
              <div class="flex flex-wrap text-xs mb-4">
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">canine</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">dog</div>
                <div class="px-2 py-1 border mr-1 mb-1 rounded bg-pink-600 text-white">pet</div>
              </div>
              <div><img src="/img/like.svg" class="w-5 mr-2 float-left" alt="like"/>54</div>
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
  )
}
