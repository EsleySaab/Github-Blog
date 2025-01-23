import { MapPin } from "phosphor-react"
import styled from "styled-components"

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  z-index: 2;
  margin-top: -8rem;
  position: relative;
  background: ${(props) => props.theme["gray-700"]};
  border-radius: 10px;
  padding: 2rem 2rem;
  align-items: flex-start;
`

export const ProfileHeader = styled.header`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  width: 100%;
`

export const ProfileImage = styled.div`
  img {
    object-fit: cover;
    border-radius: 10px;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 0.5rem;
  }

  h1 {
    color: ${(props) => props.theme["white"]};
    font-weight: bold;
  }

  a {
    display: flex;
    gap: 0.5rem;
    text-decoration: none;
    color: ${(props) => props.theme["blue-100"]};
    height: fit-content;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  main {
    color: ${(props) => props.theme["gray-200"]};
  }
`

export const ProfileInfo = styled.footer`
  display: flex;
  gap: 2rem;
  margin-top: 1.7rem;

  & div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`

export const SearchFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: 4.5rem;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    & h3 {
      color: ${(props) => props.theme["gray-100"]};
      font-weight: bold;
      font-size: 1.2rem;
    }

    & span {
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  & input[type="text"] {
    padding: 0.8rem;
    border-radius: 6px;
    background: ${(props) => props.theme["gray-900"]};
    outline: 0;
    border: 1px solid ${(props) => props.theme["gray-500"]};
    color: ${(props) => props.theme["gray-400"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-400"]};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme["blue-100"]};
    }
  }
`

export const StyledMapPin = styled(MapPin)`
  color: ${(props) => props.theme["gray-400"]};
`
