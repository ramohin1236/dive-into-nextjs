import React from 'react'

const BlogDetails = ({params}) => {  
    console.log(params)
    return (
    <div>Blog Details for <span className='text-red-500 font-bold text-2xl'>{params.id}</span></div>
  )
}

export default BlogDetails