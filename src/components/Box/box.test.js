import { render } from "@testing-library/react";
import Box from "./";

it("Shold math snapshot", () => {
  const { container } = render(<Box title="test" classNameBox="classTest" />);

  expect(container.firstChild).toMatchSnapshot();
});

it("Should background if isBackground to equal true", () => {
  const { container } = render(
    <Box title="test" classNameBox="classTest" isBackground={true} />
  );
  expect(container.firstChild).toHaveClass("backgroundBox");
});

it("Should not have background if isBackground to equal false", () => {
  const { container } = render(
    <Box title="test" classNameBox="classTest" isBackground={false} />
  );
  expect(container.firstChild).not.toHaveClass("backgroundBox");
});

it("Should have button add-team if isAddItems to equal true", () => {
  const { queryByLabelText } = render(
    <Box title="test" classNameBox="classTest" isAddItems={true} />
  );
  const textElement = queryByLabelText(/create new team/i);
  expect(textElement).toBeInTheDocument();
});

it("Should not have button add-team if isAddItems to equal false", () => {
  const { queryByLabelText } = render(
    <Box title="test" classNameBox="classTest" isAddItems={false} />
  );
  const textElement = queryByLabelText(/create new team/i);
  expect(textElement).not.toBeInTheDocument();
});
