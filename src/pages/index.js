import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import PostPreview from "../components/postPreview"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query AllPosts {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date
            path
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
        <h1>Meet Anne.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officia reiciendis sint? Saepe minus culpa sunt ipsam reprehenderit. Delectus eaque, consequatur molestiae maxime sunt modi facere voluptatem maiores tempora laboriosam.</p>
      </section>
      <section className='posts-section'>
        {data.allMarkdownRemark.edges.map(({ node }) => <PostPreview key={node.id} post={node} />)}
      </section>
    </Layout>
  )
}


export default IndexPage
