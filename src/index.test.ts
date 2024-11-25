import { app } from ".";

describe("app", () => {
  it("should log the expected message", () => {
    const consoleSpy = jest.spyOn(console, "log");

    app();

    expect(consoleSpy).toHaveReturnedWith("Hello World");
  });
});
