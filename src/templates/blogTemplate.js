// 1. Import the `remarkForm` HOC
import { remarkForm } from 'gatsby-tinacms-remark'
import { graphql } from 'gatsby'
import React from 'react'

function BlogPostTemplate(props) {
  return <h1>{props.data.markdownRemark.frontmatter.title}</h1>
}

// 2. Wrap your template with `remarkForm`
export default remarkForm(BlogPostTemplate, { queryName: 'myContent' })

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

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       html
//       frontmatter {
//         title
//         date
//         description
//       }
//       ...TinaRemark
//     }
//   }
// `