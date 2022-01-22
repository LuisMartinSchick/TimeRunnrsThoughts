import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer} from "gatsby-plugin-mdx";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Thoughts">
            <ul>
                {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                            <h2>{node.frontmatter.title}</h2>
                            <p>Posted: {node.frontmatter.date}, Updated: {node.parent.modifiedTime}</p>
                            <p>By {node.frontmatter.author}</p>
                            <MDXRenderer>
                                {node.body}
                            </MDXRenderer>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          author
        }
        id
        body
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`

export default BlogPage