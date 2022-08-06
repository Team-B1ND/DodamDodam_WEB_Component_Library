import styled from "styled-components";
import { palette } from "../../styles/palette";

export const DropdownContainer = styled.select`
  width: 165px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundColor3};
  padding-left: 13px;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.contrast};

  :focus {
    border: 1px solid ${palette.main};
  }
`;
