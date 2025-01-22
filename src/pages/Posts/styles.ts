import styled from "styled-components"

export const PostContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  p {
    margin-top: 2.5rem;
    color: ${(props) => props.theme["gray-200"]};
    font-size: 18px;
  }

  span {
    margin-top: 2rem;
    color: ${(props) => props.theme["gray-200"]};
    font-size: 18px;
  }

  a {
    color: ${(props) => props.theme["blue-100"]};
    text-decoration: underline;
    cursor: pointer;
  }
`

export const CodeContent = styled.div`
  margin-top: 1.5rem;
  background: ${(props) => props.theme["gray-600"]};
  width: 100%;
  height: 110px;

  
`
