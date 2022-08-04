import { render } from "@testing-library/react";
import React from "react";
import Button from "./Button";

describe("<Button/>", () => {
  test("Button 컴포넌트 렌더링 확인", () => {
    render(
      <Button
        width={100}
        height={20}
        onClick={() => console.log("테스트")}
        disabled={true}
        children={<>테스트</>}
      />
    );
  });
});
