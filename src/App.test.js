import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App, { IceCream } from "./App";

/**************************************************************************************************
 * Volunteers: add your tests here. They should be failing, but the students should be able to make
 * them pass by editing the other files.
 **************************************************************************************************/


describe("when rendering the App component", () => {
  test("IceCream can render a flavor prop",()=>{
    const { getByText } = render(<IceCream flavor='foo' />);
    const textElement = getByText('foo');
    expect(textElement).toBeInTheDocument();
  })
  test("App will have strawberry IceCream component",()=>{
    const { getByText } = render(<App />)
    const strawberry = getByText("strawberry");
    expect(strawberry).not.toBeFalsy();
  })
  test("App will have chocolate IceCream component",()=>{
    const { getByText } = render(<App />)
    const chocolate = getByText("chocolate");
    expect(chocolate).not.toBeFalsy();
  })
  test("App will have vanilla IceCream component",()=>{
    const { getByText } = render(<App />)
    const vanilla = getByText("vanilla");
    expect(vanilla).not.toBeFalsy();
  })
  test("App.js will export an IceCream component",()=>{
    expect(IceCream).not.toBeFalsy();
  })
});

/**
 * test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})
 */