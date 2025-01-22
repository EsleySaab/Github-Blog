import { Link } from "react-router-dom"
import { IssuesCards, IssuesContainer, PostButton } from "./styles"

export function Issues() {
  return (
    <IssuesContainer>
      <IssuesCards>
        <Link to="/posts">
          <PostButton>
            <header>
              <h2>JavaScript data types and data structures</h2>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </PostButton>

          <PostButton>
            <header>
              <h2>JavaScript data types and data structures</h2>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </PostButton>

          <PostButton>
            <header>
              <h2>JavaScript data types and data structures</h2>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </PostButton>

          <PostButton>
            <header>
              <h2>JavaScript data types and data structures</h2>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </PostButton>
        </Link>
      </IssuesCards>
    </IssuesContainer>
  )
}
