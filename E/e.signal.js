export const ESignal = {
  color(errors) {
    if (errors.length === 0) return "green";
    if (errors.length === 1) return "yellow";
    return "red";
  },

  apply(element, color) {
    element.style.color =
      color === "green" ? "#0f0" :
      color === "yellow" ? "#ff0" :
      "#f00";
  }
};
