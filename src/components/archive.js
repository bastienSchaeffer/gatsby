/**
 * Archive component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from 'styled-components'

const ArchiveList= styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  a{
    font-family: sans-serif;
    font-size: .8rem;
    text-decoration: underline;
    color: #524763;
  }
`;

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(sort:{
    order: DESC
    fields: [frontmatter___date]
  }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ArchiveList>
          {
            data.allMarkdownRemark.edges.map(item => (
              <li key={item.node.frontmatter.slug}>
                <Link to={`/posts/${item.node.frontmatter.slug}`}>
                  {item.node.frontmatter.title}
                </Link>
              </li>
            ))
          }
        </ArchiveList>
      </aside>
    </>
  )
}

export default Archive
