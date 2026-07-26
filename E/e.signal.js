export const ESignal = {
  color(errors) {
    if (!errors || errors.length === 0) return "green";
    if (errors.length === 1) return "yellow";
    return "red";
  },

  apply(element, color) {
    element.classList.remove("green", "yellow", "red");
    element.classList.add(color);
  }
};
