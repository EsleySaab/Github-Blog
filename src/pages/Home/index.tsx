import { Header } from "../../components/Header"
import { Issues } from "../../components/Issues"
import { Profile } from "../../components/Profile"

export function Home() {
  return (
    <div>
      <Header />
      <Profile />
      <Issues />
    </div>
  )
}
