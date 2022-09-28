import React from 'react'
import {Link} from 'react-router-dom'



function BlogCard({post, id}) {
  return (
    <div>
        <Link to={`/blog/${id}`}>
        <h3>{post.fields.title}</h3>
        </Link>
    </div>
  )
}

export default BlogCard