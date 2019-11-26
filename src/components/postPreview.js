import React from 'react'
import { Link } from 'gatsby'

const PostPreview = ({ post }) => {
  return (
    <article className='post-preview'>
      <div className='heading'>
        <h1><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></h1>
        <p>{post.frontmatter.date}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </article>
  )
}

export default PostPreview
