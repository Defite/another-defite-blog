import * as React from "react"
import * as T from "./Posts.types"
import {
  postsList,
  postItem,
  postItemDate,
  postItemDescription,
  postItemLink
} from "./posts.module.css"
import { Link } from "gatsby"

const Posts: React.FunctionComponent<T.IPosts> = ({ items }) => {
  return (
    <section>
      <h2>Latest posts</h2>
      <ol className={postsList}>
        {items.map((post: T.IPost) => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className={postItem}
                itemScope
                itemType="http://schema.org/Article"
              >
                <span className={postItemDate}>{post.frontmatter.date}</span>

                <span>
                  <Link className={postItemLink} to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                  <p
                    className={postItemDescription}
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description,
                    }}
                    itemProp="description"
                  />
                </span>

                {/* <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section> */}
              </article>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default Posts
