import { helloWorld } from "./helloWorld";

export const app = () => {
  const message = helloWorld();

  console.log(message);
};
