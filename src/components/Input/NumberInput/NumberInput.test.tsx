import { render } from "@testing-library/react";
import React from "react";
import NumberInput from "./NumberInput";

describe("<NumberInput/>", () => {
  test("NumberInput 컴포넌트 렌더링 확인", () => {
    render(
      <NumberInput width={50} onChange={() => {}} value={0} name="test" />
    );
  });
});
