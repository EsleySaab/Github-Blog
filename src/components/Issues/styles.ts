import styled from "styled-components"

export const IssuesContainer = styled.div`
  width: 100%;

  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: 2rem;
`

export const IssuesCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
`

export const PostButton = styled.button`
  background: ${(props) => props.theme["gray-600"]};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-height: 260px;
  width: calc(50% - 1rem);
  border-radius: 10px;
  padding: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: left;
  transition: box-shadow 0.4s ease, transform 0.4s ease;

  &:hover {
    box-shadow: 0 0 0 3px ${(props) => props.theme["gray-400"]};
  }

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    h2 {
      color: ${(props) => props.theme["white"]};
      font-weight: bold;
      line-height: 140%;
      font-size: 1.5rem;
    }

    span {
      color: ${(props) => props.theme["gray-300"]};
      white-space: nowrap;
      margin-top: 0.4rem;
    }
  }
  p {
    color: ${(props) => props.theme["gray-200"]};
    font-size: 1rem;
  }
`
