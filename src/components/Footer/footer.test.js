import { render } from "@testing-library/react";
import Footer from "./";

it("Should math snapshot", () => {
  const { container } = render(<Footer />);
  expect(container.fistChild).toMatchSnapshot();
});
