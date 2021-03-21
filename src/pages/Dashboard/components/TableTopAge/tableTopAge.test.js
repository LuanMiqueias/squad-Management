import { render } from "@testing-library/react";
import TableTopAge from "./index";

const props = [
  {
    name: "test 1",
    description: "description 1",
  },
  {
    name: "teste 2",
    description: "Description 1",
  },
];

it("Should return name and description", () => {
  const { getAllByLabelText } = render(<TableTopAge data={props} />);
  const names = getAllByLabelText("name");
  const descriptions = getAllByLabelText("description");

  names.forEach((name) => {
    return expect(name).not.toHaveTextContent("");
  });
  descriptions.forEach((description) => {
    return expect(description).not.toHaveTextContent("");
  });
});

it("should match snapshot", () => {
  const { container } = render(<TableTopAge data={props} />);
  expect(container.firstChild).toMatchSnapshot();
});
