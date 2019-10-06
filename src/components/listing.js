import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"


const Post= styled.article`
  box-shadow: 0px 3px 10px rgba(.25, 17, 34, 0.5);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;

  a {
    color: black;
    text-decoration: none;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    font-size: .8rem;
  }

  .read-more {
    font-family: sans-serif;
    font-size: .8rem;
    text-decoration: underline;
    color: #524763;
  }
`;

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit:20
      sort:{
    		order: DESC
    		fields: [frontmatter___date]
  }) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

const Listing = () => {
  const data = useStaticQuery(LISTING_QUERY)
  return (
    <div>
      {
        data.allMarkdownRemark.edges.map(edge =>
          <Post key={edge.node.frontmatter.slug}>
            <Link to={`/posts${edge.node.frontmatter.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
            </Link>
            <p>{edge.node.frontmatter.date}</p>
            <p>{edge.node.excerpt}</p>
            <Link className="read-more" to={`/posts${edge.node.frontmatter.slug}`}>Read more</Link>
          </Post>
        )
      }
    </div>
  )
}

export default Listing
