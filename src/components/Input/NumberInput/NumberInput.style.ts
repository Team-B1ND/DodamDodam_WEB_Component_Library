import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const NumberInputContainer = styled.input`
  border: 0px;
  outline: none;
  border-bottom: 1px solid #a1a1a1;
  font-size: 18px;
  padding: 2px 5px;
  height: 32px;
  box-sizing: border-box;

  &::placeholder {
    font-size: 14px;
    opacity: 30%;
  }

  &:focus {
    border-bottom: 1px solid ${palette.main};
    transition-duration: 0.5s;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  text-align: end;
`;
