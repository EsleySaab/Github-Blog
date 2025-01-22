import {
  SearchFormContainer,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileImage,
  ProfileInfo,
} from "./styles"
import avatar from "../../assets/avatar.jpeg"
import { ArrowSquareOut } from "phosphor-react"
import github from "../../assets/Icon.svg"
import followers from "../../assets/followers.svg"
import axios from "axios"
import { useEffect, useState } from "react"

interface ProfileProps {
  name: string
  bio: string | null
  company: string | null
  followers: number
  html_url: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps | null>(null)

  useEffect(() => {
    const username = "EsleySaab"

    axios.get(`https://api.github.com/users/${username}`).then((response) => {
      console.log("Dados do perfil:", response.data)
      setProfile(response.data)
    })
  }, [])

  if (!profile) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <ProfileContainer>
        <ProfileHeader>
          <ProfileImage>
            <img
              src={avatar}
              alt="Avatar de Esley Santana"
              width={180}
              height={180}
            />
          </ProfileImage>
          <ProfileContent>
            <header>
              <h1>{profile.name}</h1>
              <a href={profile.html_url} target="_blank">
                Github
                <ArrowSquareOut width={20} height={20} />
              </a>
            </header>
            <main>{profile.bio}</main>
            <ProfileInfo>
              <div>
                <img src={github} alt="" width={22} height={22} />

                <span>{profile.name}</span>
              </div>

              <div>
                <img src={followers} alt="" />
                <span>{profile.followers} seguidores</span>
              </div>
            </ProfileInfo>
          </ProfileContent>
        </ProfileHeader>
      </ProfileContainer>

      <SearchFormContainer action="">
        <div>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchFormContainer>
    </>
  )
}
