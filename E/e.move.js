export const EMove = {
  cycle: ["plop", "fade", "null", "next", "plop"],
  speed: 1600,

  apply(element, state) {
    element.className = "cluster " + state;
  }
};
