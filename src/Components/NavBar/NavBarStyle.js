import styled from "styled-components";

export const NavBarStyle = styled.nav`
  display: flex;
  text-align: center;
  height: 80px;
  box-shadow: 0px -2px 10px 0px rgba(0, 0, 0, 0.15);
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 2em;
  margin: 1em;
`;

export const Brand = styled.div`
  font-size: 1.2em;
`;

export const Span = styled.span`
  font-weight: 900;
  text-transform: uppercase;
`;

export const Links_list_ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const Links_list_li = styled.li`
  margin-right: 1em;
  font-size: 1.1em;
`;
