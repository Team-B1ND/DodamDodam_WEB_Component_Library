import { render } from "@testing-library/react";
import React from "react";
import TextInput from "./TextInput";

describe("<TextInput/>", () => {
  test("TextInput 컴포넌트 렌더링 확인", () => {
    render(
      <TextInput width={334} onChange={() => {}} value={"test"} name="test" />
    );
  });
});
