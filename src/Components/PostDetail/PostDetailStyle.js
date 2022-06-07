import styled from "styled-components";

export const Post_detailStyle = styled.div`
  margin-bottom: 2em;

  & img {
    max-width: 600px;
  }

  & h2 {
    margin-bottom: 0.4em;
  }
`;

export const Tags = styled.div`
  margin-bottom: 1.2em;
  display: flex;
  flex-direction: row;

  & p {
    margin-right: 0.5em;
  }

  & span {
    font-weight: 700;
  }
`;

export const CreatedBy = styled.h1`
  font-style: italic;
  color: #444;
  font-size: 0.9em;
  margin-bottom: 0.8em;
`;
