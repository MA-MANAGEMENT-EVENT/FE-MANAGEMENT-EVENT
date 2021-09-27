import React from "react";
import FeedbackForm from "../FeedbackForm";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestRenderer from "react-test-renderer";
import Nav from "../../molecules/nav/Nav";
import Section from "../../organisms/Section";
import Footer from "../../molecules/footer/Footer";

// const component = render(<FeedbackForm/>)
// const testRenderer = TestRenderer.create(<FeedbackForm />);
// const testInstance = testRenderer.root;
// test("should contains Nav and Contains these property", () => {
//   expect(testInstance.findByType(Nav)).toBeTruthy();
//   expect(testInstance.findByType(Nav).props.position).toBe("static");
//   expect(testInstance.findByType(Nav).props.variant).toBe("h5");
// });
// test("should contains Section", () => {
//   expect(testInstance.findByType(Section)).toBeTruthy();
// });
// test("should contains Footer", () => {
//   expect(testInstance.findByType(Footer)).toBeTruthy();
// });
describe("FeedbackForm Component", () => {
  let component;
  beforeEach(() => {
    component = render(<FeedbackForm />);
  });
  it("render Footer correctly", () => {
    const footer = component.getByTestId("footer");
    expect(footer.textContent).toBe("copyright © ravenwijaya");
  });
  it("render Nav correctly", () => {
    const nav = component.getByTestId("nav");
    expect(nav.textContent).toBe("Feedback");
  });
  it("change value of input works correctly", () => {
    const inputratemembantu = component.getByTestId("ratemembantu").querySelector('input');
    fireEvent.change(inputratemembantu, {
      target:{
        value:1
      }
    })
    expect(parseInt(inputratemembantu.value)).toBe(1)
  })
});
