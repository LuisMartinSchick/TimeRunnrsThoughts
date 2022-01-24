import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../../components/layout'
import {MDXRenderer} from "gatsby-plugin-mdx";

const BlogPost = ({data}) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>Posted: {data.mdx.frontmatter.date}</p>
            <p>By: {data.mdx.frontmatter.author}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost