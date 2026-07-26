export const EMove = {
  speed: 1600,

  apply(element, state) {
    element.className = "cluster " + state;
  }
};
