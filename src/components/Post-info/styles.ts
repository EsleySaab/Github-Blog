import styled from "styled-components"

export const PostInfoContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 168px;

  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-top: -8rem;
  position: relative;
  background: ${(props) => props.theme["gray-700"]};
  border-radius: 10px;
  padding: 2rem 2rem;
  align-items: flex-start;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  a {
    gap: 0.5rem;
    color: ${(props) => props.theme["blue-100"]};
    cursor: pointer;
  }

  main {
    margin-top: 1.25rem;
    & h2 {
      color: ${(props) => props.theme["white"]};
      font-weight: bold;
      font-size: 24px;
      line-height: 130%;
    }
  }

  footer {
    display: flex;
    margin-top: 0.5rem;
    gap: 2rem;

    & div {
      display: flex;
      gap: .5rem;
      align-items: center;
    }
  }
`
