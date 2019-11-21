// 1. Import the `remarkForm` HOC
import { liveRemarkForm } from 'gatsby-tinacms-remark'
import { graphql } from 'gatsby'
import React from 'react'
import { Wysiwyg } from '@tinacms/fields'
import { TinaField } from '@tinacms/form-builder'

function BlogPostTemplate({ data, isEditing, setIsEditing }) {
  return (
    <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
      <section class="content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></section>
      <button onClick={() => setIsEditing(p => !p)}>{isEditing ? 'Preview' : 'Edit'}</button>
    </TinaField>
  )
}

// 2. Wrap your template with `remarkForm`
export default liveRemarkForm(BlogPostTemplate, { queryName: 'myContent' })

// 3. Add the required fields to the GraphQL query
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    myContent: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      ...TinaRemark
    }
  }
`