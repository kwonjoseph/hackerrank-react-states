import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

/**************************************************************************************************
 * Volunteers: add your tests here. They should be failing, but the students should be able to make
 * them pass by editing the other files.
 **************************************************************************************************/


describe("when rendering the App component", () => {
  test("diamond changer clicked the first time should change the diamond pink",()=>{
    const container = render(<App />);
    const textElement = container.getByText('diamond changer');
    fireEvent.click(textElement)
    const diamond = container.getByTestId('diamond')
    expect(diamond.style.backgroundColor).toEqual('pink');
  })
  test("diamond changer clicked the second time should change the diamond back to hex color code #b9f2ff or rgb(185, 242, 255)",()=>{
    const container = render(<App />);
    const textElement = container.getByText('diamond changer');
    fireEvent.click(textElement)
    fireEvent.click(textElement)
    const diamond = container.getByTestId('diamond')
    expect(diamond.style.backgroundColor).toEqual('rgb(185, 242, 255)' || '#b9f2ff');
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