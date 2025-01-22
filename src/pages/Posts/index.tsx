import { PostInfo } from "../../components/Post-info"
import { CodeContent, PostContent } from "./styles"

export function Posts() {
  return (
    <>
      <PostInfo />

      <PostContent>
        <p>
          <strong>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </strong>
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </p>

        <span>
          <a href="">Dynamic typing</a>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </span>

        <CodeContent>
          <div>
            
          </div>
          <div></div>
          <div></div>
        </CodeContent>
      </PostContent>
    </>
  )
}
