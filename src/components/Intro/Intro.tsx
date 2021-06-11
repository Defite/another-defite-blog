import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { introContainer, introTitle, introText } from "./intro.module.css"

const Intro: React.FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query IntroQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            intro
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className={introContainer}>
      <h1 className={introTitle}>Hi! I'm {author.name}. <br /> {author.summary}</h1>

      {author.intro.map((text) => <p className={introText} dangerouslySetInnerHTML={{__html: text }} />)} 
    </div>
  )
}

export default Intro
