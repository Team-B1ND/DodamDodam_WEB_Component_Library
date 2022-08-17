import styled from "styled-components";
import { palette } from "../../styles/palette";

export const TextInputContainer = styled.input`
  border: 0px;
  outline: none;
  border-bottom: 1px solid #a1a1a1;
  font-size: 18px;
  padding: 2px 5px;
  height: 32px;

  &::placeholder {
    font-size: 14px;
    opacity: 30%;
  }

  &:focus {
    border-bottom: 1px solid ${palette.main};
    transition-duration: 0.5s;
  }
`;
