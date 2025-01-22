import { PostInfoContainer } from "./styles"
import ArrowBack from "../../assets/arrow-left.svg"
import { ArrowSquareOut } from "phosphor-react"
import github from "../../assets/Icon.svg"
import calendar from "../../assets/calendar.svg"
import comment from "../../assets/comment.svg"
import { Link } from "react-router-dom"

export function PostInfo() {
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
        <h2>JavaScript data types and data structures</h2>
      </main>

      <footer>
        <div>
          <img src={github} alt="" width={22} height={22} />
          <span>EsleySaab</span>
        </div>
        <div>
          <img src={calendar} alt="" width={22} height={22} />
          Há 1 dia
        </div>
        <div>
          <img src={comment} alt="" width={22} height={22} />5 comentários
        </div>
      </footer>
    </PostInfoContainer>
  )
}
