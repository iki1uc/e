export const EError = {
  scan(text) {
    const errors = [];

    if (!text) return ["fail"];

    const lower = text.toLowerCase();

    const patterns = [
      "tmp.room",
      "tmp,room",
      "ghost.html",
      "tmp-matrix",
      "tmp",
      "error",
      "fail"
    ];

    patterns.forEach(p => {
      if (lower.includes(p)) errors.push(p);
    });

    return errors;
  }
};
