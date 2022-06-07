import styled from "styled-components";

export const PostStyle = styled.div`
  text-align: center;

  & h3 {
    margin-bottom: 0.2em;
  }

  & img {
    max-width: 80%;
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;

  & p {
    margin-right: 1em;
  }

  & span {
    font-weight: 700;
  }
`;
