import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Post from "../components/post"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query AllPosts {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <section className='home-section'>
        <h1 className='emoji-anne'><span role='img' aria-label='anne emoji'>👩</span></h1>
        <h1 className='title'>Meet Anne.</h1>
        <p>Anne thinks my email is her email.</p>
        <p>Anne likes to buy clothes.</p>
      </section>
      <section className='posts-section'>
        {data.allMarkdownRemark.edges.map(({ node }) => <Post key={node.id} post={node} />)}
      </section>
    </Layout>
  )
}


export default IndexPage
