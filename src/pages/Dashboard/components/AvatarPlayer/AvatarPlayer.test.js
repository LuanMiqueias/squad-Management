import { render } from "@testing-library/react";
import AvatarPlayer from "./";

it("Should return each first letter of the word", () => {
  const { getByText } = render(<AvatarPlayer name="Luan miqueias" />);

  const TextElement = getByText(/lm/i);
  expect(TextElement).toBeInTheDocument();
  //error message:
  //Is not returning every first letter of the word
});

it("Should return contrast class", () => {
  const { container } = render(
    <AvatarPlayer name="Luan miqueias" isMost={true} />
  );

  expect(container.firstChild).toHaveClass("borderMost");
  //error message:
  //Is not returning contrast diffrent
});

it("Should return standart class", () => {
  const { container } = render(
    <AvatarPlayer name="Luan miqueias" isMost={false} />
  );

  expect(container.firstChild).not.toHaveClass("borderMost");
  expect(container.firstChild).toHaveClass("borderLess");
  //error message:
  //Is not returning standart class
});

it("should match snapshot", () => {
  const { container } = render(<AvatarPlayer name="Luan miqueias" />);
  expect(container.firstChild).toMatchSnapshot();
});
