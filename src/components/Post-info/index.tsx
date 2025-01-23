import { PostInfoContainer } from "./styles"
import ArrowBack from "../../assets/arrow-left.svg"
import { ArrowSquareOut } from "phosphor-react"
import github from "../../assets/Icon.svg"
import calendar from "../../assets/calendar.svg"
import comment from "../../assets/comment.svg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

interface PostInfo {
  title: string
  user: {
    login: string
  }
  comments: number
  created_at: string
}

interface PostInfoProps {
  items: PostInfo[]
}

export function PostInfo() {
  const [post, setPost] = useState<PostInfo | null>(null)

  useEffect(() => {
    axios
      .get<PostInfoProps>(
        "https://api.github.com/search/issues?q=repo:EsleySaab/Github-Blog"
      )
      .then((response) => {
        const firstIssue = response.data.items[0]
        setPost(firstIssue)
      })
  }, [])

  return (
    <PostInfoContainer>
      <header>
        <Link to="/">
          <div>
            <a href="">
              <img src={ArrowBack} alt="" />
              Voltar
            </a>
          </div>
        </Link>
        <div>
          <a href="">
            Ver no Github
            <ArrowSquareOut width={20} height={20} />
          </a>
        </div>
      </header>

      <main>
        <h2>{post?.title}</h2>
      </main>

      <footer>
        <div>
          <img src={github} alt="" width={22} height={22} />
          <span>{post?.user.login}</span>
        </div>
        <div>
          <img src={calendar} alt="" width={22} height={22} />
          {post
            ? new Date(post.created_at).toLocaleDateString()
            : "Carregando data..."}
        </div>
        <div>
          <img src={comment} alt="" width={22} height={22} />
          {post?.comments} comentários
        </div>
      </footer>
    </PostInfoContainer>
  )
}
