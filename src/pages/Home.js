import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import PostGrid from '../components/postGrid/PostGrid'



function Home() {
  return (
    <section className='wrapper'>
    <Sidebar />
    <PostGrid />
    </section>
  )
}

export default Home