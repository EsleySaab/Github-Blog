import {
  FormContainer,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileImage,
  ProfileInfo,
} from "./styles"
import avatar from "../../assets/avatar.jpeg"
import { ArrowSquareOut } from "phosphor-react"
import github from "../../assets/Icon.svg"
import predio from "../../assets/predio.svg"
import followers from "../../assets/followers.svg"

export function Profile() {
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
              <h1>Esley Santana</h1>
              <a href="">
                Github
                <ArrowSquareOut width={20} height={20} />
              </a>
            </header>
            <main>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </main>
            <ProfileInfo>
              <div>
                <img src={github} alt="" width={22} height={22} />

                <span>EsleySaab</span>
              </div>
              <div>
                <img src={predio} alt="" />
                <span>Rocketseat</span>
              </div>
              <div>
                <img src={followers} alt="" />
                <span>22 seguidores</span>
              </div>
            </ProfileInfo>
          </ProfileContent>
        </ProfileHeader>
      </ProfileContainer>

      <FormContainer action="">
        <div>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </FormContainer>
    </>
  )
}
