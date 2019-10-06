import React, { Component } from 'react'
import Layout from "./layout"
import { graphql } from 'gatsby';

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;

    return (
      <Layout location={location}>
        <div>
          {/* <h1>{markdownRemark.frontmatter.title}</h1> */}
          <div dangerouslySetInnerHTML={{
            __html: markdownRemark.html
          }} />
        </div>
      </Layout>
    )
  }
}

// Slug is automatically passed from context specified in gatsby-node
export const query = graphql`
  query PostQuery($slug: String!){
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        slug
        date
      }
    }
  }
`
