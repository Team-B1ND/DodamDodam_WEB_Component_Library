import { render } from "@testing-library/react";
import React from "react";
import Dropdown from "./Dropdown";

describe("<Dropdown/>", () => {
  test("Dropdown 컴포넌트 렌더링 확인", () => {
    render(
      <Dropdown<{ value: string }>
        itemKey={"testDropdown"}
        disabled={"test" === "test"}
        disabledItem={"비활성화 테스트"}
        withDefault={true}
        defaultItem={"기본값 테스트"}
        name={"test"}
        items={[
          { idx: 1, value: "테스트1" },
          { idx: 2, value: "테스트2" },
          { idx: 3, value: "테스트3" },
        ]}
        itemsValuePath={"value"}
        onChange={() => {}}
      />
    );
  });
});
