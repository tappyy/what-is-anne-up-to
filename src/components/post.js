import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'

const Post = ({ post }) => {
  return (
    <article className='post-preview'>
      <div className='heading'>
        <h1>{post.frontmatter.title}</h1>
        <p>{moment(post.frontmatter.date, "DD-MM-YY").fromNow()}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </article>
  )
}

export default Post
