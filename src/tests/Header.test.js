import React from "react";
import { shallow } from "enzyme";
import Header from "../components/header/Header";
import StyleContext from "../contexts/StyleContext";

test("Header Component renders without crashing", () => {
  const mockContextValue = { isDark: false }; 

  const wrapper = shallow(
    <StyleContext.Provider value={mockContextValue}>
      <Header />
    </StyleContext.Provider>
  );

  expect(wrapper.exists()).toBe(true);
});