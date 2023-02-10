import React, { useEffect, useState } from 'react'

export const Home = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);


  useEffect(() => {
    getPost()
  })
  

  const getPost=()=>{
    fetch(`https://dummyapi.io/data/v1/post?page=${page}&limit=${limit}`,{
      method: 'GET',
      headers:{
        'app-id':'63e5f4c8bf0e4936c8907d26'
      }
    }).then(response => response.json())
    .then(data=>{
      console.log(data)
    })

  }


  return (
    <div className='post-container'>
      
    </div>
  )
}
