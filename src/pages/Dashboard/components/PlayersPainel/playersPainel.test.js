import { render, screen } from "@testing-library/react";
import PlayersPainel from "./";

const dataFake = [
  {
    name: "test 1",
    percent: 45,
  },
  {
    name: "test 2",
    percent: 55,
  },
];
it("Should must return in the order of the most chosen players and the least chosen players", () => {
  render(<PlayersPainel data={dataFake} />);
  const textElement = screen.getByText(/most/i);
  const textElementName_1 = screen.getByText(/t1/i);
  const textElementName_2 = screen.getByText(/t2/i);

  expect(textElement).toBeInTheDocument();
  expect(textElementName_1).toBeInTheDocument();
  expect(textElementName_2).toBeInTheDocument();
});

it("Should math snapshot", () => {
  const { container } = render(<PlayersPainel data={dataFake} />);

  expect(container.firstChild).toMatchSnapshot();
});
