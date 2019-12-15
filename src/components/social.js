/**
 * Social component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const Social = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata
  return (
    <div style={{ clear: "both" }}>
      <div style={{ float: "left" }}>
        <a
          href={`https://twitter.com/${social.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{" "}
        &bull;{" "}
        <a
          href={`https://github.com/${social.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </div>
      <div style={{ float: "right" }}>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
          rss
        </a>
      </div>
    </div>
  )
}

export default Social
