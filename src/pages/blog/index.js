import * as React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Thoughts">
            <ul>
                {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
                            </h2>
                            <p>Posted: {node.frontmatter.date}, Updated: {node.parent.modifiedTime}</p>
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
        slug
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