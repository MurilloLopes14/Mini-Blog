import styled from "styled-components";

export const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Search_form = styled.form`
  max-width: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;

  & input {
    margin-right: 10px;
    width: 50%;
  }
`;

export const NoPosts = styled.div`
  text-align: center;

  & p {
    margin-bottom: 1.5em;
  }

  & a {
    padding: 10px 25px;
  }
`;
