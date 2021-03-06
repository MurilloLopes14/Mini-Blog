import styled from "styled-components";

export const AboutContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 70%;

  & span {
    color: #111;
    font-weight: 700;
  }
`;

export const P = styled.p`
  color: #aaa;
  margin-bottom: 2em;
  font-size: 1.1em;
`;

export const H3 = styled.h3`
  display: block;
  margin-top: 15px;
  padding: 10px 15px;
`;
