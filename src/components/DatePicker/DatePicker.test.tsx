import { render } from "@testing-library/react";
import React from "react";
import DatePicker from "./DatePicker";

describe("<DatePicker/>", () => {
  test("DatePicker 컴포넌트 렌더링 확인", () => {
    render(
      <DatePicker
        width={200}
        height={12}
        itemKey={"testDatePicker"}
        onChange={() => {}}
      />
    );
  });
});
