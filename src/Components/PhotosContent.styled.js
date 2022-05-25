import styled from "styled-components";

export const List = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;

  li {
    display: grid;
    grid-template-columns: 50px 1fr auto;
    grid-template-rows: 50px;
    align-items: center;
    gap: 1rem;
    background: #f9f9f9;
    border-radius: 4px;
    margin-bottom: 1rem;
    padding-right: 1rem;
  }

  img {
    max-width: 100%;
    border-radius: 4px;
  }

  h2 {
    font-size: 1rem;
    font-weight: normal;
    margin: 0px;
  }

  span {
    font-family: monospace;
    font-size: 0.875rem;
    color: #999;
  }
`;
