import React from 'react'
import { graphql } from "gatsby"
import get from 'lodash/get'
import Helmet from 'react-helmet'
import BlogIndexPosts from '../components/BlogIndex'


export default class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, `props.data.site.siteMetadata.title`)
    const posts = get(this, `props.data.allMarkdownRemark.edges`)
    return <React.Fragment>
      <Helmet key="helmet" title={siteTitle} />
      <BlogIndexPosts key="blogIndexPosts" posts={posts} />
    </React.Fragment>
  }
}

export const IndexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            featured
            categories
            title
          }
        }
      }
    }
  }
`
