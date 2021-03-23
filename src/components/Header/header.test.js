import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./";

it("should match snapshot", () => {
  const { container } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect(container.firstChild).toMatchSnapshot();
});
