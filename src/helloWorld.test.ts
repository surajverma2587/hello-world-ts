import { helloWorld } from "./helloWorld";

describe("helloWorld", () => {
  it('should return "Hello World"', () => {
    expect(helloWorld()).toEqual("Hello World");
  });
});
