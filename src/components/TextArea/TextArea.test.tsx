import { render } from "@testing-library/react";
import React from "react";
import TextArea from "./TextArea";

describe("<TextArea/>", () => {
  test("TextArea 컴포넌트 렌더링 확인", () => {
    render(
      <TextArea
        width={310}
        height={65}
        placeHolder={"사유를 입력하세요"}
        text={"테스트 내용"}
        onChange={() => {}}
        textMaxLength={100}
        fontSize={12}
        name="none"
      />
    );
  });
});
