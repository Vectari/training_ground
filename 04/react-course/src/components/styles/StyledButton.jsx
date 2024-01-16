import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  border: solid 1px;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  color: salmon;
  transition: background 0.3s;
  margin: ${({$margin}) => $margin + "px"};

  &:hover {
    color: white;
    background: salmon;
  }
`;
