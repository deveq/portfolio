import { render, screen, fireEvent } from "@testing-library/react";

import Card from "./Card";
import "./card.css";

describe("<Card /> component", () => {
  const text = "ChildComponent";

  const ChildComponent = () => {
    return <div>{text}</div>;
  };

  it("기본 렌더링 테스트", () => {
    const className = "test-className";
    const { container } = render(
      <Card className={className}>
        <ChildComponent />
      </Card>,
    );

    const childComponent = screen.getByText(text);
    expect(childComponent.parentElement.classList.contains(className)).toBe(
      true,
    );
    expect(childComponent).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("클릭 이벤트 테스트", () => {
    const handleClick = jest.fn();

    render(
      <Card onClick={handleClick}>
        <ChildComponent />
      </Card>,
    );

    const childComponent = screen.getByText(text);
    expect(handleClick).toHaveBeenCalledTimes(0);

    fireEvent.click(childComponent);
    expect(handleClick).toHaveBeenCalledTimes(1);
    fireEvent.click(childComponent);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
